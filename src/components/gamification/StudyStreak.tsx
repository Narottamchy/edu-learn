import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Calendar, Target, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface StudyStreakProps {
  currentStreak: number;
  longestStreak: number;
  weeklyGoal: number;
  weeklyProgress: number;
  streakHistory: number[];
}

const StudyStreak: React.FC<StudyStreakProps> = ({
  currentStreak,
  longestStreak,
  weeklyGoal,
  weeklyProgress,
  streakHistory,
}) => {
  const weeklyPercentage = (weeklyProgress / weeklyGoal) * 100;
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Study Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Streak */}
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-600 mb-1">
            {currentStreak}
          </div>
          <div className="text-sm text-muted-foreground">
            Day{currentStreak !== 1 ? 's' : ''} in a row
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Longest: {longestStreak} days
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Weekly Goal</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {weeklyProgress}/{weeklyGoal} days
            </span>
          </div>
          <Progress value={weeklyPercentage} className="h-2" />
        </div>

        {/* Weekly Calendar */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">This Week</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map((day, index) => (
              <div key={day} className="text-center">
                <div className="text-xs text-muted-foreground mb-1">{day}</div>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                    streakHistory[index] > 0
                      ? 'bg-green-500 text-white'
                      : index < new Date().getDay()
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {streakHistory[index] || ''}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Streak Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              {Math.round(weeklyProgress / 7 * 100)}%
            </div>
            <div className="text-xs text-muted-foreground">Consistency</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-green-600 flex items-center justify-center gap-1">
              <TrendingUp className="h-4 w-4" />
              +{currentStreak * 10}
            </div>
            <div className="text-xs text-muted-foreground">Bonus XP</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStreak;