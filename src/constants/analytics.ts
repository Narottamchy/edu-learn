export const ANALYTICS_CONSTANTS = {
  CHART_COLORS: {
    PRIMARY: "#3b82f6",
    SECONDARY: "#10b981", 
    WARNING: "#f59e0b",
    DANGER: "#ef4444",
  },
  TIME_PERIODS: {
    TODAY: "today",
    WEEK: "week",
    MONTH: "month", 
    YEAR: "year",
  },
  PERFORMANCE_THRESHOLDS: {
    EXCELLENT: 90,
    GOOD: 75,
    AVERAGE: 60,
    NEEDS_IMPROVEMENT: 40,
  },
} as const;

export const SAMPLE_ANALYTICS_DATA = {
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
} as const;