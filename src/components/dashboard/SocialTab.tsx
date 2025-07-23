import React from "react";
import StudyGroups from "@/components/social/StudyGroups";

export default function SocialTab() {
  const studyGroupsData = {
    userGroups: [
      {
        id: "1",
        name: "Math Wizards",
        description: "Advanced mathematics study group",
        subject: "Mathematics",
        memberCount: 12,
        maxMembers: 15,
        isPrivate: false,
        nextSession: new Date(Date.now() + 86400000),
        members: [
          { id: "1", name: "John Doe", role: "admin" as const, points: 1250 },
          { id: "2", name: "Jane Smith", role: "member" as const, points: 980 },
        ],
        recentActivity: [],
      },
    ],
    availableGroups: [
      {
        id: "2",
        name: "Physics Enthusiasts",
        description: "Exploring the wonders of physics together",
        subject: "Physics",
        memberCount: 8,
        maxMembers: 12,
        isPrivate: false,
        members: [
          { id: "3", name: "Alice Johnson", role: "admin" as const, points: 1500 },
          { id: "4", name: "Bob Wilson", role: "member" as const, points: 1200 },
        ],
        recentActivity: [],
      },
    ],
  };

  return (
    <StudyGroups
      userGroups={studyGroupsData.userGroups}
      availableGroups={studyGroupsData.availableGroups}
    />
  );
}