import { AxiosResponse } from "axios";
import apiClient from "../lib/api-client";
import {
  CategoryListResponse,
  ComicDetailResponse,
  HomeResponse,
  SearchResponse,
} from "../types/response";
import { Category } from "../types/common";
import { comicCache, homeCache } from "../utils/cache/cache";

// type ComicListType =
//   | "truyen-moi"
//   | "sap-ra-mat"
//   | "dang-phat-hanh"
//   | "hoan-thanh";


const OTruyenService = {
  // Trang chủ
  getHomeData: async (page: number = 1, limit: number = 15): Promise<HomeResponse> => {
    const cacheKey = `home-${page}-${limit}`
    
    // Kiểm tra cache trước
    const cachedData = homeCache.get(cacheKey)
    if (cachedData) return cachedData

    // Fetch dữ liệu mới
    const response = await apiClient.get<HomeResponse>(`/home?page=${page}&limit=${limit}`)
    
    // Lưu vào cache nếu thành công
    if (response.data.data.seoOnPage) {
      homeCache.set(cacheKey, response.data)
    }
    
    return response.data
  },

  // Danh sách truyện theo type
  // getComicList: async (
  //   type: ComicListType = "truyen-moi",
  //   page: number = 1
  // ): Promise<ApiListResponse> => {
  //   return apiClient.get<ApiListResponse>(`/danh-sach/${type}?page=${page}`);
  // },

  // Thể loại truyện
  getCategories: async (): Promise<Category[]> => {
    const response = await apiClient.get<CategoryListResponse>("/the-loai");
    return response.data.data.items;
  },

  // // Truyện theo thể loại
  // getComicsByCategory: async (
  //   slug: string,
  //   page: number = 1
  // ): Promise<ApiListResponse> => {
  //   return apiClient.get<ApiListResponse>(`/the-loai/${slug}?page=${page}`);
  // },

  // // Chi tiết truyện
  getComicDetail: async (slug: string): Promise<ComicDetailResponse> => {
    try {
      const cachedData = comicCache.get(slug);
      if (cachedData) return cachedData;

      // Fetch dữ liệu mới nếu không có trong cache
      const response = await apiClient.get<ComicDetailResponse>(
        `/truyen-tranh/${slug}`
      );

      // Chỉ cache khi response thành công
      if (response.status === 200 && response.data.data.item) {
        comicCache.set(slug, response.data);
      }

      return response.data;
    } catch (error) {
      comicCache.delete(slug);
      throw error;
    }
  },

  // Tìm kiếm
  searchComics: async (
    keyword: string
  ): Promise<AxiosResponse<SearchResponse>> => {
    return apiClient.get<SearchResponse>(
      `/tim-kiem?keyword=${encodeURIComponent(keyword)}&limit=10`
    );
  },
};

export default OTruyenService;
