import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  const items = cartItems || [];
  const subtotal = items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  return (
    <div className="min-h-screen bg-white animate-fadeIn pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        
        <div className="flex justify-between items-center mb-8">
          <Link to="/shop" className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 flex items-center gap-2 transition-colors">
            ← Back to Shop
          </Link>
          {/* Added: Clear Memory Button */}
          {items.length > 0 && (
            <button 
  onClick={clearCart}
  className=" text-red-600 px-4 py-2 bg-white hover:bg-white transition"
>
  Clear Cart
</button>
          )}
        </div>

        <h1 className="text-4xl font-serif text-stone-900 mb-12 uppercase tracking-tight">Your Cart</h1>

        {items.length === 0 ? (
          <div className="py-20 text-center border-t border-stone-100">
            <p className="text-stone-400 font-serif italic mb-8">Your cart is currently empty.</p>
            <Link to="/shop" className="bg-stone-900 text-white px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-stone-700 transition-all">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="flex-1">
              <div className="border-t border-stone-100">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-6 py-8 border-b border-stone-100 group relative">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute left-[-30px] opacity-0 group-hover:opacity-100 text-stone-300 hover:text-red-500 transition-all"
                      title="Remove Item"
                    >
                      ✕
                    </button>

                    <div className="w-24 h-24 bg-stone-50 rounded-xl overflow-hidden border border-stone-100 shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-[11px] uppercase tracking-widest font-bold text-stone-900 mb-1">{item.name}</h3>
                        <p className="text-[10px] text-stone-400 uppercase">{item.category}</p>
                      </div>

                      <div className="flex items-center gap-8">
                        <div className="flex items-center border border-stone-200 rounded-lg bg-white">
                          <button 
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)} 
                            className="px-3 py-1 text-stone-400 hover:text-stone-900 transition-colors"
                          >
                            –
                          </button>
                          <span className="px-4 py-1 text-xs font-bold border-x border-stone-200 w-10 text-center">
                            {item.quantity || 1}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)} 
                            className="px-3 py-1 text-stone-400 hover:text-stone-900 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm font-bold text-stone-900 w-16 text-right">
                          ${(item.price * (item.quantity || 1)).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[400px]">
              <div className="bg-stone-50 rounded-2xl p-8 sticky top-24">
                <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-900 mb-8 pb-4 border-b border-stone-200/50">Cart Totals</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">Subtotal</span>
                    <span className="text-stone-900 font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">Shipping</span>
                    <span className="text-stone-900 font-medium italic">Calculated at Checkout</span>
                  </div>
                  <div className="flex justify-between items-end pt-4 border-t border-stone-200/50">
                    <span className="text-stone-900 font-serif text-xl">Total</span>
                    <span className="text-stone-900 font-bold text-2xl">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <Link to="/checkout" className="block w-full">
                  <button className="w-full bg-stone-900 text-white py-5 rounded-2xl text-[11px] uppercase tracking-widest font-bold hover:bg-stone-700 transition-all shadow-lg active:scale-95">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;