import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Brain, 
  BarChart3, 
  Calendar,
  Award,
  AlertTriangle
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

interface LearningAnalyticsProps {
  studyTime: {
    today: number;
    week: number;
    month: number;
    goal: number;
  };
  performance: {
    accuracy: number;
    improvement: number;
    weakAreas: string[];
    strongAreas: string[];
  };
  progressData: Array<{
    date: string;
    studyTime: number;
    accuracy: number;
  }>;
  subjectPerformance: Array<{
    subject: string;
    score: number;
    improvement: number;
  }>;
}

const LearningAnalytics: React.FC<LearningAnalyticsProps> = ({
  studyTime,
  performance,
  progressData,
  subjectPerformance,
}) => {
  const weeklyGoalProgress = (studyTime.week / studyTime.goal) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-blue-500" />
          Learning Analytics
        </h2>
        <Badge variant="outline" className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          Last 30 days
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Study Time Today</p>
                <p className="text-2xl font-bold">{studyTime.today}h</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                <p className="text-2xl font-bold">{performance.accuracy}%</p>
              </div>
              <Target className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Improvement</p>
                <p className="text-2xl font-bold text-green-600">
                  +{performance.improvement}%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Weekly Goal</p>
                <p className="text-2xl font-bold">{Math.round(weeklyGoalProgress)}%</p>
              </div>
              <Award className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Goal Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Weekly Study Goal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{studyTime.week}h / {studyTime.goal}h</span>
            </div>
            <Progress value={weeklyGoalProgress} className="h-3" />
            <p className="text-xs text-muted-foreground">
              {weeklyGoalProgress >= 100 
                ? "🎉 Goal achieved! Great work!" 
                : `${Math.round(studyTime.goal - studyTime.week)}h remaining to reach your goal`
              }
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Study Progress Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="studyTime" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Study Time (hours)"
              />
              <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Accuracy (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Subject Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Subject Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Strengths and Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Brain className="h-5 w-5" />
              Strong Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {performance.strongAreas.map((area, index) => (
                <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                  {area}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <AlertTriangle className="h-5 w-5" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {performance.weakAreas.map((area, index) => (
                <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-800">
                  {area}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearningAnalytics;