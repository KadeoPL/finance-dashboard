import React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import TransactionsList from "@/features/transactions/components/TransactionsList";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <SidebarProvider>
      <Sidebar />
      <div className="w-full h-screen">
        <div className="w-full h-screen flex flex-col">
          <div className="w-full h-16 flex items-center justify-between pr-12 pl-4">
            <SidebarTrigger />
            <Input placeholder="Type text" className="max-w-2/3 border-b-2" />
          </div>

          <div className="flex-1 overflow-auto bg-secondary p-12">
            <TransactionsList />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
