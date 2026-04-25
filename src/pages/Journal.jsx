import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    category: 'Craftsmanship',
    title: 'The Art of Slow Living and Handmade Pottery',
    excerpt: 'Discover why the tactile nature of clay is becoming a modern sanctuary for the busy soul.',
    date: 'Oct 12, 2025',
    img: '/pb.jpg',
  },
  {
    id: 2,
    category: 'Interiors',
    title: 'Minimalism: How to Curate Your Living Space',
    excerpt: 'Quality over quantity. We explore how three key artisan pieces can transform a room.',
    date: 'Sep 28, 2025',
    img: '/in.jpg',
  },
  {
    id: 3,
    category: 'Sustainability',
    title: 'The Journey of Organic Textiles',
    excerpt: 'From seed to loom, understanding the ethical footprint of your favorite linens.',
    date: 'Sep 15, 2025',
    img: '/wt.jpg',
  },
];

const Journal = () => {
  return (
    <div className="bg-stone-100 min-h-screen animate-fadeIn">
<section className="relative w-full  py-6">
  <div className="max-w-7xl mx-auto">
    <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-sm group">
      
      {/* 1. Background Image with subtle zoom effect */}
      <img 
        src="/jb3.jpg" 
        alt="Journal Banner" 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />

      {/* 2. Gradient Overlay (Darker at top/bottom for readability) */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        
        {/* 3. The "Latest" Badge */}
        <span className="bg-white text-stone-900 text-[10px] uppercase tracking-[0.3em] font-bold px-4 py-1.5 rounded-sm mb-6 animate-fadeIn">
          Latest
        </span>

        {/* 4. Title & Subtitle */}
        <h1 className="text-white text-4xl md:text-6xl font-serif mb-4 drop-shadow-sm leading-tight">
          The Art of Slow Living
        </h1>
        
        <p className="text-stone-100 text-xs md:text-sm tracking-widest uppercase font-light max-w-lg">
          Before you curate your first collection...
        </p>

        {/* 5. Decorative Line */}
        <div className="w-12 h-[1px] bg-white/50 mt-8"></div>
      </div>
    </div>
  </div>
</section>

     {/* --- COMPACT FEATURED POST --- */}

<section className="px-6 md:px-10 py-12 max-w-5xl mx-auto border-b border-stone-100">
  <div className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
    
    {/* Left: Medium-Sized Image (Occupies 5 grid columns) */}
    <div className="md:col-span-6 overflow-hidden aspect-[4/5] bg-stone-100 rounded-sm shadow-sm">
      <img 
        src="/b1.jpg" 
        alt="Featured" 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
      />
    </div>

    {/* Right: Balanced Content (Occupies 7 grid columns) */}
    <div className="md:col-span-6 space-y-5">
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold block">
          Featured Story
        </span>
        <h2 className="text-2xl md:text-4xl font-serif text-stone-900 leading-tight group-hover:text-stone-700 transition-colors">
          Behind the Workbench: A Morning with Master Woodworkers.
        </h2>
      </div>
      
      <p className="text-stone-500 text-sm leading-relaxed max-w-md">
        We spent a week in a small workshop in the outskirts of Rawalpindi to understand the 
        patience required for true heirloom-quality woodwork. Discover the slow process of creation.
      </p>
      
      <div className="pt-4">
        <button className="border-b border-stone-900 text-stone-900 text-[10px] uppercase tracking-widest font-bold hover:text-stone-500 hover:border-stone-500 transition-all pb-1">
          Read Full Story
        </button>
      </div>
    </div>

  </div>
</section>
      

      {/* --- BLOG GRID --- */}
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col">
              <div className="overflow-hidden aspect-[4/3] mb-6 bg-stone-100">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-block pt-2 text-[10px] uppercase tracking-widest font-bold text-stone-900 hover:text-stone-500 transition-colors"
                >
                  Continue Reading →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* --- PAGINATION --- */}
        <div className="mt-20 flex justify-center items-center gap-4 border-t border-stone-100 pt-10">
           <button className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Prev</button>
           <span className="bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">1</span>
           <button className="text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold hover:text-stone-500">2</button>
           <button className="text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold hover:text-stone-500">Next</button>
        </div>
      </section>

      {/* --- NEWSLETTER SUB-SECTION --- */}
      <section className="bg-stone-900 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white font-serif text-3xl mb-4">Join our Mailing List</h2>
          <p className="text-stone-400 text-xs uppercase tracking-widest mb-8">Get artisan stories and shop updates directly to your inbox</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-transparent border border-stone-700 px-6 py-4 text-white text-sm focus:outline-none focus:border-stone-400 transition-colors"
            />
            <button className="bg-white text-stone-900 px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-stone-200 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Journal;