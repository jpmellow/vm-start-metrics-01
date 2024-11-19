import React from 'react';
import { DashboardMetrics } from '../components/DashboardMetrics';
import { FileUpload } from '../components/FileUpload';

export default function Dashboard() {
  const handleFileUpload = async (files: File[]) => {
    // Implementation will be added in the next iteration
    console.log('Files uploaded:', files);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Customer Attribution Dashboard
      </h1>
      
      <DashboardMetrics />
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Data Import</h2>
        <FileUpload onUpload={handleFileUpload} />
      </div>
    </div>
  );
}