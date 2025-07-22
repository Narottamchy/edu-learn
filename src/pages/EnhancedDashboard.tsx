import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import StreakCounter from "@/components/dashboard/StreakCounter";
import CourseCard from "@/components/dashboard/CourseCard";
import FloatingActionButton from "@/components/navigation/FloatingActionButton";
import SmartBreadcrumb from "@/components/navigation/SmartBreadcrumb";
import AchievementSystem from "@/components/gamification/AchievementSystem";
import StudyStreak from "@/components/gamification/StudyStreak";
import AIStudyAssistant from "@/components/learning/AIStudyAssistant";
import InteractiveWhiteboard from "@/components/learning/InteractiveWhiteboard";
import LearningAnalytics from "@/components/analytics/LearningAnalytics";
import StudyGroups from "@/components/social/StudyGroups";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Atom, Zap, Cpu, Database, Trophy, BarChart3, Users, Bot, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const EnhancedDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data
  const breadcrumbItems = [
    { label: "Dashboard", isActive: true }
  ];

  const mathCourses = [
    {
      id: "basic-geometry",
      title: "Basic geometry and measurement",
      icon: <Calculator className="h-6 w-6" />,
      progress: 45,
      masteryLevel: "familiar" as const,
      unitsCount: 14,
      skillsCount: 127,
      isStarted: true,
    },
    {
      id: "algebra-basics",
      title: "Algebra basics",
      icon: <Calculator className="h-6 w-6" />,
      progress: 20,
      masteryLevel: "attempted" as const,
      unitsCount: 10,
      skillsCount: 98,
      isStarted: true,
    },
  ];

  const achievements = [
    {
      id: "1",
      title: "First Steps",
      description: "Complete your first lesson",
      icon: <Trophy className="h-5 w-5 text-yellow-500" />,
      progress: 1,
      maxProgress: 1,
      isUnlocked: true,
      rarity: "common" as const,
      points: 100,
    },
    {
      id: "2",
      title: "Week Warrior",
      description: "Study for 7 days in a row",
      icon: <Zap className="h-5 w-5 text-blue-500" />,
      progress: 3,
      maxProgress: 7,
      isUnlocked: false,
      rarity: "rare" as const,
      points: 500,
    },
    {
      id: "3",
      title: "Math Master",
      description: "Complete 10 math units",
      icon: <Calculator className="h-5 w-5 text-purple-500" />,
      progress: 2,
      maxProgress: 10,
      isUnlocked: false,
      rarity: "epic" as const,
      points: 1000,
    },
  ];

  const analyticsData = {
    studyTime: {
      today: 2.5,
      week: 12,
      month: 45,
      goal: 20,
    },
    performance: {
      accuracy: 85,
      improvement: 12,
      weakAreas: ["Algebra", "Geometry"],
      strongAreas: ["Arithmetic", "Statistics"],
    },
    progressData: [
      { date: "Mon", studyTime: 2, accuracy: 80 },
      { date: "Tue", studyTime: 3, accuracy: 85 },
      { date: "Wed", studyTime: 1.5, accuracy: 82 },
      { date: "Thu", studyTime: 2.5, accuracy: 88 },
      { date: "Fri", studyTime: 2, accuracy: 90 },
      { date: "Sat", studyTime: 1, accuracy: 85 },
      { date: "Sun", studyTime: 0, accuracy: 0 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 85, improvement: 5 },
      { subject: "Science", score: 78, improvement: -2 },
      { subject: "Engineering", score: 92, improvement: 8 },
    ],
  };

  const studyGroupsData = {
    userGroups: [
      {
        id: "1",
        name: "Math Wizards",
        description: "Advanced mathematics study group",
        subject: "Mathematics",
        memberCount: 12,
        maxMembers: 15,
        isPrivate: false,
        nextSession: new Date(Date.now() + 86400000),
        members: [
          { id: "1", name: "John Doe", role: "admin" as const, points: 1250 },
          { id: "2", name: "Jane Smith", role: "member" as const, points: 980 },
        ],
        recentActivity: [],
      },
    ],
    availableGroups: [
      {
        id: "2",
        name: "Physics Enthusiasts",
        description: "Exploring the wonders of physics together",
        subject: "Physics",
        memberCount: 8,
        maxMembers: 12,
        isPrivate: false,
        members: [
          { id: "3", name: "Alice Johnson", role: "admin" as const, points: 1500 },
          { id: "4", name: "Bob Wilson", role: "member" as const, points: 1200 },
        ],
        recentActivity: [],
      },
    ],
  };

  return (
    <Layout>
      <div className="container py-6 space-y-6">
        <SmartBreadcrumb items={breadcrumbItems} />
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Student!</h1>
            <p className="text-muted-foreground">Ready to continue your learning journey?</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/explore">Explore Courses</Link>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">
              <Trophy className="h-4 w-4 mr-1" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart3 className="h-4 w-4 mr-1" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="social">
              <Users className="h-4 w-4 mr-1" />
              Social
            </TabsTrigger>
            <TabsTrigger value="ai-assistant">
              <Bot className="h-4 w-4 mr-1" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value="tools">
              <PenTool className="h-4 w-4 mr-1" />
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <StreakCounter streak={3} level={5} progress={750} maxProgress={1000} />
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">My Courses</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mathCourses.map((course) => (
                      <CourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        icon={course.icon}
                        progress={course.progress}
                        masteryLevel={course.masteryLevel}
                        unitsCount={course.unitsCount}
                        skillsCount={course.skillsCount}
                        isStarted={course.isStarted}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <StudyStreak
                  currentStreak={3}
                  longestStreak={7}
                  weeklyGoal={5}
                  weeklyProgress={3}
                  streakHistory={[1, 1, 1, 0, 0, 0, 0]}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <AchievementSystem achievements={achievements} totalPoints={1600} />
          </TabsContent>

          <TabsContent value="analytics">
            <LearningAnalytics
              studyTime={analyticsData.studyTime}
              performance={analyticsData.performance}
              progressData={analyticsData.progressData}
              subjectPerformance={analyticsData.subjectPerformance}
            />
          </TabsContent>

          <TabsContent value="social">
            <StudyGroups
              userGroups={studyGroupsData.userGroups}
              availableGroups={studyGroupsData.availableGroups}
            />
          </TabsContent>

          <TabsContent value="ai-assistant">
            <AIStudyAssistant courseContext="Mathematics" />
          </TabsContent>

          <TabsContent value="tools">
            <InteractiveWhiteboard />
          </TabsContent>
        </Tabs>

        <FloatingActionButton
          onQuickSearch={() => console.log("Quick search")}
          onVoiceSearch={() => console.log("Voice search")}
          onQuickStart={() => console.log("Quick start")}
          onStudyGroup={() => setActiveTab("social")}
          onGoals={() => console.log("Set goals")}
        />
      </div>
    </Layout>
  );
};

export default EnhancedDashboard;