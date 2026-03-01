import './Reviews.css'

interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  verified: boolean
}

interface ReviewsProps {
  reviews?: Review[]
  averageRating?: number
  totalReviews?: number
}

const defaultReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    text: 'Absolutely love this product! It exceeded all my expectations. The quality is outstanding and it arrived faster than expected.',
    date: '2 days ago',
    verified: true,
  },
  {
    id: '2',
    author: 'James K.',
    rating: 5,
    text: "Best purchase I've made this year. The attention to detail is impressive and customer service was incredibly helpful.",
    date: '1 week ago',
    verified: true,
  },
  {
    id: '3',
    author: 'Emily R.',
    rating: 4,
    text: 'Great product overall. Works exactly as described. Would definitely recommend to friends and family.',
    date: '2 weeks ago',
    verified: true,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} className={star <= rating ? 'filled' : ''}>
          ★
        </span>
      ))}
    </div>
  )
}

function Reviews({
  reviews = defaultReviews,
  averageRating = 4.8,
  totalReviews = 2847,
}: ReviewsProps) {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <h2>Customer Reviews</h2>

        <div className="reviews-summary">
          <div className="rating-display">
            <span className="rating-number">{averageRating}</span>
            <StarRating rating={Math.round(averageRating)} />
            <span className="review-count">Based on {totalReviews.toLocaleString()} reviews</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.author}</span>
                  {review.verified && <span className="verified-badge">✓ Verified Purchase</span>}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <StarRating rating={review.rating} />
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        <button className="load-more-btn">See All Reviews</button>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function ReviewsPreview() {
  return <Reviews />
}

export { Reviews }
