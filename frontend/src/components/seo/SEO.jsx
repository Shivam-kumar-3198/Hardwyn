import { Helmet } from 'react-helmet-async'
import { company } from '../../data/company.js'

export default function SEO({
  title = `${company.legalName} | Engineering Excellence in Architectural Hardware`,
  description = `${company.positioning} Pioneering omnichannel D2C distribution and global exports with unyielding engineering precision.`,
  path = '/'
}) {
  const url = `${company.url.replace(/\/$/, '')}${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  )
}
