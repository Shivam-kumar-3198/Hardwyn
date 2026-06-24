import { Helmet } from 'react-helmet-async'
import { company } from '../../data/company.js'

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName,
    url: company.url,
    description: company.positioning,
    tickerSymbol: company.ticker,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'investor relations',
        email: company.irEmail,
        areaServed: 'IN'
      }
    ]
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
