"use client";

import React from "react";
import { NewsItem } from "@/types/news";
import NewsCard from "./NewsCard";
import NewsSkeleton from "./NewsSkeleton";

interface NewsListProps {
  news: NewsItem[];
  loading?: boolean;
  error?: string | null;
}

const NewsList: React.FC<NewsListProps> = ({ news, loading, error }) => {
  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <NewsSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!news.length) {
    return (
      <div className="p-4 text-center text-gray-500">
        No news available at the moment.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
