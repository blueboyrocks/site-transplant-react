import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

const SEO = ({ 
  title = 'LeapGen.AI - AI Solutions for Enterprise',
  description = 'Transform your business with LeapGen.AI\'s comprehensive AI solutions. Boost productivity, reduce errors, and unlock insights with our enterprise-grade platforms.',
  keywords = 'AI solutions, artificial intelligence, enterprise AI, business automation, data analytics, SurroundAI, healthcare AI, finance AI',
  image = '/images/leapgen-og.jpg',
  url = 'https://leapgen.ai',
  type = 'website'
}: SEOProps) => {
  const fullTitle = title.includes('LeapGen.AI') ? title : `${title} | LeapGen.AI`

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="LeapGen.AI" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="LeapGen.AI" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@LeapgenAi" />
      
      {/* Additional SEO tags */}
      <meta name="theme-color" content="#B04C8C" />
      <link rel="canonical" href={url} />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LeapGen.AI",
          "description": "Pioneering Artificial Intelligence Solutions for Tomorrow's Challenges",
          "url": "https://leapgen.ai",
          "logo": "https://leapgen.ai/images/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "contact@leapgen.ai"
          },
          "sameAs": [
            "https://www.linkedin.com/company/leap-gen-solutions/",
            "https://x.com/LeapgenAi",
            "https://www.instagram.com/leapgen_solutions/",
            "https://www.youtube.com/@leapgensolutions"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO