export const NAVIGATION_CONSTANTS = {
  ROUTES: {
    HOME: "/",
    DASHBOARD: "/dashboard", 
    EXPLORE: "/explore",
    COURSES: "/courses",
    PROFILE: "/profile",
    SETTINGS: "/settings",
  },
  EXPLORE_CATEGORIES: {
    MATH: "math",
    SCIENCE: "science", 
    ENGINEERING: "engineering",
    COMPUTER_SCIENCE: "computer-science",
    ALL: "all",
  },
  KEYBOARD_SHORTCUTS: {
    SEARCH: "k",
    HOME: "h", 
    EXPLORE: "e",
    SHORTCUTS: "/",
  },
} as const;

export const EXPLORE_SUBJECTS = [
  { id: "math", name: "Mathematics", path: "/explore/math" },
  { id: "science", name: "Science", path: "/explore/science" },
  { id: "engineering", name: "Engineering", path: "/explore/engineering" },
  { id: "all", name: "All Courses", path: "/explore/all" },
] as const;

export const BOARDS = [
  { id: "ncert", name: "NCERT" },
  { id: "maharashtra", name: "Maharashtra" },
  { id: "karnataka", name: "Karnataka" },
  { id: "telangana", name: "Telangana" },
  { id: "bridge", name: "Bridge" },
] as const;