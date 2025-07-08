import React from "react";
import { NewsItem } from "@/types/news";
import { format } from "date-fns";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-4">
        <div className="flex items-start gap-4">
          {item.image && (
            <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
              <img
                src={item.image}
                alt={item.headline}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                }}
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium text-gray-500">
                {item.source}
              </span>
              <span className="text-xs text-gray-400">
                {format(new Date(item.datetime * 1000), "MMM dd, yyyy")}
              </span>
            </div>
            <h3 className="mt-1 text-lg font-semibold text-gray-900 line-clamp-2">
              {item.headline}
            </h3>
            <div className="mt-2 flex items-center text-blue-600 text-sm">
              <span>Read more</span>
              <ArrowRightCircleIcon className="ml-1 h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
