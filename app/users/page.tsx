'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Trash2, Edit2, ChevronDown } from 'lucide-react';
import { UserRecord } from '@/types/pages';

const initialUsers: UserRecord[] = [
  {
    id: 'usr-1',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face',
    role: 'Admin',
    status: 'Active',
    joinDate: 'Jan 12, 2024',
    lastActive: '2 mins ago',
  },
  {
    id: 'usr-2',
    name: 'Wade Warren',
    email: 'wade.warren@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
    role: 'Editor',
    status: 'Active',
    joinDate: 'Feb 22, 2024',
    lastActive: '1 hour ago',
  },
  {
    id: 'usr-3',
    name: 'Cameron Williamson',
    email: 'cameron.w@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face',
    role: 'Viewer',
    status: 'Inactive',
    joinDate: 'Mar 10, 2024',
    lastActive: '3 days ago',
  },
  {
    id: 'usr-4',
    name: 'Arlene McCoy',
    email: 'arlene.m@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face',
    role: 'Editor',
    status: 'Active',
    joinDate: 'Apr 05, 2024',
    lastActive: 'Just now',
  },
  {
    id: 'usr-5',
    name: 'Eleanor Pena',
    email: 'eleanor.p@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
    role: 'Viewer',
    status: 'Suspended',
    joinDate: 'May 19, 2024',
    lastActive: '1 week ago',
  },
  {
    id: 'usr-6',
    name: 'Kristin Watson',
    email: 'kristin.w@example.com',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face',
    role: 'Admin',
    status: 'Active',
    joinDate: 'Jun 01, 2024',
    lastActive: '5 mins ago',
  },
];

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>(['usr-1', 'usr-2']);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredUsers = initialUsers.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Users Directory</h2>
          <p className="text-xs text-slate-400 mt-0.5">Manage all registered users in your application</p>
        </div>
        <button className="flex items-center gap-2 bg-[#5B5BF7] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#4a4ae6] self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <span className="text-xs text-slate-400 font-medium">Total Users</span>
          <p className="text-xl font-bold text-slate-900 mt-1">12,847</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <span className="text-xs text-slate-400 font-medium">Active Users</span>
          <p className="text-xl font-bold text-slate-900 mt-1">10,234</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <span className="text-xs text-slate-400 font-medium">New This Month</span>
          <p className="text-xl font-bold text-slate-900 mt-1">847</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users by name or email..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5B5BF7]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">
            Role: All <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">
            Status: Active <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">
            Sort by: Date Joined <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>

      {selectedIds.length > 0 && (
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5B5BF7]">
            <span className="w-4 h-4 rounded bg-[#5B5BF7] text-white flex items-center justify-center text-[10px]">✓</span>
            <span>{selectedIds.length} users selected</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 text-xs font-medium rounded-lg text-slate-700 hover:bg-slate-50">
              Change Role
            </button>
            <button className="px-3 py-1 bg-white border border-rose-200 text-xs font-medium rounded-lg text-rose-600 hover:bg-rose-50">
              Suspend Accounts
            </button>
          </div>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-500">
            <thead className="bg-slate-50 text-[11px] font-medium text-slate-400 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 w-10">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === filteredUsers.length}
                    onChange={() =>
                      setSelectedIds(
                        selectedIds.length === filteredUsers.length
                          ? []
                          : filteredUsers.map((u) => u.id)
                      )
                    }
                    className="rounded border-slate-300 text-[#5B5BF7] focus:ring-0"
                  />
                </th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Join Date</th>
                <th className="py-3 px-4">Last Active</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map((user) => {
                const isChecked = selectedIds.includes(user.id);
                return (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleSelect(user.id)}
                        className="rounded border-slate-300 text-[#5B5BF7] focus:ring-0"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <Link href={`/users/${user.id}`} className="flex items-center gap-3 group">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 group-hover:text-[#5B5BF7]">
                            {user.name}
                          </p>
                          <p className="text-[11px] text-slate-400">{user.email}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[11px] bg-indigo-50 text-[#5B5BF7] font-medium">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-medium border ${
                          user.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                            : user.status === 'Inactive'
                            ? 'bg-amber-50 text-amber-600 border-amber-200'
                            : 'bg-rose-50 text-rose-600 border-rose-200'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{user.joinDate}</td>
                    <td className="py-3 px-4 text-slate-400">{user.lastActive}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/users/${user.id}`} className="text-slate-400 hover:text-[#5B5BF7]">
                          <Edit2 className="w-3.5 h-3.5" />
                        </Link>
                        <button className="text-slate-400 hover:text-rose-500">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>Showing 1–{filteredUsers.length} of 12,847 results</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded text-slate-400 opacity-50 cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1 border border-slate-200 rounded text-slate-600 hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}