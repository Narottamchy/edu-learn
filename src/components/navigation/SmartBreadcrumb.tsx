import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface BreadcrumbItem {
  label: string;
  href?: string;
  progress?: number;
  isActive?: boolean;
}

interface SmartBreadcrumbProps {
  items: BreadcrumbItem[];
  showProgress?: boolean;
}

const SmartBreadcrumb: React.FC<SmartBreadcrumbProps> = ({ 
  items, 
  showProgress = false 
}) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
      <Link 
        to="/" 
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4" />
          
          <div className="flex items-center gap-2">
            {item.href && !item.isActive ? (
              <Link 
                to={item.href} 
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={item.isActive ? "text-foreground font-medium" : ""}>
                {item.label}
              </span>
            )}
            
            {showProgress && item.progress !== undefined && (
              <div className="flex items-center gap-2 ml-2">
                <Progress value={item.progress} className="w-16 h-1" />
                <span className="text-xs">{item.progress}%</span>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default SmartBreadcrumb;