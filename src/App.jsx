import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import ProductList from './ProductList'
import CartItem from './CartItem'
import './App.css'

function Home() {
  return (
    <section className="landing-page">
      <div className="landing-card">
        <h1>Paradise Nursery</h1>
        <p>Fresh Plants for Every Home</p>
        <Link to="/plants" className="btn">Get Started</Link>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
