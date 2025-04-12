import { ComicDetailResponse, HomeResponse } from "@/app/types/response";
import { LRUCache } from "lru-cache";

export const comicCache = new LRUCache<string, ComicDetailResponse>({
  max: 100,
  ttl: 1000 * 60 * 60, // 1 hour
  allowStale: false,
  updateAgeOnGet: true,
});

export const homeCache = new LRUCache<string, HomeResponse>({
  max: 5, // Giữ 5 phiên bản gần nhất
  ttl: 1000 * 60 * 5, // 5 phút
})