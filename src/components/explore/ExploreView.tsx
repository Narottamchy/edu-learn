import React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import CourseCard from "../dashboard/CourseCard";
import { BookOpen, Zap, Atom, Calculator, Database, Cpu } from "lucide-react";

interface ExploreViewProps {
  activeCategory?: string;
}

export default function ExploreView({ activeCategory = "all" }: ExploreViewProps) {
  // Sample course data
  const courses = [
    {
      id: "math-ncert",
      title: "Mathematics (NCERT)",
      description: "Complete mathematics curriculum following NCERT guidelines",
      icon: Calculator,
      categories: ["math", "ncert"],
      classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: "science-ncert",
      title: "Science (NCERT)",
      description: "Complete science curriculum following NCERT guidelines",
      icon: Atom,
      categories: ["science", "ncert"],
      classes: [6, 7, 8, 9, 10],
    },
    {
      id: "physics-ncert",
      title: "Physics (NCERT)",
      description: "Complete physics curriculum for higher classes",
      icon: Zap,
      categories: ["science", "physics", "ncert"],
      classes: [11, 12],
    },
    {
      id: "electrical-engineering",
      title: "Electrical Engineering",
      description: "Fundamentals of electrical engineering",
      icon: Cpu,
      categories: ["engineering", "electrical"],
      classes: [11, 12],
      isAdvanced: true,
    },
    {
      id: "database-systems",
      title: "Database Systems",
      description: "Learn about database design and management",
      icon: Database,
      categories: ["computer-science", "engineering"],
      classes: [11, 12],
      isAdvanced: true,
    },
  ];

  const boards = [
    { id: "ncert", name: "NCERT" },
    { id: "maharashtra", name: "Maharashtra" },
    { id: "karnataka", name: "Karnataka" },
    { id: "telangana", name: "Telangana" },
    { id: "bridge", name: "Bridge" },
  ];

  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(course => course.categories.includes(activeCategory));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Explore Courses</h1>
        <p className="text-muted-foreground mt-1">
          Browse our comprehensive collection of courses across various subjects and boards
        </p>
      </div>

      <Tabs defaultValue="all">
        <div className="border-b">
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 data-[state=active]:shadow-none"
            >
              All Courses
            </TabsTrigger>
            <TabsTrigger 
              value="math" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 data-[state=active]:shadow-none"
            >
              Mathematics
            </TabsTrigger>
            <TabsTrigger 
              value="science" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 data-[state=active]:shadow-none"
            >
              Science
            </TabsTrigger>
            <TabsTrigger 
              value="engineering" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 data-[state=active]:shadow-none"
            >
              Engineering
            </TabsTrigger>
            <TabsTrigger 
              value="computer-science" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 data-[state=active]:shadow-none"
            >
              Computer Science
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {boards.map((board) => (
              <Link 
                key={board.id}
                href={`/explore/${board.id}`}
                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">{board.name}</h3>
                  <div className="text-xs text-muted-foreground mt-1">
                    All courses for {board.name} board
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  icon={course.icon}
                  unitsCount={Math.floor(Math.random() * 10) + 5}
                  skillsCount={Math.floor(Math.random() * 50) + 20}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Courses by Class</h2>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((classNum) => (
                <Link key={classNum} href={`/explore/class/${classNum}`}>
                  <Badge variant="outline" className="hover:bg-accent cursor-pointer">
                    Class {classNum}
                  </Badge>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {filteredCourses
                .filter((_, index) => index < 3)
                .map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    icon={course.icon}
                    unitsCount={Math.floor(Math.random() * 10) + 5}
                    skillsCount={Math.floor(Math.random() * 50) + 20}
                  />
                ))}
            </div>
          </div>
        </TabsContent>

        {["math", "science", "engineering", "computer-science"].map((category) => (
          <TabsContent key={category} value={category} className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses
                .filter(course => course.categories.includes(category))
                .map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    icon={course.icon}
                    unitsCount={Math.floor(Math.random() * 10) + 5}
                    skillsCount={Math.floor(Math.random() * 50) + 20}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}