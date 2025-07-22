import React, { useState } from "react";
import { Plus, Search, Mic, BookOpen, Users, Target, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface FloatingActionButtonProps {
  onQuickSearch?: () => void;
  onVoiceSearch?: () => void;
  onQuickStart?: () => void;
  onStudyGroup?: () => void;
  onGoals?: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onQuickSearch,
  onVoiceSearch,
  onQuickStart,
  onStudyGroup,
  onGoals,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Search,
      label: "Quick Search",
      onClick: onQuickSearch,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Mic,
      label: "Voice Search",
      onClick: onVoiceSearch,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: BookOpen,
      label: "Quick Start",
      onClick: onQuickStart,
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      icon: Users,
      label: "Study Group",
      onClick: onStudyGroup,
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      icon: Target,
      label: "Set Goals",
      onClick: onGoals,
      color: "bg-pink-500 hover:bg-pink-600",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col-reverse items-end gap-3">
        {isOpen && (
          <>
            {actions.map((action, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className={cn(
                        "w-12 h-12 rounded-full shadow-lg animate-scale-in text-white",
                        action.color
                      )}
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => {
                        action.onClick?.();
                        setIsOpen(false);
                      }}
                    >
                      <action.icon className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>{action.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </>
        )}
        
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Plus className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;