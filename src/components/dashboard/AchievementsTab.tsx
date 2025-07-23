import React from "react";
import AchievementSystem from "@/components/gamification/AchievementSystem";
import { SAMPLE_ACHIEVEMENTS } from "@/constants/dashboard";

export default function AchievementsTab() {
  return (
    <AchievementSystem 
      achievements={SAMPLE_ACHIEVEMENTS} 
      totalPoints={1600} 
    />
  );
}