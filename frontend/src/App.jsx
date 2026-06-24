import SEO from './components/seo/SEO.jsx'
import JsonLd from './components/seo/JsonLd.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Moat from './components/sections/Moat.jsx'
import Financials from './components/sections/Financials.jsx'
import Vision from './components/sections/Vision.jsx'
import Products from './components/sections/Products.jsx'
import InvestorConnect from './components/sections/InvestorConnect.jsx'
import ShareholderValue from './components/sections/ShareholderValue.jsx'

export default function App() {
  return (
    <>
      <SEO />
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Moat />
        <Financials />
        <ShareholderValue />
        <Vision />
        <Products />
        <InvestorConnect />
      </main>
      <Footer />
    </>
  )
}
