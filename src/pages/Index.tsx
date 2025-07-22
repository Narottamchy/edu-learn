import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Index: React.FC = () => {
  // For now, we'll just redirect to the dashboard
  // In a real app, this could check authentication status
  return <Dashboard />;
};

export default Index;