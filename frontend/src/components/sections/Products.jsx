import Container from '../layout/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import ProductSpecCard from '../ui/ProductSpecCard.jsx'
import ScrollReveal from '../ui/ScrollReveal.jsx'
import { categories } from '../../data/products.js'

export default function Products() {
  return (
    <section id="products" className="bg-white dark:bg-neutral-950 py-24 md:py-32">
      <Container>
        <Eyebrow code="H–05" label="Catalogue" />
        <ScrollReveal className="mt-8">
          <SectionTitle kicker="Four categories. Hundreds of SKUs. One specification standard.">
            What we make,
            <br />
            <span className="text-crimson-deep">to the millimetre.</span>
          </SectionTitle>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <ProductSpecCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
