'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Calendar, ChevronDown, Eye, Edit2 } from 'lucide-react';
import { BookingRecord } from '@/types/pages';

const bookingsData: BookingRecord[] = [
  {
    id: '#BKG-2341',
    customerName: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face',
    service: 'Business Consultation',
    dateTime: 'Oct 15, 2024 14:00',
    duration: '1.5 hrs',
    status: 'Confirmed',
    amount: '$150.00',
  },
  {
    id: '#BKG-2340',
    customerName: 'Michael Brown',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
    service: 'Technical Support',
    dateTime: 'Oct 14, 2024 10:00',
    duration: '1.0 hr',
    status: 'Confirmed',
    amount: '$120.00',
  },
  {
    id: '#BKG-2339',
    customerName: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face',
    service: 'Executive Coaching',
    dateTime: 'Oct 13, 2024 16:30',
    duration: '2.0 hrs',
    status: 'Pending',
    amount: '$250.00',
  },
  {
    id: '#BKG-2338',
    customerName: 'David Wilson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face',
    service: 'Strategy Session',
    dateTime: 'Oct 12, 2024 11:30',
    duration: '1.5 hrs',
    status: 'Cancelled',
    amount: '$180.00',
  },
];

export default function BookingsPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Bookings Directory</h2>
          <p className="text-xs text-slate-400 mt-0.5">Manage all service bookings and consultation meetings</p>
        </div>
        <button className="flex items-center gap-2 bg-[#5B5BF7] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#4a4ae6] self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          New Booking
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
            <span>Total Bookings</span>
            <Calendar className="w-3.5 h-3.5 text-[#5B5BF7]" />
          </div>
          <p className="text-xl font-bold text-slate-900 mt-2">3,456</p>
          <span className="text-[11px] text-emerald-600 font-semibold mt-1 inline-block">+8.4% vs last month</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
            <span>Active Bookings</span>
            <Calendar className="w-3.5 h-3.5 text-[#5B5BF7]" />
          </div>
          <p className="text-xl font-bold text-slate-900 mt-2">1,234</p>
          <span className="text-[11px] text-rose-500 font-semibold mt-1 inline-block">-3.1% vs last month</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
            <span>Completed Bookings</span>
            <Calendar className="w-3.5 h-3.5 text-[#5B5BF7]" />
          </div>
          <p className="text-xl font-bold text-slate-900 mt-2">2,089</p>
          <span className="text-[11px] text-emerald-600 font-semibold mt-1 inline-block">+12.1% vs last month</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
            <span>Cancelled Bookings</span>
            <Calendar className="w-3.5 h-3.5 text-[#5B5BF7]" />
          </div>
          <p className="text-xl font-bold text-slate-900 mt-2">133</p>
          <span className="text-[11px] text-emerald-600 font-semibold mt-1 inline-block">-1.4% vs last month</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search bookings by ID or user..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5B5BF7]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">
            Date Range: Last 30 Days <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">
            Status: All <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">
            Service Type: All <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-500">
            <thead className="bg-slate-50 text-[11px] font-medium text-slate-400 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3 px-5">Booking ID</th>
                <th className="py-3 px-5">Customer</th>
                <th className="py-3 px-5">Service</th>
                <th className="py-3 px-5">Date & Time</th>
                <th className="py-3 px-5">Duration</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5">Amount</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bookingsData.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-5 font-medium text-slate-900">{b.id}</td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2.5">
                      <img src={b.avatar} alt={b.customerName} className="w-6 h-6 rounded-full object-cover" />
                      <span className="font-medium text-slate-900">{b.customerName}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-slate-700">{b.service}</td>
                  <td className="py-3.5 px-5 text-slate-500">{b.dateTime}</td>
                  <td className="py-3.5 px-5 text-slate-500">{b.duration}</td>
                  <td className="py-3.5 px-5">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                        b.status === 'Confirmed'
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                          : b.status === 'Pending'
                          ? 'bg-amber-50 text-amber-600 border-amber-200'
                          : 'bg-rose-50 text-rose-600 border-rose-200'
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 font-semibold text-slate-900">{b.amount}</td>
                  <td className="py-3.5 px-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/bookings/${b.id.replace('#', '')}`} className="text-slate-400 hover:text-[#5B5BF7]">
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <button className="text-slate-400 hover:text-slate-700">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}