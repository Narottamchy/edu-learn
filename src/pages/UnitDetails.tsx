import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import UnitView from "@/components/courses/UnitView";
import CourseSidebar from "@/components/navigation/Sidebar";
import { Calculator } from "lucide-react";

const UnitDetails: React.FC = () => {
  const { courseId, unitId } = useParams<{ courseId: string; unitId: string }>();

  // This would normally come from an API
  const courseData = {
    id: courseId || "basic-geometry",
    title: "Basic geometry and measurement",
    icon: <Calculator className="h-6 w-6" />,
    units: Array.from({ length: 14 }, (_, i) => ({
      id: `unit-${i + 1}`,
      title: i === 0 ? "Intro to area and perimeter" :
             i === 1 ? "Intro to mass and volume" :
             i === 2 ? "Measuring angles" :
             i === 3 ? "Plane figures" :
             i === 4 ? "Units of measurement" :
             i === 5 ? "Volume" :
             i === 6 ? "Coordinate plane" :
             i === 7 ? "Triangles" :
             i === 8 ? "Quadrilaterals" :
             i === 9 ? "Circles" :
             i === 10 ? "3D shapes" :
             i === 11 ? "Transformations" :
             i === 12 ? "Symmetry" :
             "Advanced topics",
    })),
  };

  // Find the current unit
  const unitIndex = parseInt(unitId?.replace("unit-", "") || "1") - 1;
  const unitTitle = courseData.units[unitIndex]?.title || "Measuring angles";
  
  // Create sidebar units
  const sidebarUnits = courseData.units.map((unit, index) => ({
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
      type: "video",
      duration: "5:30",
      completed: true,
    },
    {
      id: "lesson-2",
      title: "Lines, line segments, & rays",
      type: "video",
      duration: "7:15",
    },
    {
      id: "lesson-3",
      title: "Understanding angles",
      type: "article",
      completed: true,
    },
    {
      id: "lesson-4",
      title: "Measuring angles with a protractor",
      type: "video",
      duration: "6:45",
    },
    {
      id: "lesson-5",
      title: "Types of angles",
      type: "article",
    },
    {
      id: "lesson-6",
      title: "Angle measurement practice",
      type: "practice",
    },
    {
      id: "lesson-7",
      title: "Complementary and supplementary angles",
      type: "video",
      duration: "8:20",
    },
    {
      id: "lesson-8",
      title: "Angle relationships practice",
      type: "practice",
    },
    {
      id: "lesson-9",
      title: "Angles quiz",
      type: "quiz",
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
          courseId={courseData.id}
          courseTitle={courseData.title}
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
};

export default UnitDetails;