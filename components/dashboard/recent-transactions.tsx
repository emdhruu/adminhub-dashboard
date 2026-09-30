import React from 'react';
import { Filter, Eye } from 'lucide-react';
import { Transaction } from '@/types/dashboard';
import { StatusBadge } from '@/components/shared/status-badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function RecentTransactions({ transactions }: { transactions: Transaction[] }) {
  return (
    <Card className="rounded-xl border-slate-200 shadow-xs overflow-hidden">
      <CardHeader className="p-5 flex flex-row items-center justify-between border-b border-slate-100">
        <CardTitle className="text-base font-semibold text-slate-900">
          Recent Transactions
        </CardTitle>
        <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs text-slate-600">
          <Filter className="w-3.5 h-3.5" />
          Filter
        </Button>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table className="text-xs">
            <TableHeader className="bg-slate-50">
              <TableRow className="border-b border-slate-200">
                <TableHead className="py-3 px-5 text-[11px] uppercase text-slate-400 font-medium">
                  Transaction ID
                </TableHead>
                <TableHead className="py-3 px-5 text-[11px] uppercase text-slate-400 font-medium">
                  User
                </TableHead>
                <TableHead className="py-3 px-5 text-[11px] uppercase text-slate-400 font-medium">
                  Amount
                </TableHead>
                <TableHead className="py-3 px-5 text-[11px] uppercase text-slate-400 font-medium">
                  Status
                </TableHead>
                <TableHead className="py-3 px-5 text-[11px] uppercase text-slate-400 font-medium">
                  Date
                </TableHead>
                <TableHead className="py-3 px-5 text-[11px] uppercase text-slate-400 font-medium text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-100">
              {transactions.map((tx) => (
                <TableRow key={tx.id} className="hover:bg-slate-50">
                  <TableCell className="py-3.5 px-5 font-medium text-slate-900">
                    {tx.id}
                  </TableCell>
                  <TableCell className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={tx.avatar} alt={tx.userName} />
                        <AvatarFallback>{tx.userName.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-slate-900">{tx.userName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-3.5 px-5 font-semibold text-slate-900">
                    {tx.amount}
                  </TableCell>
                  <TableCell className="py-3.5 px-5">
                    <StatusBadge status={tx.status} />
                  </TableCell>
                  <TableCell className="py-3.5 px-5 text-slate-500">
                    {tx.date}
                  </TableCell>
                  <TableCell className="py-3.5 px-5 text-right">
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400 hover:text-[#5B5BF7]">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>Showing 1–{transactions.length} of 89 results</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled className="h-7 text-xs opacity-50">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs text-slate-600">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}