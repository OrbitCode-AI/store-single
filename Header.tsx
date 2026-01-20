import './Header.css';
import { useVar, useSet } from 'orbitcode';

interface HeaderProps {
  brandName?: string;
}

function Header({ brandName = 'ProductName' }: HeaderProps) {
  const [cartCount] = useVar<number>('cartCount', 0);
  const [menuOpen, setMenuOpen] = useVar<boolean>('menuOpen', false);

  return (
    <header className="store-header">
      <div className="header-container">
        <a href="#" className="brand">{brandName}</a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#features">Features</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#purchase">Buy Now</a>
        </nav>

        <div className="header-actions">
          <button className="cart-btn">
            🛒 <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

// Default export renders component in isolation for preview
export default function HeaderPreview() {
  return (
    <div className="preview-container">
      <Header brandName="Premium Widget" />
    </div>
  );
}

export { Header };
