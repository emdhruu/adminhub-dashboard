import React from 'react';
import { AppSidebar } from './app.sidebar';
import { AppHeader } from './app.header';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-row w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader />
        <main className="flex-1 min-h-0 overflow-y-auto">
          <div className='p-4 md:p-8 space-y-6 max-w-7xl w-full mx-auto'>
          {children}
          </div>
        </main>
      </div>
    </div>
  );
}