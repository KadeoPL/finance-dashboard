import React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import TransactionsList from "@/features/transactions/components/TransactionsList";

export default function page() {
  return (
    <SidebarProvider>
      <Sidebar />
      <div className="w-full h-full">
        <div className="w-full h-10 bg-red-500">
          <div>
            <SidebarTrigger />
          </div>
          <div>
            <TransactionsList />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
