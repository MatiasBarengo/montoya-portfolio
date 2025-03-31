"use client";

import React from "react";

type CategoryType = "all" | "photo" | "video" | "design";

type PortfolioFiltersProps = {
  activeFilter: CategoryType;
  setActiveFilter: (filter: CategoryType) => void;
};

const PortfolioFilters = ({ activeFilter, setActiveFilter }: PortfolioFiltersProps) => {
  const filters: { label: string; value: CategoryType }[] = [
    { label: "All", value: "all" },
    { label: "Design", value: "design" },
    { label: "Photo", value: "photo" },
    { label: "Video", value: "video" },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setActiveFilter(filter.value)}
          className={`px-5 py-2 transition-all duration-300 ${
            activeFilter === filter.value
              ? "border border-white text-white"
              : "text-muted hover:text-white"
          }`}
          aria-label={`Filter by ${filter.label}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilters;
