import './App.css'
import Header from './Header'
import ProductHero from './ProductHero'
import Features from './Features'
import Gallery from './Gallery'
import Reviews from './Reviews'
import Purchase from './Purchase'
import Footer from './Footer'

function App() {
  return (
    <div className="store-single">
      <Header />
      <main>
        <ProductHero />
        <Features />
        <Gallery />
        <Reviews />
        <Purchase />
      </main>
      <Footer />
    </div>
  )
}

export default App
