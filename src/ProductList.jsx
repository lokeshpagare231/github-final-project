import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, selectCartCount, selectCartItems } from './CartSlice'

const productsByCategory = [
  {
    name: 'Air Purifying Plants',
    items: [
      { id: 'snake-plant', name: 'Snake Plant', price: 18.99, thumbnail: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=300&q=80' },
      { id: 'areca-palm', name: 'Areca Palm', price: 24.5, thumbnail: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=300&q=80' },
      { id: 'peace-lily', name: 'Peace Lily', price: 21.0, thumbnail: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=300&q=80' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 19.75, thumbnail: 'https://images.unsplash.com/photo-1593482892290-f54927ae8f63?auto=format&fit=crop&w=300&q=80' },
      { id: 'spider-plant', name: 'Spider Plant', price: 14.99, thumbnail: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=300&q=80' },
      { id: 'english-ivy', name: 'English Ivy', price: 16.5, thumbnail: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80' }
    ]
  },
  {
    name: 'Flowering Plants',
    items: [
      { id: 'orchid', name: 'Orchid', price: 27.99, thumbnail: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=300&q=80' },
      { id: 'anthurium', name: 'Anthurium', price: 23.49, thumbnail: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=300&q=80' },
      { id: 'begonia', name: 'Begonia', price: 17.95, thumbnail: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=300&q=80' },
      { id: 'african-violet', name: 'African Violet', price: 15.5, thumbnail: 'https://images.unsplash.com/photo-1438109491414-7198515b166b?auto=format&fit=crop&w=300&q=80' },
      { id: 'jasmine', name: 'Jasmine', price: 20.0, thumbnail: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80' },
      { id: 'geranium', name: 'Geranium', price: 13.99, thumbnail: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=300&q=80' }
    ]
  },
  {
    name: 'Low Maintenance Plants',
    items: [
      { id: 'zz-plant', name: 'ZZ Plant', price: 22.0, thumbnail: 'https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=300&q=80' },
      { id: 'pothos', name: 'Golden Pothos', price: 12.99, thumbnail: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=300&q=80' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 11.49, thumbnail: 'https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=300&q=80' },
      { id: 'jade-plant', name: 'Jade Plant', price: 14.25, thumbnail: 'https://images.unsplash.com/photo-1523419409543-a5e549c1f4f9?auto=format&fit=crop&w=300&q=80' },
      { id: 'cast-iron-plant', name: 'Cast Iron Plant', price: 18.75, thumbnail: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=300&q=80' },
      { id: 'haworthia', name: 'Haworthia', price: 10.99, thumbnail: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=300&q=80' }
    ]
  }
]

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <strong>Paradise Nursery</strong>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">🛒 {cartCount}</Link>
      </div>
    </nav>
  )
}

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main className="page">
        <h1>Plant Collection</h1>
        {productsByCategory.map((group) => (
          <section key={group.name}>
            <h2>{group.name}</h2>
            <div className="grid">
              {group.items.map((item) => {
                const isAdded = Boolean(cartItems[item.id])
                return (
                  <article key={item.id} className="card">
                    <img src={item.thumbnail} alt={item.name} className="thumb" />
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <button type="button" disabled={isAdded} onClick={() => dispatch(addToCart(item.id))}>
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export default ProductList
