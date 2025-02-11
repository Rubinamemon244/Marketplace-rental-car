import React from "react";

interface Category {
  name: string;
  slug: { current: string };
}

interface SidebarCategoryListProps {
  categories?: Category[]; // Made optional to prevent errors
  setSelectedCategory: (category: string) => void;
}

const SidebarCategoryList: React.FC<SidebarCategoryListProps> = ({ categories = [], setSelectedCategory }) => {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800">Filter by Category</h2>
      <ul className="mt-4 space-y-2">
        {/* 'All Categories' Option */}
        <li
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setSelectedCategory("")}
          aria-selected={false}
        >
          All Categories
        </li>

        {/* Dynamic Categories */}
        {categories.map((category) => (
          <li
            key={category.slug?.current || category.name} // Fallback to category name
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setSelectedCategory(category.name)}
            aria-selected={false}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategoryList;
