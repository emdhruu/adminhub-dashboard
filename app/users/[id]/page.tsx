'use client';

import Link from 'next/link';
import { ArrowLeft, Edit2, AlertCircle } from 'lucide-react';

export default function UserDetailPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/users" className="hover:text-slate-700 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Users
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Sarah Jenkins</span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face"
            alt="Sarah Jenkins"
            className="w-14 h-14 rounded-full object-cover border border-slate-200"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900">Sarah Jenkins</h2>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                Active
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-indigo-50 text-[#5B5BF7] border border-indigo-200">
                Confirmed
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">sarah.jenkins@example.com • Joined Jan 12, 2024</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">
            <Edit2 className="w-3.5 h-3.5" />
            Edit Profile
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-rose-200 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50">
            <AlertCircle className="w-3.5 h-3.5" />
            Suspend User
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Full Name</span>
                <span className="font-medium text-slate-800 mt-0.5 block">Sarah Johnson</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Email Address</span>
                <span className="font-medium text-slate-800 mt-0.5 block">sarah.johnson@example.com</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Phone Number</span>
                <span className="font-medium text-slate-800 mt-0.5 block">+1 555-0123</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Date of Birth</span>
                <span className="font-medium text-slate-800 mt-0.5 block">March 14, 1992</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400 block text-[11px]">Mailing Address</span>
                <span className="font-medium text-slate-800 mt-0.5 block">123 Business Rd, Suite 100, New York, NY</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Account Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">User ID</span>
                <span className="font-medium text-slate-800 mt-0.5 block">#USR-4821</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Joined Date</span>
                <span className="font-medium text-slate-800 mt-0.5 block">January 12, 2024</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Last Login Activity</span>
                <span className="font-medium text-slate-800 mt-0.5 block">Today, 14:24</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Two-Factor Security</span>
                <span className="px-2 py-0.5 inline-block rounded text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200 mt-0.5">
                  Enabled
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Recent Activity Log</h3>
          <div className="space-y-4 text-xs">
            {[
              {
                title: 'Created booking #BKG-2341',
                desc: 'Strategy Consultation session',
                time: '2 hours ago',
              },
              {
                title: 'Changed user password',
                desc: 'Initiated self-service reset',
                time: 'Yesterday, 10:21',
              },
              {
                title: 'Logged in from new device',
                desc: 'MacOS Chrome, Brooklyn, NY',
                time: 'Sep 28, 2024',
              },
              {
                title: 'Completed transaction #TXN-7823',
                desc: 'Direct invoice payment received',
                time: 'Sep 27, 2024',
              },
              {
                title: 'Updated profile photo',
                desc: 'Refreshed corporate portrait',
                time: 'Sep 15, 2024',
              },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B5BF7] mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">{activity.title}</p>
                  <p className="text-[11px] text-slate-500">{activity.desc}</p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Sarah's Recent Transactions</h3>
          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-2.5 flex justify-between items-center">
              <div>
                <span className="font-medium text-slate-800">#TXN-7823</span>
                <span className="text-slate-400 block text-[11px]">Sep 27, 2024</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-slate-900">$245.00</span>
                <span className="text-emerald-600 block text-[11px]">Paid</span>
              </div>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <div>
                <span className="font-medium text-slate-800">#TXN-7102</span>
                <span className="text-slate-400 block text-[11px]">Aug 15, 2024</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-slate-900">$120.00</span>
                <span className="text-emerald-600 block text-[11px]">Paid</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Sarah's Recent Bookings</h3>
          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-2.5 flex justify-between items-center">
              <div>
                <span className="font-medium text-slate-800">#BKG-2341</span>
                <span className="text-slate-400 block text-[11px]">Consultation • Oct 15, 14:00</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                Confirmed
              </span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <div>
                <span className="font-medium text-slate-800">#BKG-1980</span>
                <span className="text-slate-400 block text-[11px]">Executive Coaching • Sep 01, 10:30</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}