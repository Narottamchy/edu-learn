import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ExploreView from "@/components/explore/ExploreView";

const Explore: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  return (
    <Layout>
      <div className="container py-6">
        <ExploreView activeCategory={category} />
      </div>
    </Layout>
  );
};

export default Explore;