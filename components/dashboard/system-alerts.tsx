import { Alert } from '@/types/dashboard';

export function SystemAlerts({ alerts }: { alerts: Alert[] }) {
  const getDot = (level: Alert['level']) => {
    if (level === 'critical') return 'bg-rose-500';
    if (level === 'warning') return 'bg-amber-500';
    return 'bg-blue-500';
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <h3 className="text-sm font-semibold text-slate-900 mb-4">System Alerts</h3>
      <div className="space-y-4">
        {alerts.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${getDot(item.level)}`} />
            <div>
              <p className="text-xs font-semibold text-slate-900">{item.title}</p>
              <p className="text-[11px] text-slate-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}