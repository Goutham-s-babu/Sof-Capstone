-- FloorFlow Production Operations Visibility Platform
-- PostgreSQL Database Migration for Supabase

-- 1. Create Enums
CREATE TYPE production_stage_type AS ENUM ('Cutting', 'Assembly', 'Inspection', 'Packing', 'Completed');
CREATE TYPE batch_status_type AS ENUM ('In Progress', 'Waiting', 'On Hold', 'Completed');
CREATE TYPE quality_result_type AS ENUM ('Pass', 'Fail', 'Needs Review', 'Pending');
CREATE TYPE quality_check_status_type AS ENUM ('Scheduled', 'In Progress', 'Completed');
CREATE TYPE readiness_status_type AS ENUM ('Ready', 'At Risk', 'Blocked');
CREATE TYPE requirement_status_type AS ENUM ('Ready', 'Pending', 'Missing', 'Not Applicable');
CREATE TYPE user_role_type AS ENUM ('Admin', 'Production Manager', 'Supervisor', 'Quality Inspector', 'Operator');

-- 2. Products Table
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    target_cycle_time_mins INTEGER DEFAULT 45,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 3. Batches Table
CREATE TABLE IF NOT EXISTS batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_code VARCHAR(50) NOT NULL UNIQUE,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
    planned_quantity INTEGER NOT NULL CHECK (planned_quantity > 0),
    completed_quantity INTEGER NOT NULL DEFAULT 0 CHECK (completed_quantity >= 0),
    current_stage production_stage_type NOT NULL DEFAULT 'Cutting',
    status batch_status_type NOT NULL DEFAULT 'In Progress',
    assigned_to VARCHAR(150),
    target_line VARCHAR(100),
    notes TEXT,
    started_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    CONSTRAINT check_quantities CHECK (completed_quantity <= planned_quantity * 1.1) -- allows small overruns if applicable
);

-- 4. Production Stages (History & Routing) Table
CREATE TABLE IF NOT EXISTS production_stages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    stage_name production_stage_type NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Pending',
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    waiting_reason TEXT,
    operator VARCHAR(150),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 5. Quality Checks Table
CREATE TABLE IF NOT EXISTS quality_checks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    check_type VARCHAR(200) NOT NULL,
    inspector VARCHAR(150) NOT NULL,
    result quality_result_type NOT NULL DEFAULT 'Pending',
    observations TEXT,
    due_at TIMESTAMPTZ,
    inspected_at TIMESTAMPTZ,
    status quality_check_status_type NOT NULL DEFAULT 'Scheduled',
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 6. Production Runs Table
CREATE TABLE IF NOT EXISTS production_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    run_code VARCHAR(50) NOT NULL UNIQUE,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
    planned_start TIMESTAMPTZ NOT NULL,
    status readiness_status_type NOT NULL DEFAULT 'At Risk',
    supervisor VARCHAR(150) NOT NULL,
    target_line VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 7. Readiness Checks Table
CREATE TABLE IF NOT EXISTS readiness_checks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    production_run_id UUID NOT NULL REFERENCES production_runs(id) ON DELETE CASCADE,
    requirement_type VARCHAR(100) NOT NULL,
    owner VARCHAR(150) NOT NULL,
    status requirement_status_type NOT NULL DEFAULT 'Pending',
    notes TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 8. Rejections Table
CREATE TABLE IF NOT EXISTS rejections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE RESTRICT,
    production_stage VARCHAR(100) NOT NULL,
    rejected_quantity INTEGER NOT NULL CHECK (rejected_quantity > 0),
    rejection_reason VARCHAR(100) NOT NULL,
    recorded_by VARCHAR(150) NOT NULL,
    notes TEXT,
    recorded_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 9. Activity Logs Table
CREATE TABLE IF NOT EXISTS activity_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type VARCHAR(50) NOT NULL,
    entity_id VARCHAR(100) NOT NULL,
    action VARCHAR(150) NOT NULL,
    previous_value TEXT,
    new_value TEXT,
    performed_by VARCHAR(150) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 10. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_batches_current_stage ON batches(current_stage);
CREATE INDEX IF NOT EXISTS idx_batches_status ON batches(status);
CREATE INDEX IF NOT EXISTS idx_batches_product_id ON batches(product_id);
CREATE INDEX IF NOT EXISTS idx_quality_checks_batch_id ON quality_checks(batch_id);
CREATE INDEX IF NOT EXISTS idx_quality_checks_status ON quality_checks(status);
CREATE INDEX IF NOT EXISTS idx_quality_checks_result ON quality_checks(result);
CREATE INDEX IF NOT EXISTS idx_readiness_checks_run_id ON readiness_checks(production_run_id);
CREATE INDEX IF NOT EXISTS idx_rejections_batch_id ON rejections(batch_id);
CREATE INDEX IF NOT EXISTS idx_rejections_reason ON rejections(rejection_reason);
CREATE INDEX IF NOT EXISTS idx_rejections_stage ON rejections(production_stage);
CREATE INDEX IF NOT EXISTS idx_activity_logs_entity ON activity_logs(entity_type, entity_id);

-- 11. Row Level Security (RLS) Setup
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE production_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE quality_checks ENABLE ROW LEVEL SECURITY;
ALTER TABLE production_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE readiness_checks ENABLE ROW LEVEL SECURITY;
ALTER TABLE rejections ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Base RLS: Authenticated users can read all operational data
CREATE POLICY "Allow authenticated read for all products" ON products FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read for all batches" ON batches FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read for all stages" ON production_stages FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read for all quality checks" ON quality_checks FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read for all production runs" ON production_runs FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read for all readiness checks" ON readiness_checks FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read for all rejections" ON rejections FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read for all activity logs" ON activity_logs FOR SELECT TO authenticated USING (true);

-- Insertion & Update Policies for role-specific operations
CREATE POLICY "Allow authorized batch modification" ON batches FOR ALL TO authenticated
USING (auth.jwt() ->> 'role' IN ('Admin', 'Production Manager', 'Supervisor'));

CREATE POLICY "Allow quality inspector recording" ON quality_checks FOR ALL TO authenticated
USING (auth.jwt() ->> 'role' IN ('Admin', 'Production Manager', 'Supervisor', 'Quality Inspector'));

CREATE POLICY "Allow readiness modifications" ON readiness_checks FOR ALL TO authenticated
USING (auth.jwt() ->> 'role' IN ('Admin', 'Production Manager', 'Supervisor'));

CREATE POLICY "Allow rejection logging" ON rejections FOR ALL TO authenticated
USING (auth.jwt() ->> 'role' IN ('Admin', 'Production Manager', 'Supervisor', 'Quality Inspector', 'Operator'));
