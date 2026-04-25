import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// REQUIRED CHANGE: We remove the hardcoded 'const products' array from here 
// because it is now being managed in App.jsx and passed in as a prop.

const Shop = ({ products, addToCart }) => {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Default');

  // Logic: Filter by Category
  const filteredProducts = products.filter(p => 
    filter === 'All' ? true : p.category === filter
  );

  // Logic: Sort by Price or Name
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    if (sortBy === 'Name') return a.name.localeCompare(b.name);
    return 0;
  });

  // Unique Categories for the Filter Dropdown
  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-stone-50 pb-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <nav className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2">
              Home <span className="text-stone-900 font-bold">Catalog</span>
            </nav>
            <h1 className="font-serif text-4xl text-stone-900 uppercase">Our Collection</h1>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-widest text-stone-400 mb-1 font-bold">Filter</label>
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white border border-stone-200 text-stone-800 text-xs rounded-lg px-4 py-2 outline-none focus:border-stone-400 cursor-pointer"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-widest text-stone-400 mb-1 font-bold">Sort By</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-stone-200 text-stone-800 text-xs rounded-lg px-4 py-2 outline-none focus:border-stone-400 cursor-pointer"
              >
                <option value="Default">Default</option>
                <option value="Name">Name (A-Z)</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {sortedProducts.map((product) => (
          <div key={product.id} className="flex flex-col group">
            <Link to={`/product/${product.id}`} className="aspect-square bg-stone-200 rounded-2xl overflow-hidden mb-4 border border-stone-200/50 block">
              <img 
                src={product.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={product.name} 
              />
            </Link>
            <h3 className="text-stone-400 text-[10px] uppercase tracking-widest mb-1 font-bold">{product.category}</h3>
            <h4 className="text-stone-800 text-[11px] font-bold mb-1 uppercase truncate">{product.name}</h4>
            <p className="text-stone-900 font-bold text-lg mb-4">${product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-stone-900 text-white py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold hover:bg-stone-700 transition-all shadow-sm active:scale-95"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {/* Empty State Logic (REQUIRED for CRUD logic) */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-stone-400 font-serif italic text-lg">No items found in this category.</p>
        </div>
      )}

      {/* FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20 flex flex-col items-center gap-6">
        <p className="text-stone-400 text-[10px] uppercase tracking-widest font-medium">
          {sortedProducts.length} items showing
        </p>
        <div className="w-48 h-[1px] bg-stone-100 relative">
          <div className="absolute left-0 top-0 h-full bg-stone-900 w-full"></div>
        </div>
        <p className="text-stone-300 text-[9px] uppercase tracking-[0.2em]">
          End of Collection
        </p>
      </div>
    </div>
  );
};

export default Shop;