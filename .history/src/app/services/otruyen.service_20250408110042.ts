import apiClient from "../lib/api-client";

type ComicListType =
  | "truyen-moi"
  | "sap-ra-mat"
  | "dang-phat-hanh"
  | "hoan-thanh";

export interface Comic {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  chapters: Chapter[];
  // Thêm các trường khác theo API response
}

export interface Chapter {
  id: string;
  name: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  comics: Comic[];
}

const OTruyenService = {
  // Trang chủ
  getHomeData: async (): Promise<{ featured: Comic[]; latest: Comic[] }> => {
    return apiClient.get("/home");
  },

  // Danh sách truyện theo type
  getComicList: async (
    type: ComicListType = "truyen-moi",
    page: number = 1
  ): Promise<{ comics: Comic[]; totalPages: number }> => {
    return apiClient.get(`/danh-sach/${type}?page=${page}`);
  },

  // Thể loại truyện
  getCategories: async (): Promise<Category[]> => {
    return apiClient.get("/the-loai");
  },

  // Truyện theo thể loại
  getComicsByCategory: async (
    slug: string,
    page: number = 1
  ): Promise<Category> => {
    return apiClient.get(`/the-loai/${slug}?page=${page}`);
  },

  // Chi tiết truyện
  getComicDetail: async (slug: string): Promise<Comic> => {
    return apiClient.get(`/truyen-tranh/${slug}`);
  },

  // Tìm kiếm
  searchComics: async (keyword: string): Promise<Comic[]> => {
    return apiClient.get(`/tim-kiem?keyword=${encodeURIComponent(keyword)}`);
  },
};

export default OTruyenService;
