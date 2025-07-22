import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface SidebarProps {
  courseId?: string;
  units?: {
    id: string;
    title: string;
    isActive?: boolean;
    icon?: React.ReactNode;
  }[];
}

const CourseSidebar: React.FC<SidebarProps> = ({ courseId, units = [] }) => {
  const location = useLocation();

  return (
    <Sidebar variant="floating" className="border-r">
      <SidebarHeader className="p-4">
        <Link to={`/courses/${courseId}`} className="text-lg font-semibold truncate block">
          Course Navigation
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {units.map((unit) => (
            <SidebarMenuItem key={unit.id}>
              <SidebarMenuButton
                asChild
                isActive={unit.isActive || location.pathname.includes(`/courses/${courseId}/units/${unit.id}`)}
              >
                <Link to={`/courses/${courseId}/units/${unit.id}`} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    {unit.icon || unit.id}
                  </div>
                  <span className="truncate">{unit.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default CourseSidebar;