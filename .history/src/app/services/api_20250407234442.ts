interface Category {
  id: number;
  name: string;
  slug: string;
}

export const apiService = {
  getCategories: async (): Promise<Category[]> => {
    try {
      const response = await axiosClient.get("/api/categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  },

  search: async (query: string) => {
    try {
      const response = await axiosClient.get("/api/search", {
        params: { q: query },
      });
      return response.data;
    } catch (error) {
      console.error("Search error:", error);
      return [];
    }
  },
};
