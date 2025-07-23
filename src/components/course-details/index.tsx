"use client";

import React from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseSidebar from "@/components/navigation/Sidebar";
import { SAMPLE_COURSE_DATA } from "@/constants/courses";

export default function CourseDetails() {
  const params = useParams();
  const courseId = params?.courseId as string;

  // Create sidebar units
  const sidebarUnits = SAMPLE_COURSE_DATA.units.map((unit, index) => ({
    id: unit.id,
    title: unit.title,
    icon: `${index + 1}`,
  }));

  return (
    <Layout>
      <CourseSidebar courseId={courseId} units={sidebarUnits} />
      <div className="flex-1 overflow-auto p-6">
        <CourseOverview
          courseId={SAMPLE_COURSE_DATA.id}
          title={SAMPLE_COURSE_DATA.title}
          description={SAMPLE_COURSE_DATA.description}
          masteryPoints={SAMPLE_COURSE_DATA.masteryPoints}
          unitsCount={SAMPLE_COURSE_DATA.unitsCount}
          skillsCount={SAMPLE_COURSE_DATA.skillsCount}
          units={SAMPLE_COURSE_DATA.units}
        />
      </div>
    </Layout>
  );
}