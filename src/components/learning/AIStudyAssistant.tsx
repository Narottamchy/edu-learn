import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, Lightbulb, BookOpen, HelpCircle, Zap } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface AIStudyAssistantProps {
  courseContext?: string;
  unitContext?: string;
}

const AIStudyAssistant: React.FC<AIStudyAssistantProps> = ({
  courseContext,
  unitContext,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: `Hi! I'm your AI study assistant. I can help you with ${courseContext || 'your studies'}. What would you like to learn about today?`,
      timestamp: new Date(),
      suggestions: [
        "Explain this concept",
        "Generate practice problems",
        "Create a study plan",
        "Quiz me on this topic"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickActions = [
    {
      icon: Lightbulb,
      label: "Get Hints",
      action: "Can you give me some hints for this problem?",
      color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
    },
    {
      icon: BookOpen,
      label: "Explain Concept",
      action: "Can you explain this concept in simple terms?",
      color: "bg-blue-100 text-blue-700 hover:bg-blue-200"
    },
    {
      icon: HelpCircle,
      label: "Ask Question",
      action: "I have a question about this topic",
      color: "bg-green-100 text-green-700 hover:bg-green-200"
    },
    {
      icon: Zap,
      label: "Quick Quiz",
      action: "Give me a quick quiz on this topic",
      color: "bg-purple-100 text-purple-700 hover:bg-purple-200"
    }
  ];

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: `I understand you're asking about "${content}". Here's what I can help you with:\n\n• Break down complex concepts into simpler parts\n• Provide step-by-step explanations\n• Generate practice problems\n• Create personalized study plans\n\nWould you like me to elaborate on any specific aspect?`,
        timestamp: new Date(),
        suggestions: [
          "Give me practice problems",
          "Create a study schedule",
          "Explain with examples",
          "Test my understanding"
        ]
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-blue-500" />
          AI Study Assistant
          <Badge variant="secondary" className="ml-auto">
            {courseContext || "General"}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className={`${action.color} border-0 justify-start gap-2`}
              onClick={() => handleQuickAction(action.action)}
            >
              <action.icon className="h-4 w-4" />
              {action.label}
            </Button>
          ))}
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </div>
                  
                  {message.suggestions && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {message.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="h-6 text-xs"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                    <span className="text-sm">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about your studies..."
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(inputValue);
              }
            }}
          />
          <Button 
            size="icon" 
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isLoading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIStudyAssistant;