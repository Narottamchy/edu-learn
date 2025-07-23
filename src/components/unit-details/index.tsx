"use client";

import React from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout";
import UnitView from "@/components/courses/UnitView";
import CourseSidebar from "@/components/navigation/Sidebar";
import { SAMPLE_COURSE_DATA, COURSE_CONSTANTS } from "@/constants/courses";

export default function UnitDetails() {
  const params = useParams();
  const courseId = params?.courseId as string;
  const unitId = params?.unitId as string;

  // Find the current unit
  const unitIndex = parseInt(unitId?.replace("unit-", "") || "1") - 1;
  const unitTitle = SAMPLE_COURSE_DATA.units[unitIndex]?.title || "Measuring angles";
  
  // Create sidebar units
  const sidebarUnits = SAMPLE_COURSE_DATA.units.map((unit, index) => ({
    id: unit.id,
    title: unit.title,
    icon: `${index + 1}`,
    isActive: unit.id === unitId,
  }));

  // Generate sample lessons
  const lessons = [
    {
      id: "lesson-1",
      title: "Terms & labels in geometry",
      type: COURSE_CONSTANTS.LESSON_TYPES.VIDEO,
      duration: "5:30",
      completed: true,
    },
    {
      id: "lesson-2",
      title: "Lines, line segments, & rays",
      type: COURSE_CONSTANTS.LESSON_TYPES.VIDEO,
      duration: "7:15",
    },
    {
      id: "lesson-3",
      title: "Understanding angles",
      type: COURSE_CONSTANTS.LESSON_TYPES.ARTICLE,
      completed: true,
    },
    {
      id: "lesson-4",
      title: "Measuring angles with a protractor",
      type: COURSE_CONSTANTS.LESSON_TYPES.VIDEO,
      duration: "6:45",
    },
    {
      id: "lesson-5",
      title: "Types of angles",
      type: COURSE_CONSTANTS.LESSON_TYPES.ARTICLE,
    },
    {
      id: "lesson-6",
      title: "Angle measurement practice",
      type: COURSE_CONSTANTS.LESSON_TYPES.PRACTICE,
    },
    {
      id: "lesson-7",
      title: "Complementary and supplementary angles",
      type: COURSE_CONSTANTS.LESSON_TYPES.VIDEO,
      duration: "8:20",
    },
    {
      id: "lesson-8",
      title: "Angle relationships practice",
      type: COURSE_CONSTANTS.LESSON_TYPES.PRACTICE,
    },
    {
      id: "lesson-9",
      title: "Angles quiz",
      type: COURSE_CONSTANTS.LESSON_TYPES.QUIZ,
    },
  ];

  // Generate mastery items
  const masteryItems = Array.from({ length: 10 }, (_, i) => ({
    id: `${unitIndex + 1}-${i + 1}`,
    level: Math.random() < 0.2 ? "mastered" :
           Math.random() < 0.4 ? "proficient" :
           Math.random() < 0.6 ? "familiar" :
           Math.random() < 0.8 ? "attempted" : "notStarted",
    isQuiz: i === 4 || i === 9,
    isTest: i === 9,
  }));

  return (
    <Layout>
      <CourseSidebar courseId={courseId} units={sidebarUnits} />
      <div className="flex-1 overflow-auto p-6">
        <UnitView
          courseId={SAMPLE_COURSE_DATA.id}
          courseTitle={SAMPLE_COURSE_DATA.title}
          unitId={unitId || "unit-3"}
          unitTitle={unitTitle}
          unitDescription="In this topic, we will learn what an angle is and how to label, measure and construct them. We will also explore special types of angles."
          masteryPoints={1000}
          masteryItems={masteryItems}
          lessons={lessons}
        />
      </div>
    </Layout>
  );
}