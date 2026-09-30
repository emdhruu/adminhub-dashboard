import { DashboardPayload } from '@/types/dashboard';

export async function fetchDashboardData(): Promise<DashboardPayload> {
  let userCount = 12847;

  try {
    const res = await fetch('https://dummyjson.com/users?limit=1');
    if (res.ok) {
      const json = await res.json();
      if (json.total) {
        userCount = json.total;
      }
    }
  } catch (err) {
    console.log('Error fetching user count from dummyjson:', err);
  }

  return {
    metrics: [
      {
        id: 'users',
        title: 'Total Users',
        value: userCount.toLocaleString(),
        change: '+12.5%',
        isPositive: true,
        comparisonText: 'vs last month',
        iconType: 'users',
      },
      {
        id: 'revenue',
        title: 'Total Revenue',
        value: '$284,392',
        change: '+8.2%',
        isPositive: true,
        comparisonText: 'vs last month',
        iconType: 'revenue',
      },
      {
        id: 'bookings',
        title: 'Active Bookings',
        value: '1,234',
        change: '+3.1%',
        isPositive: true,
        comparisonText: 'vs last month',
        iconType: 'bookings',
      },
      {
        id: 'transactions',
        title: 'Pending Transactions',
        value: '89',
        change: '+24.0%',
        isPositive: true,
        comparisonText: 'vs last month',
        iconType: 'transactions',
      },
    ],
    chartData: [
      { month: 'Apr', revenue: 170000 },
      { month: 'May', revenue: 210000 },
      { month: 'Jun', revenue: 195000 },
      { month: 'Jul', revenue: 260000 },
      { month: 'Aug', revenue: 240000 },
      { month: 'Sep', revenue: 284392 },
    ],
    alerts: [
      {
        id: '1',
        title: 'Server capacity at 92%',
        desc: 'Scale resources',
        level: 'critical',
      },
      {
        id: '2',
        title: '15 transactions pending',
        desc: 'Pending review',
        level: 'warning',
      },
      {
        id: '3',
        title: 'System maintenance scheduled',
        desc: 'Scheduled for Oct 5',
        level: 'info',
      },
    ],
    health: {
      uptime: '99.8%',
      responseTime: '142ms',
      activeSessions: '3,241',
    },
    transactions: [
      {
        id: '#TXN-1082',
        userName: 'Albert Flores',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face',
        amount: '$150.00',
        status: 'Completed',
        date: 'Oct 1, 2024',
      },
      {
        id: '#TXN-1081',
        userName: 'Jenny Wilson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face',
        amount: '$2,350.00',
        status: 'Pending',
        date: 'Sep 30, 2024',
      },
      {
        id: '#TXN-1079',
        userName: 'Guy Hawkins',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
        amount: '$85.00',
        status: 'Failed',
        date: 'Sep 28, 2024',
      },
      {
        id: '#TXN-1078',
        userName: 'Esther Howard',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
        amount: '$1,200.00',
        status: 'Completed',
        date: 'Sep 27, 2024',
      },
    ],
  };
}