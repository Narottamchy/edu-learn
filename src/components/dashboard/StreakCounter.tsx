import React from "react";
import { Flame } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface StreakCounterProps {
  streak: number;
  level: number;
  progress: number;
  maxProgress: number;
}

export default function StreakCounter({
  streak,
  level,
  progress,
  maxProgress,
}: StreakCounterProps) {
  const progressPercentage = (progress / maxProgress) * 100;

  return (
    <div className="flex items-center gap-6 p-4 bg-background rounded-lg border">
      <div className="flex items-center gap-2">
        <div className="bg-amber-100 p-2 rounded-full">
          <Flame className="h-5 w-5 text-amber-500" />
        </div>
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{streak}</span>
            <span className="text-sm text-muted-foreground">day streak</span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {level}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your current level</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="text-sm font-medium">Level {level}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {progress}/{maxProgress} points
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
    </div>
  );
}