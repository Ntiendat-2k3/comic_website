"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface DropdownProps {
  categories: Category[];
}

const Dropdown: React.FC<DropdownProps> = ({ categories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="hover:opacity-80"
      >
        Thể loại
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 bg-white text-black w-40 shadow-md mt-2 z-10">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/the-loai/${cat.slug}`}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
