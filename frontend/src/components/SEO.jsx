import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://healthorio.com';
const DEFAULT_IMAGE = `${SITE_URL}/logo4.png`;

const SEO = ({ title, description, canonical, ogImage }) => {
  const fullUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage || DEFAULT_IMAGE} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || DEFAULT_IMAGE} />
    </Helmet>
  );
};

export default SEO;
