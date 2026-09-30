'use client';

import { Search, Bell, Menu } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleMobileSidebar } from '@/store/slices/ui-slice';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function AppHeader() {
  const dispatch = useDispatch();

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(toggleMobileSidebar())}
          className="md:hidden text-slate-500 hover:text-slate-800"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-base font-bold text-slate-900">Welcome back, Sarah</h1>
          <p className="text-[11px] text-slate-400">Tuesday, October 1, 2024</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Search console..."
            className="pl-9 h-8 text-xs bg-slate-50 border-slate-200 focus-visible:ring-[#5B5BF7] w-48 lg:w-64"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-slate-600 h-8 w-8">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
        </Button>

        <Avatar className="w-8 h-8 border border-slate-200">
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face" />
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}