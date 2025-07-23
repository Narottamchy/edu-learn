import React from "react";
import { Link } from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProgressBadge, { MasteryLevel } from "@/components/gamification/ProgressBadge";

interface CourseCardProps {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  progress?: number;
  masteryLevel?: MasteryLevel;
  unitsCount?: number;
  skillsCount?: number;
  isStarted?: boolean;
}

export default function CourseCard({
  id,
  title,
  description,
  icon: Icon,
  progress = 0,
  masteryLevel = "notStarted",
  unitsCount,
  skillsCount,
  isStarted = false,
}: CourseCardProps) {
  return (
    <div className="course-card flex flex-col h-full">
      <div className="p-4 flex items-start gap-3">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          )}
          {(unitsCount || skillsCount) && (
            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
              {unitsCount && <span>{unitsCount} units</span>}
              {unitsCount && skillsCount && <span>•</span>}
              {skillsCount && <span>{skillsCount} skills</span>}
            </div>
          )}
        </div>
        {masteryLevel !== "notStarted" && (
          <ProgressBadge level={masteryLevel} />
        )}
      </div>

      {progress > 0 && (
        <div className="px-4 pb-2">
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-end mt-1">
            <span className="text-xs text-muted-foreground">{progress}% complete</span>
          </div>
        </div>
      )}

      <div className="mt-auto p-4 pt-2">
        <Button asChild className="w-full gap-1">
          <Link href={`/courses/${id}`}>
            {isStarted ? "Continue" : "Start"} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}