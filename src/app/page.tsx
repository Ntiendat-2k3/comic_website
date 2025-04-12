import LayoutMain from "./layouts/LayoutMain";
import OTruyenService from "./services/otruyen.service";
import SEOMetadata from "./components/home/SEOMetadata";
import HomeClient from "./components/home/HomeClient";
import { unstable_cache } from "next/cache";

export const dynamic = "force-dynamic";

// 1. Cache Config cho trang Home
const HOME_CACHE_KEY = "home-page";
const CACHE_TTL = 10 * 60; // 10 phút

// 2. Tạo cached data fetcher
const getCachedHomeData = unstable_cache(
  async () => {
    const { data } = await OTruyenService.getHomeData(1, 15);
    return data;
  },
  [HOME_CACHE_KEY],
  {
    revalidate: CACHE_TTL,
    tags: ["home-page"], // Cho phép revalidate thủ công
  }
);

// 3. Cấu hình ISR
export const revalidate = CACHE_TTL; // Revalidate sau 10 phút

export default async function Home() {
  const data = await getCachedHomeData();

  return (
    <LayoutMain>
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-primary-dark p-3 mb-8 rounded-lg shadow-lg border-animation">
          <h1 className="text-xl font-semibold text-white">
            {data.seoOnPage.titleHead}
          </h1>
        </div>

        <HomeClient data={data} />

        {/* SEO Metadata*/}
        <SEOMetadata seoData={data.seoOnPage} />
      </div>
    </LayoutMain>
  );
}
