import { Helmet } from "react-helmet-async";

const SITE_URL = "https://botanicaliving.xyz";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO = ({ title, description, path = "/", keywords, type = "website", jsonLd }: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLdArray.map((item, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(item)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
