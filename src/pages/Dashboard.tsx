import React from "react";
import Layout from "@/components/layout/Layout";
import StreakCounter from "@/components/dashboard/StreakCounter";
import CourseCard from "@/components/dashboard/CourseCard";
import { Button } from "@/components/ui/button";
import { Calculator, Atom, Zap, Cpu, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  // Sample courses data
  const mathCourses = [
    {
      id: "basic-geometry",
      title: "Basic geometry and measurement",
      icon: <Calculator className="h-6 w-6" />,
      progress: 45,
      masteryLevel: "familiar" as const,
      unitsCount: 14,
      skillsCount: 127,
      isStarted: true,
    },
    {
      id: "algebra-basics",
      title: "Algebra basics",
      icon: <Calculator className="h-6 w-6" />,
      progress: 20,
      masteryLevel: "attempted" as const,
      unitsCount: 10,
      skillsCount: 98,
      isStarted: true,
    },
  ];

  const engineeringCourses = [
    {
      id: "electrical-engineering",
      title: "Electrical engineering",
      icon: <Cpu className="h-6 w-6" />,
      progress: 10,
      masteryLevel: "attempted" as const,
      unitsCount: 12,
      skillsCount: 145,
      isStarted: true,
    },
    {
      id: "circuit-analysis",
      title: "Circuit analysis",
      icon: <Zap className="h-6 w-6" />,
      unitsCount: 8,
      skillsCount: 76,
    },
  ];

  return (
    <Layout>
      <div className="container py-6 space-y-8">
        <StreakCounter streak={0} level={1} progress={0} maxProgress={1} />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">My courses</h2>
            <Button variant="outline" asChild>
              <Link to="/explore">Edit Courses</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Basic geometry and measurement</h3>
                <Link to="/explore/math" className="text-primary text-sm hover:underline">
                  See all (14)
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mathCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    icon={course.icon}
                    progress={course.progress}
                    masteryLevel={course.masteryLevel}
                    unitsCount={course.unitsCount}
                    skillsCount={course.skillsCount}
                    isStarted={course.isStarted}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Electrical engineering</h3>
                <Link to="/explore/engineering" className="text-primary text-sm hover:underline">
                  See all (9)
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {engineeringCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    icon={course.icon}
                    progress={course.progress}
                    masteryLevel={course.masteryLevel}
                    unitsCount={course.unitsCount}
                    skillsCount={course.skillsCount}
                    isStarted={course.isStarted}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Recommended for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CourseCard
              id="database-systems"
              title="Database Systems"
              description="Learn about database design and management"
              icon={<Database className="h-6 w-6" />}
              unitsCount={6}
              skillsCount={42}
            />
            <CourseCard
              id="physics-mechanics"
              title="Physics: Mechanics"
              description="Learn about forces, motion, and energy"
              icon={<Atom className="h-6 w-6" />}
              unitsCount={8}
              skillsCount={64}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;