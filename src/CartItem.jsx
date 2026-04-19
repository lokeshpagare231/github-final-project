import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartCount,
  selectCartItems
} from './CartSlice'

const catalog = {
  'snake-plant': { name: 'Snake Plant', price: 18.99, thumbnail: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=300&q=80' },
  'areca-palm': { name: 'Areca Palm', price: 24.5, thumbnail: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=300&q=80' },
  'peace-lily': { name: 'Peace Lily', price: 21.0, thumbnail: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=300&q=80' },
  'rubber-plant': { name: 'Rubber Plant', price: 19.75, thumbnail: 'https://images.unsplash.com/photo-1593482892290-f54927ae8f63?auto=format&fit=crop&w=300&q=80' },
  'spider-plant': { name: 'Spider Plant', price: 14.99, thumbnail: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=300&q=80' },
  'english-ivy': { name: 'English Ivy', price: 16.5, thumbnail: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80' },
  orchid: { name: 'Orchid', price: 27.99, thumbnail: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=300&q=80' },
  anthurium: { name: 'Anthurium', price: 23.49, thumbnail: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=300&q=80' },
  begonia: { name: 'Begonia', price: 17.95, thumbnail: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=300&q=80' },
  'african-violet': { name: 'African Violet', price: 15.5, thumbnail: 'https://images.unsplash.com/photo-1438109491414-7198515b166b?auto=format&fit=crop&w=300&q=80' },
  jasmine: { name: 'Jasmine', price: 20.0, thumbnail: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80' },
  geranium: { name: 'Geranium', price: 13.99, thumbnail: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=300&q=80' },
  'zz-plant': { name: 'ZZ Plant', price: 22.0, thumbnail: 'https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=300&q=80' },
  pothos: { name: 'Golden Pothos', price: 12.99, thumbnail: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=300&q=80' },
  'aloe-vera': { name: 'Aloe Vera', price: 11.49, thumbnail: 'https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=300&q=80' },
  'jade-plant': { name: 'Jade Plant', price: 14.25, thumbnail: 'https://images.unsplash.com/photo-1523419409543-a5e549c1f4f9?auto=format&fit=crop&w=300&q=80' },
  'cast-iron-plant': { name: 'Cast Iron Plant', price: 18.75, thumbnail: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=300&q=80' },
  haworthia: { name: 'Haworthia', price: 10.99, thumbnail: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=300&q=80' }
}

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

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)

  const rows = Object.entries(cartItems).map(([id, qty]) => {
    const item = catalog[id]
    return { id, ...item, qty, total: item.price * qty }
  })

  const totalAmount = rows.reduce((sum, row) => sum + row.total, 0)

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main className="page">
        <h1>Shopping Cart</h1>

        {rows.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {rows.map((row) => (
              <article key={row.id} className="card" style={{ marginBottom: '12px' }}>
                <img src={row.thumbnail} alt={row.name} className="thumb" />
                <h3>{row.name}</h3>
                <p>Unit Price: ${row.price.toFixed(2)}</p>
                <p>Total: ${row.total.toFixed(2)}</p>
                <button type="button" onClick={() => dispatch(decreaseQuantity(row.id))}>-</button>{' '}
                <strong>{row.qty}</strong>{' '}
                <button type="button" onClick={() => dispatch(increaseQuantity(row.id))}>+</button>{' '}
                <button type="button" onClick={() => dispatch(removeItem(row.id))}>Delete</button>
              </article>
            ))}

            <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>
            <button type="button" onClick={() => window.alert('Coming Soon')}>Checkout</button>{' '}
            <Link to="/plants" className="btn">Continue Shopping</Link>
          </>
        )}
      </main>
    </>
  )
}

export default CartItem
