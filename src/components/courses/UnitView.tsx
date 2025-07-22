import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, CheckCircle, BookOpen, Zap, Award } from "lucide-react";
import MasteryProgress from "./MasteryProgress";

interface UnitViewProps {
  courseId: string;
  courseTitle: string;
  unitId: string;
  unitTitle: string;
  unitDescription: string;
  masteryPoints: number;
  masteryItems: {
    id: string;
    level: "mastered" | "proficient" | "familiar" | "attempted" | "notStarted";
    isQuiz?: boolean;
    isTest?: boolean;
  }[];
  lessons: {
    id: string;
    title: string;
    type: "video" | "article" | "practice" | "quiz";
    completed?: boolean;
    duration?: string;
  }[];
}

const UnitView: React.FC<UnitViewProps> = ({
  courseId,
  courseTitle,
  unitId,
  unitTitle,
  unitDescription,
  masteryPoints,
  masteryItems,
  lessons,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/dashboard" className="hover:text-foreground">
            Dashboard
          </Link>
          <span>•</span>
          <Link to={`/courses/${courseId}`} className="hover:text-foreground">
            {courseTitle}
          </Link>
          <span>•</span>
          <span>{unitTitle}</span>
        </div>
        <h1 className="text-3xl font-bold">Unit: {unitTitle}</h1>
        <p className="text-muted-foreground mt-1 max-w-2xl">{unitDescription}</p>
      </div>

      <Card>
        <CardHeader className="bg-muted/50">
          <CardTitle>Mastery Progress</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <MasteryProgress masteryPoints={masteryPoints} masteryItems={masteryItems} />
        </CardContent>
      </Card>

      <Tabs defaultValue="learn">
        <TabsList>
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
          <TabsTrigger value="test">Unit Test</TabsTrigger>
        </TabsList>
        <TabsContent value="learn" className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Lessons</h2>
          <div className="grid gap-3">
            {lessons
              .filter((lesson) => lesson.type === "video" || lesson.type === "article")
              .map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      {lesson.type === "video" ? (
                        <Play className="h-5 w-5" />
                      ) : (
                        <BookOpen className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{lesson.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <span className="capitalize">{lesson.type}</span>
                        {lesson.duration && (
                          <>
                            <span>•</span>
                            <span>{lesson.duration}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {lesson.completed ? (
                      <div className="flex items-center gap-1.5 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Completed</span>
                      </div>
                    ) : (
                      <Button size="sm">Start</Button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="practice" className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Practice Exercises</h2>
          <div className="grid gap-3">
            {lessons
              .filter((lesson) => lesson.type === "practice")
              .map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center text-blue-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{lesson.title}</h3>
                      <div className="text-xs text-muted-foreground mt-1">
                        Practice exercise
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {lesson.completed ? (
                      <div className="flex items-center gap-1.5 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Completed</span>
                      </div>
                    ) : (
                      <Button size="sm">Start</Button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="quiz" className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Quizzes</h2>
          <div className="grid gap-3">
            {lessons
              .filter((lesson) => lesson.type === "quiz")
              .map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center text-purple-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{lesson.title}</h3>
                      <div className="text-xs text-muted-foreground mt-1">
                        Quiz to test your knowledge
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {lesson.completed ? (
                      <div className="flex items-center gap-1.5 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Completed</span>
                      </div>
                    ) : (
                      <Button size="sm">Start Quiz</Button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="test" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <Award className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Unit Test</h3>
                  <p className="text-muted-foreground">
                    Test your knowledge of all concepts in this unit
                  </p>
                  <Button className="mt-3">Start Unit Test</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UnitView;