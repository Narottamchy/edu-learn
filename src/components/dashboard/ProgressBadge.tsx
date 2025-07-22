import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export type MasteryLevel = "mastered" | "proficient" | "familiar" | "attempted" | "notStarted";

interface ProgressBadgeProps {
  level: MasteryLevel;
  showTooltip?: boolean;
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

const masteryLabels: Record<MasteryLevel, string> = {
  mastered: "Mastered",
  proficient: "Proficient",
  familiar: "Familiar",
  attempted: "Attempted",
  notStarted: "Not Started",
};

const ProgressBadge: React.FC<ProgressBadgeProps> = ({
  level,
  showTooltip = true,
  size = "md",
  animate = false,
}) => {
  const badge = (
    <div
      className={cn(
        "mastery-badge",
        `mastery-badge-${level}`,
        size === "sm" && "w-4 h-4",
        size === "lg" && "w-8 h-8",
        animate && level === "mastered" && "animate-pulse-badge"
      )}
    />
  );

  if (!showTooltip) return badge;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{badge}</TooltipTrigger>
        <TooltipContent>
          <p>{masteryLabels[level]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProgressBadge;