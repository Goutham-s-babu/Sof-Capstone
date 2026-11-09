import React from 'react';
import { FloorFlowProvider } from './context/FloorFlowContext';
import { FloorFlowApp } from './components/floorflow/FloorFlowApp';

export const App: React.FC = () => {
  return (
    <FloorFlowProvider>
      <FloorFlowApp />
    </FloorFlowProvider>
  );
};

export default App;
