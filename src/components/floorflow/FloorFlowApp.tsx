import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { OverviewPage } from '../../pages/floorflow/OverviewPage';
import { LineMonitorPage } from '../../pages/floorflow/LineMonitorPage';
import { BatchesPage } from '../../pages/floorflow/BatchesPage';
import { QualityPage } from '../../pages/floorflow/QualityPage';
import { ReadinessPage } from '../../pages/floorflow/ReadinessPage';
import { RejectionsPage } from '../../pages/floorflow/RejectionsPage';

export const FloorFlowApp: React.FC = () => {
  const { currentRoute } = useFloorFlow();

  const renderActivePage = () => {
    switch (currentRoute) {
      case '/overview':
        return <OverviewPage />;
      case '/line-monitor':
        return <LineMonitorPage />;
      case '/batches':
        return <BatchesPage />;
      case '/quality':
        return <QualityPage />;
      case '/readiness':
        return <ReadinessPage />;
      case '/rejections':
        return <RejectionsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#ECEAE3] flex">
      {/* Floating Pill Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 px-4 md:px-8 pt-2">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
};
