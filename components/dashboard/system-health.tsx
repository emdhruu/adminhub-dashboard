interface Props {
  health: {
    uptime: string;
    responseTime: string;
    activeSessions: string;
  };
}

export function SystemHealth({ health }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <h3 className="text-sm font-semibold text-slate-900 mb-3">System Health</h3>
      <div className="space-y-3 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Uptime</span>
          <span className="font-semibold text-slate-900">{health.uptime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Avg Response Time</span>
          <span className="font-semibold text-slate-900">{health.responseTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Active Sessions</span>
          <span className="font-semibold text-slate-900">{health.activeSessions}</span>
        </div>
      </div>
    </div>
  );
}