"use client";

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  categories?: string[]; // Optional prop
  onCategorySelect: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories = [], onCategorySelect }) => {
  const handleCategoryClick = useCallback(
    (category: string) => () => onCategorySelect(category),
    [onCategorySelect]
  );

  return (
    <div className="p-4">
      <h3 className="font-semibold mb-2">Categories</h3>
      <ul className="space-y-2">
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category}>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={handleCategoryClick(category)}
              >
                {category}
              </Button>
            </li>
          ))
        ) : (
          <li>
            <p className="text-gray-500">No categories available</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
