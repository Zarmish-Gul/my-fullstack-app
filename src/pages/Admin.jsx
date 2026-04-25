import React, { useState } from 'react';

const Admin = ({ orders, serverStatus, products, setProducts }) => {
  const [activeTab, setActiveTab] = useState('inventory');
  const [newProduct, setNewProduct] = useState({ name: '', price: '', img: '', category: '' });

  // --- CRUD FUNCTIONS ---

  // 1. CREATE: Add a new product to the state
  const handleAddProduct = (e) => {
    e.preventDefault();
    const id = Date.now();
    
    // If the image field is empty, we provide a placeholder
    const finalImg = newProduct.img || 'https://via.placeholder.com/300?text=No+Image';
    
    const productToAdd = { 
      ...newProduct, 
      id, 
      img: finalImg,
      price: parseFloat(newProduct.price) 
    };
    
    setProducts([...products, productToAdd]);
    setNewProduct({ name: '', price: '', img: '', category: '' });
  };

  // 2. DELETE: Remove product by ID
  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to remove this piece from the collection?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // 3. UPDATE: Simple price adjustment
  const updatePrice = (id, newPrice) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, price: parseFloat(newPrice) } : p
    ));
  };

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-serif text-stone-900 mb-2">Management Dashboard</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">
              Artisan Admin Control • {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 border border-stone-200 rounded-full shadow-sm">
            <div className={`w-2 h-2 rounded-full ${serverStatus === 'connected' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-stone-600">
              System {serverStatus}
            </span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-10 border-b border-stone-200 mb-10">
          <button 
            onClick={() => setActiveTab('inventory')}
            className={`pb-4 text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'inventory' ? 'border-b-2 border-stone-900 text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}
          >
            Inventory Management
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`pb-4 text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'orders' ? 'border-b-2 border-stone-900 text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}
          >
            Recent Orders ({orders.length})
          </button>
        </div>

        {/* --- INVENTORY (CRUD) TAB --- */}
        {activeTab === 'inventory' && (
          <div className="space-y-10">
            
          <div className="bg-stone-900 p-8 rounded-sm shadow-2xl flex flex-col lg:flex-row gap-8">
            
            {/* Image Preview Box */}
            <div className="w-full lg:w-48 h-48 bg-stone-800 border border-stone-700 flex items-center justify-center overflow-hidden rounded-sm">
              {newProduct.img ? (
                <img src={newProduct.img} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-stone-500 text-[10px] uppercase tracking-tighter">Preview</span>
              )}
            </div>

            {/* Input Fields */}
            <form onSubmit={handleAddProduct} className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-[9px] uppercase tracking-widest text-stone-500 block mb-1">Image URL / Path</label>
                <input 
                  required 
                  className="w-full bg-stone-800 border-none text-white p-3 text-sm focus:ring-1 ring-stone-500" 
                  placeholder="e.g. https://images.com/vase.jpg or vase.jpg"
                  value={newProduct.img} 
                  onChange={e => setNewProduct({...newProduct, img: e.target.value})} 
                />
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-widest text-stone-500 block mb-1">Product Name</label>
                <input required className="w-full bg-stone-800 border-none text-white p-3 text-sm" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="text-[9px] uppercase tracking-widest text-stone-500 block mb-1">Price (€)</label>
                  <input required type="number" step="0.01" className="w-full bg-stone-800 border-none text-white p-3 text-sm" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} />
                </div>
                <div className="w-1/2">
                  <label className="text-[9px] uppercase tracking-widest text-stone-500 block mb-1">Category</label>
                  <input required className="w-full bg-stone-800 border-none text-white p-3 text-sm" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} />
                </div>
              </div>
              <button type="submit" className="md:col-span-2 bg-white text-stone-900 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-stone-200 transition-all">
                Add to Inventory
              </button>
            </form>
          </div>
            {/* PRODUCT LIST (READ & DELETE) */}
            <div className="grid grid-cols-1 gap-4">
              <h3 className="text-stone-900 font-serif text-2xl mb-2">Current Collection</h3>
              {products.map(product => (
                <div key={product.id} className="bg-white border border-stone-200 p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-16 h-16 bg-stone-100 flex items-center justify-center overflow-hidden">
                       <img src={product.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg text-stone-900 font-medium">{product.name}</h4>
                      <div className="flex gap-4 items-center">
                        <span className="text-[10px] uppercase tracking-widest text-stone-400">{product.category}</span>
                        <span className="text-sm font-bold text-stone-900">€{product.price.toFixed(2)}</span>
                      </div>
                    </div>
                    {/* INLINE UPDATE (Quick price change) */}
                    <div className="hidden md:flex items-center gap-2">
                      <input 
                        type="number" 
                        placeholder="New Price" 
                        className="w-20 p-1 text-xs border border-stone-200"
                        onBlur={(e) => updatePrice(product.id, e.target.value)}
                      />
                    </div>
                    <button 
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-400 hover:text-red-600 text-[10px] uppercase font-bold tracking-widest p-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- ORDERS TAB --- */}
        {activeTab === 'orders' && (
          <div className="bg-white border border-stone-200 rounded-sm overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-stone-900 text-white text-[10px] uppercase tracking-widest">
                  <th className="p-5">Order Reference</th>
                  <th className="p-5">Client</th>
                  <th className="p-5">Items</th>
                  <th className="p-5 text-right">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sm">
                {orders.length === 0 ? (
                  <tr><td colSpan="4" className="p-10 text-center text-stone-400 italic">No transactions processed yet.</td></tr>
                ) : (
                  orders.map((order, idx) => (
                    <tr key={idx} className="hover:bg-stone-50">
                      <td className="p-5 font-mono text-xs">#{order.id?.toString().slice(-6)}</td>
                      <td className="p-5 font-medium">{order.customerName}</td>
                      <td className="p-5 text-stone-500">{order.items?.length} items</td>
                      <td className="p-5 text-right font-bold">€{order.total?.toFixed(2)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;