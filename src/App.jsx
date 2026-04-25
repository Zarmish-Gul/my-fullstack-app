import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProjectDetail';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import Login from './pages/Login';

// --- NAVBAR COMPONENT ---
const Navbar = ({ cartCount, role, setRole }) => (
  <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 bg-stone-900 border-b border-stone-800 sticky top-0 z-50">
    <Link to="/" className="text-2xl font-serif font-bold text-stone-300 tracking-tight mb-4 md:mb-0 hover:text-white transition-colors">
      ARTISAN.
    </Link>
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-stone-400 font-medium text-xs uppercase tracking-widest">
      <Link to="/" className="hover:text-stone-200 transition-colors">Home</Link>
      <Link to="/shop" className="hover:text-stone-200 transition-colors">Shop</Link>
      <Link to="/blog" className="hover:text-stone-200 transition-colors">Journal</Link>
      {role === 'admin' && (
        <Link to="/admin" className="text-amber-500 hover:text-amber-200 transition-colors font-bold">Dashboard</Link>
      )}
      <button 
        onClick={() => { setRole(null); localStorage.removeItem('artisan_role'); }} 
        className="text-red-400 hover:text-red-300 transition-colors uppercase text-[10px] tracking-widest font-bold"
      >
        Logout
      </button>
    </div>
    <Link to="/cart" className="text-stone-300 font-medium text-sm mt-4 md:mt-0 hover:text-white flex items-center gap-2">
      <span className="uppercase text-[10px] tracking-widest">Cart</span>
      <span className="bg-stone-800 px-2 py-0.5 rounded-full text-xs">({cartCount})</span>
    </Link>
  </nav>
);

