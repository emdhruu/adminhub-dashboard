'use client';

import Link from 'next/link';
import { ArrowLeft, Printer, RefreshCw } from 'lucide-react';

export default function TransactionDetailPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/transactions" className="hover:text-slate-700 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Transactions
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">#TXN-1082</span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900">Transaction #TXN-1082</h2>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
              Paid
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Reference #REF-98342718 • Generated on Sep 27, 2024 11:32 AM
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">
            <Printer className="w-3.5 h-3.5" />
            Print Receipt
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#5B5BF7] text-white rounded-lg text-xs font-semibold hover:bg-[#4949E5]">
            <RefreshCw className="w-3.5 h-3.5" />
            Refund Transaction
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Transaction Invoice Details</h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-400">Transaction Type</span>
                <span className="font-medium text-slate-800">Service Payment</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-400">Payment Method</span>
                <span className="font-medium text-slate-800">Credit Card (Visa ending in 4582)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-400">Processing Gateway Fee</span>
                <span className="font-medium text-slate-800">$4.90</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-400">Subtotal</span>
                <span className="font-medium text-slate-800">$145.10</span>
              </div>
              <div className="flex justify-between py-2 text-sm font-bold text-slate-900">
                <span>Grand Total</span>
                <span className="text-[#5B5BF7] text-base">$150.00</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Customer Profile Summary</h3>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                alt="Albert Flores"
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <p className="text-xs font-semibold text-slate-900">Albert Flores</p>
                <p className="text-[11px] text-slate-400">sarah.johnson@example.com • ID: #USR-4821</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Processing History</h3>
          <div className="space-y-5 text-xs">
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full mt-1 bg-emerald-500 shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Completed & Disbursed</p>
                <p className="text-[11px] text-slate-400">Settled to merchant bank account</p>
                <span className="text-[10px] text-slate-400 block mt-0.5">Sep 27, 2024 11:32</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full mt-1 bg-indigo-500 shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Processing & Authorized</p>
                <p className="text-[11px] text-slate-400">Visa Gateway auth approved</p>
                <span className="text-[10px] text-slate-400 block mt-0.5">Sep 27, 2024 11:30</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full mt-1 bg-slate-300 shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Initiated</p>
                <p className="text-[11px] text-slate-400">Checkout session initialized</p>
                <span className="text-[10px] text-slate-400 block mt-0.5">Sep 27, 2024 11:28</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-900">Related Customer Ledger Entries</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-500">
            <thead className="bg-slate-50 text-[11px] font-medium text-slate-400 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3 px-5">Transaction ID</th>
                <th className="py-3 px-5">Gateway Method</th>
                <th className="py-3 px-5">Amount</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5">Settled At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-5 font-medium text-slate-900">#TXN-7102</td>
                <td className="py-3.5 px-5 text-slate-600">Visa Card (*4582)</td>
                <td className="py-3.5 px-5 font-semibold text-slate-900">$120.00</td>
                <td className="py-3.5 px-5">
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                    Completed
                  </span>
                </td>
                <td className="py-3.5 px-5 text-slate-400">Aug 15, 2024 10:14</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-5 font-medium text-slate-900">#TXN-5921</td>
                <td className="py-3.5 px-5 text-slate-600">Direct PayPal Link</td>
                <td className="py-3.5 px-5 font-semibold text-slate-900">$350.00</td>
                <td className="py-3.5 px-5">
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                    Completed
                  </span>
                </td>
                <td className="py-3.5 px-5 text-slate-400">Jul 02, 2024 19:50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}