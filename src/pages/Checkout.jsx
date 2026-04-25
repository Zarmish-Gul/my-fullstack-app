import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart, onSaveOrder }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '', // Added email
    address: '',
    city: '',
    postalCode: ''
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = 0.00;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. CREATE THE ORDER OBJECT
    const orderData = {
      id: `ORD-${Date.now()}`, 
      items: [...cartItems],
      total: total,
      
      // ADD THIS LINE: This puts the name where Admin.jsx can find it
      customerName: `${customerInfo.firstName} ${customerInfo.lastName}`, 
      
      customer: {
        ...customerInfo,
        name: `${customerInfo.firstName} ${customerInfo.lastName}`
      },
      date: new Date().toLocaleString(),
      status: 'Processing'
    };

    // 2. PASS TO APP STATE
    if (onSaveOrder) onSaveOrder(orderData);

    // 3. FINISH PROCESS
    setIsFinished(true);
    if (clearCart) clearCart(); 
  };

  if (isFinished) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center animate-fadeIn px-6 text-center">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-serif text-stone-900 mb-4">Thank you for your order.</h1>
        <p className="text-stone-500 mb-10 max-w-sm">Your handmade pieces are being prepared. We've sent a confirmation email to your inbox.</p>
        <Link to="/shop" className="bg-stone-900 text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-800 transition-all">
          Continue Shopping
        </Link>
      </div>
    );
  }
 return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif mb-10">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Form */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">Shipping Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <input 
              required
              className="border border-stone-200 p-3 text-sm focus:outline-stone-900" 
              placeholder="First Name" 
              value={customerInfo.firstName}
              onChange={(e) => setCustomerInfo({...customerInfo, firstName: e.target.value})}
            />
            <input 
              required
              className="border border-stone-200 p-3 text-sm focus:outline-stone-900" 
              placeholder="Last Name" 
              value={customerInfo.lastName}
              onChange={(e) => setCustomerInfo({...customerInfo, lastName: e.target.value})}
            />
          </div>
          <input 
            required
            type="email"
            className="w-full border border-stone-200 p-3 text-sm focus:outline-stone-900" 
            placeholder="Email Address" 
            value={customerInfo.email}
            onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
          />
          <input 
            required
            className="w-full border border-stone-200 p-3 text-sm focus:outline-stone-900" 
            placeholder="Address" 
            value={customerInfo.address}
            onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
          />
          <div className="grid grid-cols-2 gap-4">
            <input 
              required
              className="border border-stone-200 p-3 text-sm focus:outline-stone-900" 
              placeholder="City" 
              value={customerInfo.city}
              onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
            />
            <input 
              required
              className="border border-stone-200 p-3 text-sm focus:outline-stone-900" 
              placeholder="Postal Code" 
              value={customerInfo.postalCode}
              onChange={(e) => setCustomerInfo({...customerInfo, postalCode: e.target.value})}
            />
          </div>
        </div>

        {/* Right Side: Summary */}
        <div className="bg-stone-50 p-8 h-fit border border-stone-100">
          <h2 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            {cartItems.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span>{item.name} x{item.quantity}</span>
                <span>€{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-stone-200 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2">
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>
          <button type="submit" className="w-full bg-stone-900 text-white mt-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-800 transition-all">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;