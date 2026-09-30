'use client';

import { useDashboard } from '@/hooks/use-dashboard';
import { StatCard } from '@/components/dashboard/stat-card';
import { RevenueOverview } from '@/components/dashboard/revenue-overview';
import { SystemAlerts } from '@/components/dashboard/system-alerts';
import { SystemHealth } from '@/components/dashboard/system-health';
import { RecentTransactions } from '@/components/dashboard/recent-transactions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setSelectedTab } from '@/store/slices/ui-slice';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function DashboardPage() {
  const { data, isLoading, isError, refetch } = useDashboard();
  const dispatch = useDispatch();
  const selectedTab = useSelector((state: RootState) => state.ui.selectedTab);

  const tabs = ['Overview', 'Analytics', 'Reports', 'Settings'];

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-6 w-48 bg-slate-200 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-28 bg-white border border-slate-200 rounded-xl" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-72 bg-white border border-slate-200 rounded-xl" />
          <div className="h-72 bg-white border border-slate-200 rounded-xl" />
        </div>
      </div>
    );
  }

  // 2. Error State
  if (isError || !data) {
    return (
      <div className="bg-white border border-rose-200 rounded-xl p-8 text-center flex flex-col items-center">
        <AlertCircle className="w-10 h-10 text-rose-500 mb-2" />
        <h4 className="font-semibold text-slate-900 text-sm">Failed to load dashboard data</h4>
        <p className="text-xs text-slate-500 mb-4">Please check your network and try again.</p>
        <button
          onClick={() => refetch()}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#5B5BF7] text-white rounded-lg text-xs font-medium hover:bg-[#4a4ae6]"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-slate-200 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => dispatch(setSelectedTab(tab))}
            className={`pb-3 font-medium relative transition-colors ${
              selectedTab === tab ? 'text-[#5B5BF7]' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {tab}
            {selectedTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5B5BF7] rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.metrics.map((item) => (
          <StatCard key={item.id} item={item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueOverview chartData={data.chartData} />
        </div>
        <div className="space-y-6">
          <SystemAlerts alerts={data.alerts} />
          <SystemHealth health={data.health} />
        </div>
      </div>

      <RecentTransactions transactions={data.transactions} />
    </div>
  );
}