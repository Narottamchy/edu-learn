import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ProgressBadge, { MasteryLevel } from "../dashboard/ProgressBadge";
import { Zap, Award } from "lucide-react";

interface MasteryProgressProps {
  masteryPoints: number;
  masteryItems: {
    id: string;
    level: MasteryLevel;
    isQuiz?: boolean;
    isTest?: boolean;
  }[];
}

const MasteryProgress: React.FC<MasteryProgressProps> = ({
  masteryPoints,
  masteryItems,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Mastery Progress</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-xs font-medium">
                  {masteryPoints.toLocaleString()} points
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Total possible mastery points for this unit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <ProgressBadge level="mastered" size="sm" />
            <span className="text-xs">Mastered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ProgressBadge level="proficient" size="sm" />
            <span className="text-xs">Proficient</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ProgressBadge level="familiar" size="sm" />
            <span className="text-xs">Familiar</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ProgressBadge level="attempted" size="sm" />
            <span className="text-xs">Attempted</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ProgressBadge level="notStarted" size="sm" />
            <span className="text-xs">Not Started</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-1.5">
        {masteryItems.map((item) => (
          <TooltipProvider key={item.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative">
                  <ProgressBadge level={item.level} showTooltip={false} />
                  {item.isQuiz && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-3 h-3 flex items-center justify-center">
                      <Zap className="h-2 w-2 text-white" />
                    </div>
                  )}
                  {item.isTest && (
                    <div className="absolute -top-1 -right-1 bg-amber-500 rounded-full w-3 h-3 flex items-center justify-center">
                      <Award className="h-2 w-2 text-white" />
                    </div>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-xs">
                  <p>Skill {item.id}</p>
                  {item.isQuiz && <p>Quiz available</p>}
                  {item.isTest && <p>Unit test</p>}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default MasteryProgress;