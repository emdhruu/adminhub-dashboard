export interface UserRecord {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive' | 'Suspended';
  joinDate: string;
  lastActive: string;
}

export interface TransactionRecord {
  id: string;
  name: string;
  avatar: string;
  type: 'Payment' | 'Refund' | 'Transfer';
  amount: string;
  status: 'Completed' | 'Pending' | 'Failed' | 'Refunded';
  dateTime: string;
}

export interface BookingRecord {
  id: string;
  customerName: string;
  avatar: string;
  service: string;
  dateTime: string;
  duration: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  amount: string;
}