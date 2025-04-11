import { Comic, ComicDetailParams, ComicSEO, Comic as ComicType } from "./comic";
import { BaseResponse, Category, HomeParams, Pagination } from "./common";

export interface HomeResponse extends BaseResponse {
  status: string
  message: string
  items: Comic[]
  data: {
    seoOnPage: ComicSEO;
    items: ComicType[];
    params: HomeParams;
  };
}

export interface CategoryListResponse extends BaseResponse {
  data: {
    items: Category[];
    params: {
      type_slug: string;
      filterCategory: string[];
      sortField: string;
      sortType: string;
      pagination: Pagination;
    };
    type_list: string;
    APP_DOMAIN_FRONTEND: string;
    APP_DOMAIN_CDN_IMAGE: string;
  };
}

export interface SearchResponse extends BaseResponse {
  data: {
    seoOnPage: ComicSEO & { og_url: string };
    breadCrumb: Array<{
      name: string;
      isCurrent: boolean;
      position: number;
    }>;
    titlePage: string;
    items: ComicType[];
  };
}

export interface ComicDetailResponse extends BaseResponse {
  data: {
    seoOnPage: ComicSEO;
    breadCrumb: Array<{
      name: string;
      slug?: string;
      position: number;
      isCurrent?: boolean;
    }>;
    params: ComicDetailParams;
    item: ComicType;
    APP_DOMAIN_CDN_IMAGE: string;
  };
}

export interface ApiListResponse extends BaseResponse {
  data: {
    items: ComicType[];
    params: {
      type_slug: string;
      filterCategory: string[];
      sortField: string;
      sortType: string;
      pagination: Pagination;
    };
    type_list: string;
    APP_DOMAIN_FRONTEND: string;
    APP_DOMAIN_CDN_IMAGE: string;
  };
}