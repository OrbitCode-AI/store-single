import './Purchase.css';
import { useVar } from 'orbitcode';

interface PurchaseOption {
  id: string;
  name: string;
  price: number;
  description: string;
  popular?: boolean;
}

interface PurchaseProps {
  options?: PurchaseOption[];
}

const defaultOptions: PurchaseOption[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 79,
    description: 'Perfect for getting started'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 99,
    description: 'Most popular choice',
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 149,
    description: 'Everything included'
  }
];

function Purchase({ options = defaultOptions }: PurchaseProps) {
  const [selectedOption, setSelectedOption] = useVar<string>('selectedPurchaseOption', 'pro');
  const [quantity, setQuantity] = useVar<number>('purchaseQuantity', 1);
  const [cartCount, setCartCount] = useVar<number>('cartCount', 0);

  const selected = options.find(opt => opt.id === selectedOption) || options[0];

  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
  };

  return (
    <section id="purchase" className="purchase-section">
      <div className="container">
        <h2>Choose Your Package</h2>

        <div className="purchase-options">
          {options.map((option) => (
            <div
              key={option.id}
              className={`purchase-option ${selectedOption === option.id ? 'selected' : ''} ${option.popular ? 'popular' : ''}`}
              onClick={() => setSelectedOption(option.id)}
            >
              {option.popular && <div className="popular-tag">Most Popular</div>}
              <h3>{option.name}</h3>
              <div className="option-price">${option.price}</div>
              <p>{option.description}</p>
            </div>
          ))}
        </div>

        <div className="purchase-controls">
          <div className="quantity-selector">
            <span className="quantity-label">Quantity:</span>
            <button
              className="qty-btn"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span className="quantity-value">{quantity}</span>
            <button
              className="qty-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <div className="purchase-total">
            <span className="total-label">Total:</span>
            <span className="total-amount">${selected.price * quantity}</span>
          </div>
        </div>

        <button className="checkout-btn" onClick={handleAddToCart}>
          Add to Cart — ${selected.price * quantity}
        </button>

        <div className="purchase-guarantees">
          <div className="guarantee">
            <span className="icon">🔒</span>
            <span>Secure Checkout</span>
          </div>
          <div className="guarantee">
            <span className="icon">📦</span>
            <span>Free Shipping</span>
          </div>
          <div className="guarantee">
            <span className="icon">↩️</span>
            <span>30-Day Returns</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function PurchasePreview() {
  return <Purchase />;
}

export { Purchase };
