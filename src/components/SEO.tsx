import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  schema?: Record<string, unknown>;
  robots?: string;
}

export const SEO = ({ title, description, canonical, schema, robots }: SEOProps) => {
  const defaultTitle = "Jaipur Hospital | Best Multispeciality Hospital in Jaipur";
  const defaultDescription = "Jaipur Hospital — best multispeciality hospital in Jaipur since 1998. 50+ specialists, 24/7 emergency, ICU, NICU, cashless treatment under Ayushman Bharat, CGHS and ECHS.";
  const baseUrl = "https://jaipurhospital.co.in";
  
  const currentUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Jaipur Hospital",
    "image": `${baseUrl}/Gallery/4.jpg`,
    "url": baseUrl,
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhawani Singh Marg, Near Nehru Sahkar Bhawan, Lal Kothi",
      "addressLocality": "Jaipur",
      "postalCode": "302015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8923,
      "longitude": 75.7952
    }
  };

  const finalTitle = title
    ? (title.includes("Jaipur Hospital") ? title : `${title} | Jaipur Hospital`)
    : defaultTitle;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content={robots || "index, follow"} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${baseUrl}/Gallery/4.jpg`} />
      <meta property="og:image:alt" content="Jaipur Hospital building and expert medical care" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${baseUrl}/Gallery/4.jpg`} />
      <meta name="twitter:image:alt" content="Jaipur Hospital building and expert medical care" />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};
