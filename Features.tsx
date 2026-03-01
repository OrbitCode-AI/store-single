import './Features.css'

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeaturesProps {
  features?: Feature[]
}

const defaultFeatures: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Experience unparalleled speed with our optimized design that delivers results in milliseconds.',
  },
  {
    icon: '🛡️',
    title: 'Built to Last',
    description:
      'Premium materials and rigorous testing ensure your product withstands years of use.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Award-winning aesthetics that complement any environment and impress everyone.',
  },
  {
    icon: '🔧',
    title: 'Easy Setup',
    description: 'Get started in minutes with our intuitive setup process. No tools required.',
  },
  {
    icon: '📱',
    title: 'Smart Integration',
    description:
      'Seamlessly connects with your favorite devices and apps for a unified experience.',
  },
  {
    icon: '💬',
    title: '24/7 Support',
    description: 'Our dedicated team is always ready to help you get the most from your product.',
  },
]

function Features({ features = defaultFeatures }: FeaturesProps) {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Why Choose Us</h2>
        <p className="section-subtitle">
          Discover what makes our product stand out from the competition
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function FeaturesPreview() {
  return <Features />
}

export { Features }
