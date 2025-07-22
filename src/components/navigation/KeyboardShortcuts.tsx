import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Keyboard, Search, Home, BookOpen, Users, BarChart3 } from "lucide-react";

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

const KeyboardShortcuts: React.FC<KeyboardShortcutsProps> = ({ isOpen, onClose }) => {
  const shortcuts = [
    {
      category: "Navigation",
      items: [
        { keys: ["Ctrl", "H"], description: "Go to Dashboard", icon: <Home className="h-4 w-4" /> },
        { keys: ["Ctrl", "E"], description: "Explore Courses", icon: <BookOpen className="h-4 w-4" /> },
        { keys: ["Ctrl", "G"], description: "Study Groups", icon: <Users className="h-4 w-4" /> },
        { keys: ["Ctrl", "A"], description: "Analytics", icon: <BarChart3 className="h-4 w-4" /> },
      ]
    },
    {
      category: "Search & Actions",
      items: [
        { keys: ["Ctrl", "K"], description: "Quick Search", icon: <Search className="h-4 w-4" /> },
        { keys: ["Ctrl", "/"], description: "Show Shortcuts", icon: <Keyboard className="h-4 w-4" /> },
        { keys: ["Esc"], description: "Close Dialog" },
        { keys: ["Tab"], description: "Navigate Elements" },
      ]
    },
    {
      category: "Learning",
      items: [
        { keys: ["Space"], description: "Play/Pause Video" },
        { keys: ["←", "→"], description: "Seek Video" },
        { keys: ["Enter"], description: "Submit Answer" },
        { keys: ["N"], description: "Next Question" },
      ]
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Keyboard className="h-5 w-5" />
            Keyboard Shortcuts
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {shortcuts.map((category) => (
            <div key={category.category}>
              <h3 className="font-semibold text-lg mb-3">{category.category}</h3>
              <div className="space-y-2">
                {category.items.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                    <div className="flex items-center gap-3">
                      {shortcut.icon}
                      <span>{shortcut.description}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <React.Fragment key={keyIndex}>
                          <Badge variant="outline" className="font-mono text-xs">
                            {key}
                          </Badge>
                          {keyIndex < shortcut.keys.length - 1 && (
                            <span className="text-muted-foreground">+</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-sm text-muted-foreground text-center pt-4 border-t">
          Press <Badge variant="outline" className="font-mono">Esc</Badge> to close this dialog
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KeyboardShortcuts;