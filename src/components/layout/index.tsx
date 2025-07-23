import React from "react";
import Navbar from "@/components/navigation/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export default function Layout({ children, showSidebar = true }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        <div className="flex-1 flex">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}