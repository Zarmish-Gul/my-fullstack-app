import React, { useState, useEffect } from 'react'; // Added useEffect
import { useParams, Link, useLocation } from 'react-router-dom'; // Added useLocation

const products = [
  { id: 1, name: 'Ceramic Plates', price: 12, category: 'Pottery', img: '/handimadepottery.jpg' },
  { id: 2, name: 'Nordic', price: 18, category: 'Pottery', img: '/Nordic.jpg' },
  { id: 3, name: 'Ceramic Plates', price: 45, category: 'Pottery', img: '/cp.jpg' },
  { id: 4, name: 'Candle Holder', price: 34, category: 'Candle Holder', img: '/sc.jpg' },
  { id: 5, name: 'Knitted Cord', price: 20, category: 'Woven Crochet', img: '/kcc.jpg' },
  { id: 6, name: 'Hanging Wall Woven', price: 50, category: 'Woven', img: '/wwh.jpg' },
  { id: 7, name: 'Clay Wall Decore', price: 12, category: 'Decor', img: '/taoc.jpg' },
  { id: 8, name: 'Hand Painted Vase', price: 18, category: 'Pottery', img: '/hpv.jpg' },
   { id: 9, name: 'Silver Earings', price: 12, category: 'Jewelry', img: '/sfe.jpg' },
  { id: 10, name: 'Glass Art', price: 18, category: 'Glass Art', img: '/glassart.jpg' },
  { id: 11, name: 'Stone Lockets', price: 45, category: 'Jewelry', img: '/ss.jpg' },
  { id: 12, name: 'Wooden Frame', price: 34, category: 'Wood Work', img: '/wcf.jpg' },
];

const ProjectDetail = ({ addToCart }) => {
  const { id } = useParams();
  const { pathname } = useLocation(); // To track page changes
  const [quantity, setQuantity] = useState(1);

  // Scroll to top whenever the product ID changes (important for 'Related Products')
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1); // Reset quantity when moving to a new product
  }, [id]);

  const product = products.find((p) => p.id === parseInt(id));

  const related = products
    .filter((p) => p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-20 text-center font-serif">
        <h2 className="text-2xl mb-4">Product not found.</h2>
        <Link to="/shop" className="text-xs uppercase tracking-widest underline">Return to Catalog</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: quantity });
  };

  return (
    <div className="min-h-screen bg-white animate-fadeIn pb-12">
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <section>
          <nav className="text-[9px] uppercase tracking-[0.2em] text-stone-400 mb-8">
            <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link> / 
            <Link to="/shop" className="mx-2 hover:text-stone-900 transition-colors">Catalog</Link> / 
            <span className="text-stone-900 font-medium">{product.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-[45%]">
              <div className="aspect-square bg-stone-50 rounded-xl overflow-hidden border border-stone-100 shadow-sm">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="w-full md:w-[50%] flex flex-col">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2 font-bold">{product.category}</p>
              <h1 className="text-3xl font-serif text-stone-900 mb-4 leading-tight">{product.name}</h1>
              <p className="text-xl text-stone-900 font-medium mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm">
                Meticulously crafted using traditional artisan techniques. This piece represents 
                our commitment to sustainable quality and timeless aesthetic design.
              </p>

              <div className="flex items-center gap-4 max-w-md">
                <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-white scale-90 origin-left">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-stone-50 text-stone-400"
                  >–</button>
                  <span className="px-4 py-2 text-xs font-bold w-10 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-stone-50 text-stone-400"
                  >+</button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-stone-900 text-white py-3 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-stone-800 transition-all active:scale-[0.97]"
                >
                  Add To Cart
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-stone-100 space-y-3">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-stone-400 cursor-pointer hover:text-stone-900 transition-colors">
                  <span>Shipping & Returns</span>
                  <span>+</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-stone-400 cursor-pointer hover:text-stone-900 transition-colors">
                  <span>Care Instructions</span>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl bg-stone-50 mx-auto px-6 border-t border-stone-100 mt-20 rounded-2xl">
          <div className="flex justify-center gap-10 py-6 text-[11px] uppercase tracking-widest font-bold text-stone-400">
            <span className="text-stone-900 border-b-2 border-stone-900 pb-1 cursor-pointer">Description</span>
            <span className="hover:text-stone-900 cursor-pointer transition-colors">Additional Info</span>
            <span className="hover:text-stone-900 cursor-pointer transition-colors">Reviews (0)</span>
          </div>
          <div className="py-8 pb-12 max-w-3xl mx-auto text-center text-stone-500 text-sm leading-relaxed">
            Each item is unique and made to order. Please allow 3-5 business days for packaging and dispatch. We use 100% plastic-free materials in all our shipping.
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-100 mt-10">
          <h2 className="text-center font-serif text-2xl text-stone-900 mb-12">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden mb-3">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={item.name} 
                  />
                </div>
                <h3 className="text-[11px] uppercase font-bold text-stone-800 truncate">{item.name}</h3>
                <p className="text-stone-500 font-bold text-sm">${item.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;