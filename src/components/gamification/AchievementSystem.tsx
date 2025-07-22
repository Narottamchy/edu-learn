import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Zap, Target, Award, Medal } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  maxProgress: number;
  isUnlocked: boolean;
  rarity: "common" | "rare" | "epic" | "legendary";
  points: number;
}

interface AchievementSystemProps {
  achievements: Achievement[];
  totalPoints: number;
}

const AchievementSystem: React.FC<AchievementSystemProps> = ({
  achievements,
  totalPoints,
}) => {
  const rarityColors = {
    common: "bg-gray-500",
    rare: "bg-blue-500",
    epic: "bg-purple-500",
    legendary: "bg-yellow-500",
  };

  const rarityLabels = {
    common: "Common",
    rare: "Rare",
    epic: "Epic",
    legendary: "Legendary",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="h-6 w-6 text-yellow-500" />
          Achievements
        </h2>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="font-semibold">{totalPoints.toLocaleString()} points</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <Card 
            key={achievement.id} 
            className={`relative overflow-hidden transition-all duration-200 ${
              achievement.isUnlocked 
                ? "border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50" 
                : "opacity-75"
            }`}
          >
            {achievement.isUnlocked && (
              <div className="absolute top-2 right-2">
                <Medal className="h-5 w-5 text-yellow-500" />
              </div>
            )}
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    achievement.isUnlocked ? "bg-yellow-100" : "bg-muted"
                  }`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <Badge 
                      variant="secondary" 
                      className={`${rarityColors[achievement.rarity]} text-white text-xs`}
                    >
                      {rarityLabels[achievement.rarity]}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                {achievement.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{achievement.progress}/{achievement.maxProgress}</span>
                </div>
                <Progress 
                  value={(achievement.progress / achievement.maxProgress) * 100} 
                  className="h-2"
                />
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm font-medium">
                  +{achievement.points} points
                </span>
                {achievement.isUnlocked && (
                  <Badge variant="default" className="bg-green-500">
                    Unlocked!
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AchievementSystem;