import React from "react";
import LearningAnalytics from "@/components/analytics/LearningAnalytics";
import { SAMPLE_ANALYTICS_DATA } from "@/constants/analytics";

export default function AnalyticsTab() {
  return (
    <LearningAnalytics
      studyTime={SAMPLE_ANALYTICS_DATA.studyTime}
      performance={SAMPLE_ANALYTICS_DATA.performance}
      progressData={SAMPLE_ANALYTICS_DATA.progressData}
      subjectPerformance={SAMPLE_ANALYTICS_DATA.subjectPerformance}
    />
  );
}