const Home = () => (
  <div className="animate-fadeIn">
    <section className="relative min-h-[80vh] bg-stone-100 flex flex-col lg:flex-row items-center px-6 md:px-10 py-12 lg:py-0">
      <div className="w-full lg:w-1/2 z-10 mb-10 lg:mb-0">
        <span className="uppercase tracking-[0.3em] text-[10px] text-stone-500 mb-4 block font-semibold">Handmade with Heritage</span>
        <h1 className="text-4xl md:text-7xl font-serif text-stone-900 mb-6 md:mb-8 leading-tight">
          Timeless Craft <br className="hidden md:block" /> for Modern Living.
        </h1>
        <p className="text-stone-600 mb-10 text-lg leading-relaxed max-w-md">
          A curated collection of handmade goods, celebrating the intersection of traditional skill and contemporary design.
        </p>
        <Link to="/shop" className="bg-stone-900 text-white px-10 py-4 rounded-sm hover:bg-stone-800 transition-all uppercase text-xs tracking-widest font-bold">
          Explore Collection
        </Link>
      </div>
      
      <div className="w-full lg:w-1/2 h-[300px] lg:h-[70vh] bg-stone-200 rounded-sm overflow-hidden relative">
        <img 
          src="/artworking.jpg" 
          alt="Artisan at work" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    </section>
    {/* --- SHOP BY CATEGORY --- */}
<section className="py-20 px-6 md:px-10 bg-white">
  <div className="text-center mb-12">
    <h2 className="font-serif text-3xl text-stone-900 mb-2">Shop By Category</h2>
    <p className="text-stone-500 text-sm italic">Pick your desired craft & start exploring</p>
  </div>

  {/* Responsive Grid: 2 columns on mobile, 5 on desktop */}
  <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
    {[
      { name: 'Pottery', count: 12, color: 'bg-[#f5f0eb]', img: 'cb.jpg' },
      { name: 'Textiles', count: 8, color: 'bg-[#edf1f2]', img: 'textile.jpg' },
      { name: 'Woodwork', count: 15, color: 'bg-[#f2efed]', img: 'wood.jpg' },
      { name: 'Glass Art', count: 5, color: 'bg-[#f0f2f5]', img: 'glassart.jpg' },
      { name: 'Jewelry', count: 20, color: 'bg-[#f7f3f0]', img: 'finejewel.jpg' },
    ].map((cat, i) => (
      <div key={i} className={`${cat.color} p-6 rounded-sm text-center group cursor-pointer hover:shadow-md transition-all`}>
        <div className="aspect-square mb-4 overflow-hidden rounded-sm">
          <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h3 className="font-serif text-stone-800 text-lg">{cat.name}</h3>
        <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">({cat.count}) Items</p>
      </div>
    ))}
  </div>
</section>


{/* --- PROMO BANNERS SECTION --- */}
{/* --- COMPACT PROMO BANNERS SECTION --- */}
<section className="py-8 px-6 md:px-10 bg-stone-50">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    {/* Large Left Banner - Compact Version */}
    <div className="relative bg-[#F1F3E0] border border-stone-200 min-h-[350px] md:min-h-[400px] overflow-hidden group grid grid-cols-1 md:grid-cols-2">
      
      {/* Column 1: Text Content */}
      <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12 order-2 md:order-1">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-900 mb-3 leading-tight">
          40% Off <br /> 
          Knitted <br /> 
          Cord Coasters
        </h3>
        
        <p className="text-stone-500 text-[10px] md:text-xs mb-6 font-medium uppercase tracking-[0.2em] leading-relaxed max-w-[200px]">
          10% less than any <br /> 
          nearest stores.
        </p>
        
        <button className="border-b-2 border-stone-900 text-stone-900 font-bold py-1 hover:text-stone-600 transition-all uppercase text-[10px] tracking-[0.3em] w-fit">
          Shop Now
        </button>
      </div>

      {/* Column 2: Image Container - Full Bleed */}
      <div className="relative h-[250px] md:h-full order-1 md:order-2 bg-stone-50 overflow-hidden">
        <img 
          src="kcc.jpg" 
          className="w-full h-full object-cover object-center " 
          alt="Artisan Coasters" 
        />
      </div>
    </div>

    {/* Right Column Stack - Compact */}
    <div className="flex flex-col gap-6">
      
      {/* Top Small Banner */}
      <div className="relative bg-[#f9f7f5] border border-stone-200 overflow-hidden min-h-[170px] md:min-h-[212px] flex items-center">
        <div className="relative z-10 p-6 w-full">
          <h3 className="text-lg md:text-xl font-serif text-stone-900 mb-1 max-w-[180px]">
            30% Off Special <br />Stones Lockets
          </h3>
          <p className="text-stone-500 text-[10px] mb-3">Modern minimalism.</p>
          <button className="bg-stone-900 text-white px-4 py-1.5 text-[9px] uppercase tracking-widest font-bold hover:bg-stone-800">
            Shop Now
          </button>
        </div>
        <img 
          src="ss.jpg" 
          className="absolute right-0 top-0 w-1/2 h-full object-cover object-center" 
          alt="Stones Lockkets" 
        />
      </div>

      {/* Bottom Small Banner */}
      <div className="relative bg-[#f2f4f3] border border-stone-200 overflow-hidden min-h-[170px] md:min-h-[212px] mt-8 flex items-center">
        <div className="relative z-10 p-6 w-full">
          <h3 className="text-lg md:text-xl font-serif text-stone-900 mb-3 max-w-[180px]">
            20% Off Natural <br /> Wall Decore
          </h3>
          <button className="bg-white border border-stone-300 text-stone-900 px-4 py-1.5 text-[9px] uppercase tracking-widest font-bold hover:bg-stone-50">
            Discover
          </button>
        </div>
        <img 
          src="walld.jpg" 
          className="absolute right-0 top-0 w-1/2 h-full object-cover object-center" 
          alt="wall decore" 
        />
      </div>
      
    </div>
  </div>
</section>

{/* --- LATEST COLLECTION SECTION --- */}
<section className="py-16 px-6 md:px-10 bg-white">
  <div className="text-center mb-12">
    <h2 className="font-serif text-3xl text-stone-900 mb-2">Latest Collection</h2>
    <p className="text-stone-500 text-xs uppercase tracking-[0.2em]">Pick your desired & start purchasing</p>
  </div>

  {/* Responsive Grid: 2 columns on mobile, 3 on tablet, 5 on desktop */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
    {[
      { name: 'Hand-Knitted Sweater', price: 56.12, oldPrice: 61.00, img: 'sw.jpg', discount: '-8%' },
      { name: 'Wall Decore', price: 47.00, oldPrice: 52.00, img: 'taoc.jpg', discount: '-€5.00' },
      { name: 'Wooden Box', price: 74.00, oldPrice: null, img: 'wbox.jpg', discount: null },
      { name: 'Vintage Stone Vase', price: 63.36, oldPrice: 66.00, img: 'va.jpg', discount: '-4%' },
      { name: 'Silver Earings', price: 45.00, oldPrice: null, img: 'sfe.jpg', discount: null },
    ].map((product, i) => (
      <div key={i} className="group flex flex-col h-full">
        {/* Product Image Wrapper */}
        <div className="relative aspect-[4/5] bg-stone-50 overflow-hidden mb-4 border border-stone-100">
          {product.discount && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 z-10">
              {product.discount}
            </span>
          )}
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col flex-grow items-center text-center">
          <h3 className="text-stone-800 text-sm font-medium mb-1 line-clamp-1 group-hover:text-stone-600 transition-colors">
            {product.name}
          </h3>
          
          {/* Star Rating (Simple) */}
          <div className="flex text-amber-400 text-[10px] mb-2">
            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
          </div>

          {/* Pricing */}
          <div className="flex gap-2 items-baseline mb-4">
            <span className="text-stone-900 font-bold text-sm">€{product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-stone-400 text-xs line-through italic">€{product.oldPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Action Button - Responsive and Fixed at bottom */}
          <button className="w-full border border-stone-900 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-900 hover:text-white transition-all mt-auto">
            {product.oldPrice ? 'Select Option' : 'Add To Cart'}
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
  </div>
);
 
// --- MAIN APP ---

export default function App() {
  const fetchData = async () => {
    // ✅ Use relative path, NOT http://localhost:3000/api/items
    const res = await fetch('/api/items');
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
  // ✅ Use relative path
  fetch('/api/tasks')
    .then(res => res.json())
    .then(data => setTasks(data));
}, []);
  const [role, setRole] = useState(() => localStorage.getItem('artisan_role'));
  const [products, setProducts] = useState(() => {
  const saved = localStorage.getItem('artisan_products');
  return saved ? JSON.parse(saved) : [ /* Your default products here */ ];
});
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState(() => {
  const saved = localStorage.getItem('artisan_orders');
  return saved ? JSON.parse(saved) : [];
});
  const [serverStatus, setServerStatus] = useState("Connecting...");

  // Logic to save role
useEffect(() => {
  // Save Role
  if (role) {
    localStorage.setItem('artisan_role', role);
  } else {
    localStorage.removeItem('artisan_role');
  }

  // Save Products (Whenever you add/delete in Admin)
  localStorage.setItem('artisan_products', JSON.stringify(products));

  // Save Orders (Whenever a new order is placed)
  localStorage.setItem('artisan_orders', JSON.stringify(orders));

}, [role, products, orders]); // This runs whenever any of these 3 things change

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCartItems(prev => prev.filter(item => item.id !== id));
  const updateQuantity = (id, newQty) => setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, newQty) } : item));
  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-stone-900">
        
        {/* IF NOT LOGGED IN: ONLY SHOW LOGIN PAGE */}
        {!role ? (
          <Routes>
            <Route path="*" element={<Login setRole={setRole} />} />
          </Routes>
        ) : (
          /* IF LOGGED IN: SHOW THE WHOLE SITE */
          <>
            <Navbar cartCount={cartItems.length} role={role} setRole={setRole} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
  path="/shop" 
  element={<Shop products={products} addToCart={addToCart} />} 
/>
              <Route path="/cart" element={
                <Cart 
                  cartItems={cartItems} 
                  clearCart={clearCart} 
                  removeFromCart={removeFromCart} 
                  updateQuantity={updateQuantity} 
                />
              } />
              <Route path="/admin" element={
                role === 'admin' ? (
                  <Admin 
                    orders={orders} 
                    serverStatus={serverStatus} 
                    products={products} 
                    setProducts={setProducts} 
                  />
                ) : (
                  <Navigate to="/" />
                )
              } />
              <Route path="/blog" element={<Journal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
              <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} onSaveOrder={(o) => setOrders([o, ...orders])} />} />
            </Routes>
            <footer className="bg-stone-900 py-10 text-center text-stone-400 text-[10px] uppercase tracking-widest">
              © 2026 Artisan Handmade Products | Rawalpindi Est.
            </footer>
          </>
        )}
      </div>
    </Router>
  );
}