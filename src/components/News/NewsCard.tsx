import React from "react";
import { NewsItem } from "@/types/news";
import { format } from "date-fns";

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="group">
      {/* Mobile view  */}
      <div className="md:hidden">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 bg-[#0E0D13] py-4 px-0 border-b border-gray-700 last:border-0 hover:bg-[#2A283E]"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.headline}
              className="w-[100px] h-[100px] object-cover flex-shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
              }}
            />
          )}

          <div className="flex flex-col justify-between pr-2">
            <div className="flex flex-row justify-between text-gray-400 text-[11px] uppercase tracking-wide mb-2">
              <span className="font-['Rubik'] font-normal text-[12px] text-white leading-[16px] uppercase">
                {item.source}
              </span>
              <span className="font-['Rubik'] font-normal text-[12px] text-white leading-[16px] uppercase">
                {format(new Date(item.datetime * 1000), "dd MMM yyyy")}
              </span>{" "}
            </div>
            <h3 className="font-medium text-[20px] leading-[24px] text-white font-['Rubik'] line-clamp-3">
              {item.headline}
            </h3>
          </div>
        </a>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0E0D13] w-full p-0 md:p-4 flex flex-col gap-2 hover:scale-[1.02] transition-transform duration-200 border border-transparent  hover:bg-[#2A283E]"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.headline}
              className="w-full h-36 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
              }}
            />
          )}

          <div className="flex flex-col gap-2 mt-2">
            <p className="text-xs text-gray-400 flex justify-between">
              <span className="font-['Rubik'] font-normal text-[12px] text-white leading-[16px] uppercase">
                {item.source}
              </span>
              <span className="font-['Rubik'] font-normal text-[12px] text-white leading-[16px] uppercase">
                {format(new Date(item.datetime * 1000), "dd MMM yyyy")}
              </span>
            </p>

            <h3 className="font-medium text-[20px] leading-[24px] text-white font-['Rubik'] line-clamp-3">
              {item.headline}
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
