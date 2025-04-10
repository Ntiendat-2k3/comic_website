interface SEOComicProps {
  seoData: {
    titleHead: string;
    descriptionHead: string;
    og_type: string;
    og_image: string[];
  };
  cdnUrl: string;
}

 const SEOComic = ({ seoData, cdnUrl }: SEOComicProps) => (
  <div className="hidden">
    <meta property="og:title" content={seoData.titleHead} />
    <meta property="og:description" content={seoData.descriptionHead} />
    <meta property="og:type" content={seoData.og_type} />
    {seoData.og_image.map((img, index) => (
      <meta
        key={`og-image-${index}`}
        property="og:image"
        content={`${cdnUrl}/uploads/comics/${img}`}
      />
    ))}
  </div>
);

export default SEOComic;
