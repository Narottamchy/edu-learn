import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  ChevronDown, 
  Bell, 
  ExternalLink,
  Keyboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "@/components/ui/ThemeToggle";
import KeyboardShortcuts from "./KeyboardShortcuts";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "k":
            e.preventDefault();
            // Focus search input
            document.querySelector<HTMLInputElement>('input[type="search"]')?.focus();
            break;
          case "/":
            e.preventDefault();
            setShowShortcuts(true);
            break;
          case "h":
            e.preventDefault();
            window.location.href = "/";
            break;
          case "e":
            e.preventDefault();
            window.location.href = "/explore";
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center justify-between w-full gap-4">
            {/* Logo and Explore */}
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-primary rounded-md p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-white"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="font-bold text-lg hidden md:inline-block">EduLearn</span>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1 text-primary">
                    Explore <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[220px]">
                  <DropdownMenuItem asChild>
                    <Link to="/explore/math" className="cursor-pointer">Math</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/explore/science" className="cursor-pointer">Science</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/explore/engineering" className="cursor-pointer">Engineering</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/explore/all" className="cursor-pointer">All Courses</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses, topics... (Ctrl+K)"
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Right side items */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden md:flex gap-1">
                <ExternalLink className="h-4 w-4" />
                <span>Donate</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowShortcuts(true)}
                className="text-muted-foreground"
              >
                <Keyboard className="h-5 w-5" />
              </Button>
              
              <ThemeToggle />
              
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Bell className="h-5 w-5" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        US
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/progress" className="cursor-pointer">My Progress</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="cursor-pointer">Settings</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <KeyboardShortcuts 
        isOpen={showShortcuts} 
        onClose={() => setShowShortcuts(false)} 
      />
    </>
  );
};

export default Navbar;