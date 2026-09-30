'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Download, ChevronDown, Eye } from 'lucide-react';
import { TransactionRecord } from '@/types/pages';

const transactionsList: TransactionRecord[] = [
  {
    id: '#TXN-1082',
    name: 'Albert Flores',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face',
    type: 'Payment',
    amount: '$150.00',
    status: 'Completed',
    dateTime: 'Oct 1, 2024 14:32',
  },
  {
    id: '#TXN-1081',
    name: 'Jenny Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face',
    type: 'Payment',
    amount: '$2,350.00',
    status: 'Pending',
    dateTime: 'Sep 30, 2024 09:12',
  },
  {
    id: '#TXN-1080',
    name: 'Kathryn Murphy',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face',
    type: 'Refund',
    amount: '-$420.00',
    status: 'Refunded',
    dateTime: 'Sep 29, 2024 18:45',
  },
  {
    id: '#TXN-1079',
    name: 'Guy Hawkins',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
    type: 'Payment',
    amount: '$85.00',
    status: 'Failed',
    dateTime: 'Sep 28, 2024 11:20',
  },
  {
    id: '#TXN-1078',
    name: 'Esther Howard',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
    type: 'Transfer',
    amount: '$1,200.00',
    status: 'Completed',
    dateTime: 'Sep 27, 2024 08:30',
  },
  {
    id: '#TXN-1077',
    name: 'Cody Fisher',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face',
    type: 'Payment',
    amount: '$340.00',
    status: 'Pending',
    dateTime: 'Sep 26, 2024 13:10',
  },
];

export default function TransactionsPage() {
  const [search, setSearch] = useState('');

  const getStatusBadge = (status: TransactionRecord['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'Failed':
        return 'bg-rose-50 text-rose-600 border-rose-200';
      case 'Refunded':
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Transaction History</h2>
          <p className="text-xs text-slate-400 mt-0.5">Monitor and manage all corporate financial transactions</p>
        </div>
        <button className="flex items-center gap-2 px-3.5 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 self-start sm:self-auto">
          <Download className="w-3.5 h-3.5" />
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <span className="text-xs text-slate-400 font-medium">Total Transactions</span>
          <p className="text-xl font-bold text-slate-900 mt-1">24,891</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <span className="text-xs text-slate-400 font-medium">Total Volume</span>
          <p className="text-xl font-bold text-slate-900 mt-1">$1,204,821</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <span className="text-xs text-slate-400 font-medium">Avg. Transaction</span>
          <p className="text-xl font-bold text-slate-900 mt-1">$48.20</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <span className="text-xs text-slate-400 font-medium">Success Rate</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xl font-bold text-emerald-600">96.8%</span>
            <span className="text-xs text-emerald-600 font-medium">↑</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ID or User..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5B5BF7]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">
            Date: Last 30 Days <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">
            Type: All Types <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">
            Amount: All <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-500">
            <thead className="bg-slate-50 text-[11px] font-medium text-slate-400 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3 px-5">Transaction ID</th>
                <th className="py-3 px-5">User</th>
                <th className="py-3 px-5">Type</th>
                <th className="py-3 px-5">Amount</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5">Date & Time</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactionsList.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-5 font-medium text-slate-900">{tx.id}</td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2.5">
                      <img src={tx.avatar} alt={tx.name} className="w-6 h-6 rounded-full object-cover" />
                      <span className="font-medium text-slate-900">{tx.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="text-[11px] px-2 py-0.5 bg-slate-100 rounded text-slate-600">
                      {tx.type}
                    </span>
                  </td>
                  <td className={`py-3.5 px-5 font-semibold ${tx.amount.startsWith('-') ? 'text-rose-600' : 'text-slate-900'}`}>
                    {tx.amount}
                  </td>
                  <td className="py-3.5 px-5">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(tx.status)}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-slate-400">{tx.dateTime}</td>
                  <td className="py-3.5 px-5 text-right">
                    <Link href={`/transactions/${tx.id.replace('#', '')}`} className="text-slate-400 hover:text-[#5B5BF7] inline-block p-1">
                      <Eye className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>Showing 1–{transactionsList.length} of 24,891 results</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded text-slate-400 opacity-50 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-slate-600 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}