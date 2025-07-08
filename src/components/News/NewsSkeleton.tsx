import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-20 h-20">
          <Skeleton height={80} width={80} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <Skeleton width={80} height={15} />
            <Skeleton width={60} height={15} />
          </div>
          <Skeleton count={2} className="mt-2" />
          <Skeleton width={80} height={15} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default NewsSkeleton;
