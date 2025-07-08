"use client";

import React from "react";
import { NewsItem } from "@/types/news";
import NewsCard from "./NewsCard";

interface NewsListProps {
  news: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
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
