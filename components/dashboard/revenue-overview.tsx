'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { ChartItem } from '@/types/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setSelectedRange } from '@/store/slices/ui-slice';
import { COLORS } from '@/constants/color';

export function RevenueOverview({ chartData }: { chartData: ChartItem[] }) {
  const dispatch = useDispatch();
  const selectedRange = useSelector((state: RootState) => state.ui.selectedRange);
  const ranges = ['7D', '1M', '3M', '6M', '1Y'];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Revenue Overview</h3>
          <p className="text-xs text-slate-400 mt-0.5">Apr 2024 – Sep 2024</p>
        </div>

        <div className="flex gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200 self-start sm:self-auto">
          {ranges.map((range) => (
            <button
              key={range}
              onClick={() => dispatch(setSelectedRange(range))}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                selectedRange === range
                  ? 'bg-white text-[#5B5BF7] shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
  <defs>
    <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.15} />
      <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0.0} />
    </linearGradient>
  </defs>
  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={COLORS.borderLight} />
  <XAxis
    dataKey="month"
    axisLine={false}
    tickLine={false}
    tick={{ fontSize: 11, fill: COLORS.textMuted }}
  />
  <YAxis
    axisLine={false}
    tickLine={false}
    tick={{ fontSize: 11, fill: COLORS.textMuted }}
    tickFormatter={(val) => `$${val / 1000}k`}
  />
  <Tooltip
    formatter={(value: any) => [`$${Number(value || 0).toLocaleString()}`, 'Revenue']}
    contentStyle={{
      backgroundColor: COLORS.sidebarBg,
      borderRadius: '8px',
      border: 'none',
      color: '#FFFFFF',
      fontSize: '12px',
    }}
  />
  <Area
    type="monotone"
    dataKey="revenue"
    stroke={COLORS.primary}
    strokeWidth={2.5}
    fill="url(#purpleGrad)"
  />
</AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}