export interface MetricCard {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  comparisonText: string;
  iconType: 'users' | 'revenue' | 'bookings' | 'transactions';
}

export interface ChartItem {
  month: string;
  revenue: number;
}

export interface Alert {
  id: string;
  title: string;
  desc: string;
  level: 'critical' | 'warning' | 'info';
}

export interface Transaction {
  id: string;
  userName: string;
  avatar: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
}

export interface DashboardPayload {
  metrics: MetricCard[];
  chartData: ChartItem[];
  alerts: Alert[];
  health: {
    uptime: string;
    responseTime: string;
    activeSessions: string;
  };
  transactions: Transaction[];
}