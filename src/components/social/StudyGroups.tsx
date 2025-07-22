import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Plus, 
  Search, 
  MessageCircle, 
  Calendar, 
  BookOpen,
  Crown,
  Star,
  Clock
} from "lucide-react";

interface StudyGroup {
  id: string;
  name: string;
  description: string;
  subject: string;
  memberCount: number;
  maxMembers: number;
  isPrivate: boolean;
  nextSession?: Date;
  members: Array<{
    id: string;
    name: string;
    avatar?: string;
    role: "admin" | "member";
    points: number;
  }>;
  recentActivity: Array<{
    id: string;
    user: string;
    action: string;
    timestamp: Date;
  }>;
}

interface StudyGroupsProps {
  userGroups: StudyGroup[];
  availableGroups: StudyGroup[];
}

const StudyGroups: React.FC<StudyGroupsProps> = ({
  userGroups,
  availableGroups,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<StudyGroup | null>(null);

  const filteredGroups = availableGroups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Users className="h-6 w-6 text-blue-500" />
          Study Groups
        </h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Group
        </Button>
      </div>

      <Tabs defaultValue="my-groups">
        <TabsList>
          <TabsTrigger value="my-groups">My Groups ({userGroups.length})</TabsTrigger>
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="sessions">Study Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="my-groups" className="space-y-4">
          {userGroups.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Study Groups Yet</h3>
                <p className="text-muted-foreground mb-4">
                  Join or create a study group to collaborate with other learners
                </p>
                <Button>Find Study Groups</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userGroups.map((group) => (
                <Card key={group.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {group.name}
                          {group.isPrivate && (
                            <Badge variant="secondary" className="text-xs">Private</Badge>
                          )}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {group.description}
                        </p>
                      </div>
                      <Badge variant="outline">{group.subject}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {group.memberCount}/{group.maxMembers} members
                      </span>
                      {group.nextSession && (
                        <span className="flex items-center gap-1 text-green-600">
                          <Clock className="h-4 w-4" />
                          Next: {group.nextSession.toLocaleDateString()}
                        </span>
                      )}
                    </div>

                    <div className="flex -space-x-2">
                      {group.members.slice(0, 5).map((member) => (
                        <Avatar key={member.id} className="w-8 h-8 border-2 border-background">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="text-xs">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {group.members.length > 5 && (
                        <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                          +{group.members.length - 5}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 gap-1">
                        <MessageCircle className="h-4 w-4" />
                        Chat
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1">
                        <Calendar className="h-4 w-4" />
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="discover" className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search study groups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGroups.map((group) => (
              <Card key={group.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{group.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                    <Badge variant="outline">{group.subject}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {group.memberCount}/{group.maxMembers}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>4.8</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Top Members</h4>
                    <div className="space-y-1">
                      {group.members.slice(0, 3).map((member) => (
                        <div key={member.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={member.avatar} />
                              <AvatarFallback className="text-xs">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span>{member.name}</span>
                            {member.role === 'admin' && (
                              <Crown className="h-3 w-3 text-yellow-500" />
                            )}
                          </div>
                          <span className="text-muted-foreground">{member.points} pts</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">Join Group</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Study Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userGroups
                  .filter(group => group.nextSession)
                  .map((group) => (
                    <div key={group.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{group.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {group.nextSession?.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Remind Me</Button>
                        <Button size="sm">Join</Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyGroups;