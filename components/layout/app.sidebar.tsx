'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Users, ArrowLeftRight, CalendarCheck, ShieldCheck, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { closeMobileSidebar } from '@/store/slices/ui-slice';

export function AppSidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.mobileSidebarOpen);

  const links = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
    { label: 'Users', href: '/users', icon: Users },
    { label: 'Transactions', href: '/transactions', icon: ArrowLeftRight },
    { label: 'Bookings', href: '/bookings', icon: CalendarCheck },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={() => dispatch(closeMobileSidebar())}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-60 bg-[#1E293B] text-white flex flex-col justify-between transition-transform duration-200 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo */}
          <div className="h-16 px-6 flex items-center justify-between border-b border-slate-700/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#5B5BF7] flex items-center justify-center font-bold text-white shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-base tracking-wide">AdminHub</span>
            </div>
            <button
              onClick={() => dispatch(closeMobileSidebar())}
              className="md:hidden text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-4 space-y-1.5">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#5B5BF7] text-white'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-700/50">
          <div className="flex items-center gap-3 px-2 py-2">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face"
              alt="Sarah Jenkins"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border border-slate-600 object-cover"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-white truncate">Sarah Jenkins</span>
              <span className="text-[10px] text-slate-400 truncate">Super Admin</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}