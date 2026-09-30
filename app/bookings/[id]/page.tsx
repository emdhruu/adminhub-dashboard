'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, XCircle } from 'lucide-react';

export default function BookingDetailPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/bookings" className="hover:text-slate-700 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Bookings
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">#BKG-2341</span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900">Booking #BKG-2341</h2>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
              Confirmed
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-indigo-50 text-[#5B5BF7] border border-indigo-200">
              Completed
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Virtual Consultation Room • Scheduled for Oct 15, 2024 at 14:00
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">
            <Calendar className="w-3.5 h-3.5" />
            Reschedule
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-rose-200 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50">
            <XCircle className="w-3.5 h-3.5" />
            Cancel Booking
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Booking Meeting Logistics</h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-400">Service Type</span>
                <span className="font-medium text-slate-800">Business Consultation</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-400">Scheduled Date</span>
                <span className="font-medium text-slate-800">October 15, 2024</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-400">Meeting Time Slot</span>
                <span className="font-medium text-slate-800">2:00 PM – 3:30 PM (EST)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-400">Meeting Location</span>
                <span className="font-medium text-[#5B5BF7]">Virtual • Zoom Link Provided</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-400 block text-[11px] mb-1">Client Special Notes</span>
                <p className="text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs">
                  "Need assistance with expanding our payment gateway options and preparing our database backup plans."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Customer Overview</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face"
                  alt="Sarah Johnson"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-900">Sarah Johnson</p>
                  <p className="text-[11px] text-slate-400">sarah.johnson@example.com</p>
                </div>
              </div>
              <span className="text-xs text-slate-400">12 Total Bookings Completed</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Payment Ledger Breakdown</h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Billing Amount</span>
                <span className="font-bold text-slate-900 text-sm">$150.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Payment Status</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                  Paid
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Invoice Link</span>
                <Link href="/transactions/1082" className="text-[#5B5BF7] font-medium hover:underline">
                  #INV-10294
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Booking Lifecycle Logs</h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full mt-1 bg-emerald-500 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Confirmation Sent</p>
                  <p className="text-[11px] text-slate-400">Outlook invite dispatched</p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Oct 12, 2024 16:00</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full mt-1 bg-indigo-500 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Status Set to Confirmed</p>
                  <p className="text-[11px] text-slate-400">Consultant assigned automatically</p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Oct 12, 2024 15:58</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full mt-1 bg-slate-300 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Booking Created</p>
                  <p className="text-[11px] text-slate-400">Client self-service reservation</p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Oct 12, 2024 15:55</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}