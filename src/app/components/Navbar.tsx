"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { Category, Comic } from "../types";
import OTruyenService from "../services/otruyen.service";
import Search from "./Search";

const Dropdown = dynamic(() => import("./Dropdown"), {
  loading: () => <div className="w-40 h-6 bg-gray-100 animate-pulse" />,
});

interface NavbarProps {
  categories: Category[];
}

const Navbar = ({ categories }: NavbarProps) => {
  const [searchResults, setSearchResults] = useState<Comic[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = useCallback(async (keyword: string) => {
    if (keyword.trim().length === 0) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await OTruyenService.searchComics(keyword);
      setSearchResults(response.data.data.items);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <nav className="w-full bg-primary text-white shadow-md">
      <div className="container px-4 py-2 flex items-center justify-between">
        {/* Phần logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="h-15 w-16 object-contain"
            />
          </Link>
          <span className="font-bold text-xl">TruyenHay</span>
        </div>

        {/* Phần chức năng */}
        <div className="flex items-center gap-6">
          {/* Component tìm kiếm */}
          <Search
            searchResults={searchResults}
            isLoading={isLoading}
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
            onSearch={handleSearch}
          />

          <Dropdown categories={categories} />

          {/* Các nút đăng nhập/đăng ký */}
          <Link
            href="/dang-nhap"
            className="hover:opacity-80 transition-opacity px-3 py-2 rounded hover:bg-white/10"
          >
            Đăng nhập
          </Link>

          <Link
            href="/dang-ky"
            className="bg-white text-primary px-4 py-2 rounded-md hover:bg-primary-light hover:text-white transition-colors"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;