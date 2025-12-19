import React from 'react';
import { Helmet } from 'react-helmet';


const CommonSEO = ({
  title = 'Turnkey Construction in Chennai | Builders & Contractors Chennai',
  description = 'Professional construction company in Chennai,offers home and building construction,villas,apartment,interior design in Chennai,renovation in Chennai.Trusted builder',
  keywords = 'turnkey construction in Chennai, building contractors in Chennai, builders near me, home construction, building construction, builders in Chennai, 2 BHK, 3 BHK, interior design in Chennai, and renovation services in Chennai, luxury apartments in Chennai, villas in Chennai, building construction cost in Chennai, gated community in Chennai, apartment developments',
  canonical,
  type = 'website',
  children,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Canonical link */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Additional meta tags */}
      {children}
    </Helmet>
  );
};

export default CommonSEO;