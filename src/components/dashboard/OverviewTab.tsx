import React from "react";
import { Link } from "next/link";
import StreakCounter from "@/components/gamification/StreakCounter";
import StudyStreak from "@/components/gamification/StudyStreak";
import CourseCard from "./CourseCard";
import { SAMPLE_COURSES } from "@/constants/dashboard";

export default function OverviewTab() {
  const mathCourses = SAMPLE_COURSES.filter(course => 
    course.id.includes("geometry") || course.id.includes("algebra")
  );

  const engineeringCourses = SAMPLE_COURSES.filter(course => 
    course.id.includes("engineering") || course.id.includes("circuit")
  );

  const recommendedCourses = SAMPLE_COURSES.filter(course => 
    course.id.includes("database") || course.id.includes("physics")
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <StreakCounter streak={3} level={5} progress={750} maxProgress={1000} />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <Link href="/explore" className="text-primary text-sm hover:underline">
                Edit Courses
              </Link>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">Mathematics</h3>
                  <Link href="/explore/math" className="text-primary text-sm hover:underline">
                    See all (14)
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mathCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">Engineering</h3>
                  <Link href="/explore/engineering" className="text-primary text-sm hover:underline">
                    See all (9)
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {engineeringCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <StudyStreak
            currentStreak={3}
            longestStreak={7}
            weeklyGoal={5}
            weeklyProgress={3}
            streakHistory={[1, 1, 1, 0, 0, 0, 0]}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recommended for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}