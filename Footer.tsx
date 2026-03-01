import './Footer.css'

interface FooterProps {
  brandName?: string
}

function Footer({ brandName = 'ProductName' }: FooterProps) {
  return (
    <footer className="store-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>{brandName}</h3>
            <p>Crafting quality products since 2020. Your satisfaction is our priority.</p>
          </div>

          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 {brandName}. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Twitter">
              𝕏
            </a>
            <a href="#" aria-label="Instagram">
              📷
            </a>
            <a href="#" aria-label="Facebook">
              👤
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Default export renders component in isolation for preview
export default function FooterPreview() {
  return <Footer brandName="Premium Widget" />
}

export { Footer }
