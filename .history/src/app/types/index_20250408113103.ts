// src/types/index.ts
export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Comic {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  name: string;
  slug: string;
}
