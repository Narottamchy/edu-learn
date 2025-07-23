"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Trophy, BarChart3, Users, Bot, Edit } from "lucide-react";
import Link from "next/link";

import Layout from "@/components/layout";
import SmartBreadcrumb from "@/components/navigation/SmartBreadcrumb";
import FloatingActionButton from "@/components/navigation/FloatingActionButton";
import OverviewTab from "./OverviewTab";
import AchievementsTab from "./AchievementsTab";
import AnalyticsTab from "./AnalyticsTab";
import SocialTab from "./SocialTab";
import AIAssistantTab from "./AIAssistantTab";
import ToolsTab from "./ToolsTab";

import { DASHBOARD_CONSTANTS } from "@/constants/dashboard";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(DASHBOARD_CONSTANTS.TAB_VALUES.OVERVIEW);

  const breadcrumbItems = [
    { label: "Dashboard", isActive: true }
  ];

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
            <Link href="/explore">Explore Courses</Link>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value={DASHBOARD_CONSTANTS.TAB_VALUES.OVERVIEW}>
              Overview
            </TabsTrigger>
            <TabsTrigger value={DASHBOARD_CONSTANTS.TAB_VALUES.ACHIEVEMENTS}>
              <Trophy className="h-4 w-4 mr-1" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value={DASHBOARD_CONSTANTS.TAB_VALUES.ANALYTICS}>
              <BarChart3 className="h-4 w-4 mr-1" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value={DASHBOARD_CONSTANTS.TAB_VALUES.SOCIAL}>
              <Users className="h-4 w-4 mr-1" />
              Social
            </TabsTrigger>
            <TabsTrigger value={DASHBOARD_CONSTANTS.TAB_VALUES.AI_ASSISTANT}>
              <Bot className="h-4 w-4 mr-1" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value={DASHBOARD_CONSTANTS.TAB_VALUES.TOOLS}>
              <Edit className="h-4 w-4 mr-1" />
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value={DASHBOARD_CONSTANTS.TAB_VALUES.OVERVIEW}>
            <OverviewTab />
          </TabsContent>

          <TabsContent value={DASHBOARD_CONSTANTS.TAB_VALUES.ACHIEVEMENTS}>
            <AchievementsTab />
          </TabsContent>

          <TabsContent value={DASHBOARD_CONSTANTS.TAB_VALUES.ANALYTICS}>
            <AnalyticsTab />
          </TabsContent>

          <TabsContent value={DASHBOARD_CONSTANTS.TAB_VALUES.SOCIAL}>
            <SocialTab />
          </TabsContent>

          <TabsContent value={DASHBOARD_CONSTANTS.TAB_VALUES.AI_ASSISTANT}>
            <AIAssistantTab />
          </TabsContent>

          <TabsContent value={DASHBOARD_CONSTANTS.TAB_VALUES.TOOLS}>
            <ToolsTab />
          </TabsContent>
        </Tabs>

        <FloatingActionButton
          onQuickSearch={() => console.log("Quick search")}
          onVoiceSearch={() => console.log("Voice search")}
          onQuickStart={() => console.log("Quick start")}
          onStudyGroup={() => setActiveTab(DASHBOARD_CONSTANTS.TAB_VALUES.SOCIAL)}
          onGoals={() => console.log("Set goals")}
        />
      </div>
    </Layout>
  );
}