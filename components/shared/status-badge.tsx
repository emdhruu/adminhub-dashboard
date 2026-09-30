import { Badge } from '@/components/ui/badge';

interface Props {
  status: 'Completed' | 'Pending' | 'Failed' | 'Confirmed' | 'Active' | 'Inactive' | 'Suspended';
}

export function StatusBadge({ status }: Props) {
  const getBadgeStyle = () => {
    switch (status) {
      case 'Completed':
      case 'Confirmed':
      case 'Active':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-50';
      case 'Pending':
      case 'Inactive':
        return 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-50';
      case 'Failed':
      case 'Suspended':
        return 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-50';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-50';
    }
  };

  return (
    <Badge variant="outline" className={`font-medium text-[11px] px-2 py-0.5 rounded-full ${getBadgeStyle()}`}>
      {status}
    </Badge>
  );
}