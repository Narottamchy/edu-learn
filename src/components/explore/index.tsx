"use client";

import React from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout";
import ExploreView from "./ExploreView";

export default function Explore() {
  const params = useParams();
  const category = params?.category as string;

  return (
    <Layout>
      <div className="container py-6">
        <ExploreView activeCategory={category} />
      </div>
    </Layout>
  );
}