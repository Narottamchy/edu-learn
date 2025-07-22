import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseSidebar from "@/components/navigation/Sidebar";
import { Calculator } from "lucide-react";

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  // This would normally come from an API
  const courseData = {
    id: courseId || "basic-geometry",
    title: "Basic geometry and measurement",
    description: "Learn about shapes, angles, area, perimeter, and more in this comprehensive geometry course.",
    masteryPoints: 12700,
    unitsCount: 14,
    skillsCount: 127,
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
      description: `Learn about ${i === 0 ? "area and perimeter" :
                   i === 1 ? "mass and volume" :
                   i === 2 ? "angles and how to measure them" :
                   i === 3 ? "different types of plane figures" :
                   i === 4 ? "different units of measurement" :
                   i === 5 ? "volume and how to calculate it" :
                   i === 6 ? "the coordinate plane" :
                   i === 7 ? "triangles and their properties" :
                   i === 8 ? "quadrilaterals and their properties" :
                   i === 9 ? "circles and their properties" :
                   i === 10 ? "3D shapes and their properties" :
                   i === 11 ? "transformations in geometry" :
                   i === 12 ? "symmetry in shapes" :
                   "advanced geometric concepts"} in this unit.`,
      masteryItems: Array.from({ length: 10 }, (_, j) => ({
        id: `${i + 1}-${j + 1}`,
        level: Math.random() < 0.2 ? "mastered" :
               Math.random() < 0.4 ? "proficient" :
               Math.random() < 0.6 ? "familiar" :
               Math.random() < 0.8 ? "attempted" : "notStarted",
        isQuiz: j === 4 || j === 9,
        isTest: j === 9,
      })),
    })),
  };

  // Create sidebar units
  const sidebarUnits = courseData.units.map((unit, index) => ({
    id: unit.id,
    title: unit.title,
    icon: `${index + 1}`,
  }));

  return (
    <Layout>
      <CourseSidebar courseId={courseId} units={sidebarUnits} />
      <div className="flex-1 overflow-auto p-6">
        <CourseOverview
          courseId={courseData.id}
          title={courseData.title}
          description={courseData.description}
          masteryPoints={courseData.masteryPoints}
          unitsCount={courseData.unitsCount}
          skillsCount={courseData.skillsCount}
          units={courseData.units}
        />
      </div>
    </Layout>
  );
};

export default CourseDetails;