import { Users, DollarSign, Calendar, CreditCard } from 'lucide-react';
import { MetricCard } from '@/types/dashboard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function StatCard({ item }: { item: MetricCard }) {
  const renderIcon = () => {
    switch (item.iconType) {
      case 'users':
        return <Users className="w-4 h-4 text-[#5B5BF7]" />;
      case 'revenue':
        return <DollarSign className="w-4 h-4 text-[#5B5BF7]" />;
      case 'bookings':
        return <Calendar className="w-4 h-4 text-[#5B5BF7]" />;
      case 'transactions':
        return <CreditCard className="w-4 h-4 text-[#5B5BF7]" />;
    }
  };

  return (
    <Card className="rounded-xl border-slate-200 shadow-xs py-5 px-5">
      <CardHeader className="p-0 flex flex-row items-center justify-between space-y-0">
        <span className="text-xs font-medium text-slate-500">{item.title}</span>
        <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] flex items-center justify-center">
          {renderIcon()}
        </div>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <div className="text-2xl font-bold text-slate-900">{item.value}</div>
        <div className="flex items-center gap-1.5 mt-1 text-xs">
          <span className={`font-semibold ${item.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
            {item.change}
          </span>
          <span className="text-slate-400">{item.comparisonText}</span>
        </div>
      </CardContent>
    </Card>
  );
}