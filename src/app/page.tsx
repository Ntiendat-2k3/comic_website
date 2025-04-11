import LayoutMain from "./layouts/LayoutMain"
import OTruyenService from "./services/otruyen.service"
import SEOMetadata from "./components/home/SEOMetadata"
import HomeClient from "./components/home/HomeClient"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const { data } = await OTruyenService.getHomeData(1, 15)

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
  )
}