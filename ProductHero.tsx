import './ProductHero.css'
import { useVar } from 'orbitcode'

interface ProductHeroProps {
  productName?: string
  tagline?: string
  price?: number
  originalPrice?: number
}

function ProductHero({
  productName = 'Premium Widget Pro',
  tagline = "The last widget you'll ever need. Crafted with precision, designed for excellence.",
  price = 99,
  originalPrice = 149,
}: ProductHeroProps) {
  const [cartCount, setCartCount] = useVar<number>('cartCount', 0)

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <section className="product-hero">
      <div className="hero-container">
        <div className="hero-image">
          <div className="product-showcase">
            <div className="product-3d">
              <div className="product-box">
                <span>PRO</span>
              </div>
            </div>
            <div className="badge">Best Seller</div>
          </div>
        </div>

        <div className="hero-content">
          <h1>{productName}</h1>
          <p className="tagline">{tagline}</p>

          <div className="price-section">
            <span className="current-price">${price}</span>
            {originalPrice > price && (
              <>
                <span className="original-price">${originalPrice}</span>
                <span className="discount">
                  {Math.round((1 - price / originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          <div className="hero-features">
            <div className="feature">✓ Free Shipping</div>
            <div className="feature">✓ 30-Day Returns</div>
            <div className="feature">✓ 2-Year Warranty</div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function ProductHeroPreview() {
  return <ProductHero />
}

export { ProductHero }
