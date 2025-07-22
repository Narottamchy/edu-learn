import React from "react";
import Navbar from "../navigation/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
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
};

export default Layout;