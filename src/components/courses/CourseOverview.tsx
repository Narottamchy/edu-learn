import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Play, Award, ArrowRight } from "lucide-react";
import MasteryProgress from "./MasteryProgress";

interface CourseOverviewProps {
  courseId: string;
  title: string;
  description: string;
  masteryPoints: number;
  unitsCount: number;
  skillsCount: number;
  units: {
    id: string;
    title: string;
    description?: string;
    masteryItems: {
      id: string;
      level: "mastered" | "proficient" | "familiar" | "attempted" | "notStarted";
      isQuiz?: boolean;
      isTest?: boolean;
    }[];
  }[];
}

const CourseOverview: React.FC<CourseOverviewProps> = ({
  courseId,
  title,
  description,
  masteryPoints,
  unitsCount,
  skillsCount,
  units,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/dashboard" className="hover:text-foreground">
            Dashboard
          </Link>
          <span>•</span>
          <span>{title}</span>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground mt-1 max-w-2xl">{description}</p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1.5">
                <div className="bg-primary/10 p-1 rounded-full">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{unitsCount} units</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="bg-primary/10 p-1 rounded-full">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{skillsCount} skills</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="bg-primary/10 p-1 rounded-full">
                  <Play className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{masteryPoints.toLocaleString()} mastery points</span>
              </div>
            </div>
          </div>
          <Button size="lg" className="gap-1">
            Continue Learning <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="units">
        <TabsList>
          <TabsTrigger value="units">Units</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>
        <TabsContent value="units" className="space-y-6 mt-6">
          {units.map((unit, index) => (
            <Card key={unit.id} className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <span>Unit {index + 1}</span>
                      <span className="text-muted-foreground">•</span>
                      <span>{unit.title}</span>
                    </CardTitle>
                    {unit.description && (
                      <CardDescription className="mt-1">{unit.description}</CardDescription>
                    )}
                  </div>
                  <Button asChild>
                    <Link to={`/courses/${courseId}/units/${unit.id}`}>
                      Start Unit
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <MasteryProgress
                  masteryPoints={Math.floor(masteryPoints / units.length)}
                  masteryItems={unit.masteryItems}
                />
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="skills">
          <div className="py-8 text-center text-muted-foreground">
            Skills view coming soon
          </div>
        </TabsContent>
        <TabsContent value="challenges">
          <div className="py-8 text-center text-muted-foreground">
            Challenges view coming soon
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseOverview;