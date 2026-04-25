import React, { useState } from 'react';

const Contact = () => {
  // --- IN-MEMORY STORAGE LOGIC ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This logs the data to your console as "In-Memory" storage
    console.log("Message Stored in Memory:", formData);
    alert(`Thank you, ${formData.name}. Your message has been received!`);
    
    // Resetting the form
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="bg-stone-100 min-h-screen animate-fadeIn">
      {/* --- HEADER --- */}
      <section className="relative pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 items-center">
          
          {/* Left Side: Smaller Overlapping Box */}
          <div className="z-10 md:col-span-5 bg-stone-900 text-white p-8 md:p-12 shadow-xl md:mr-[-80px]">
            <span className="uppercase tracking-[0.3em] text-[9px] text-stone-400 mb-4 block font-bold">Studio</span>
            <h1 className="text-3xl font-serif mb-4 leading-tight">Let's Connect.</h1>
            <p className="text-stone-300 text-xs leading-relaxed mb-8 font-light">
              Custom commissions or studio visits? Let's start a conversation.
            </p>
            
            <div className="space-y-2 pt-4 border-t border-stone-800 text-[10px] tracking-widest uppercase">
              <p className="hover:text-stone-400 cursor-pointer">hello@artisan.com</p>
              <p>+92 300 1234567</p>
            </div>
          </div>

          {/* Right Side: Smaller Image Section */}
          <div className="md:col-span-7 h-[300px] md:h-[450px] w-full mt-6 md:mt-0">
            <img 
              src="/jb2.jpg" 
              alt="Studio" 
              className="w-full h-full object-cover brightness-70"
            />
          </div>

        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-stone-900 mb-6">Visit Our Workshop</h3>
              <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-stone-900 uppercase tracking-widest text-[10px] block mb-1">Location</strong>
                  Artisan Collective Studio, <br />
                  Saddar, Rawalpindi, <br />
                  Pakistan
                </p>
                <p>
                  <strong className="text-stone-900 uppercase tracking-widest text-[10px] block mb-1">Hours</strong>
                  Monday – Friday: 10:00 – 18:00 <br />
                  Saturday: By Appointment Only
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-stone-900 mb-6">Direct Contact</h3>
              <div className="space-y-4 text-stone-600 text-sm">
                <p className="flex flex-col">
                  <strong className="text-stone-900 uppercase tracking-widest text-[10px] mb-1">Email</strong>
                  <a href="mailto:hello@artisan.com" className="hover:text-stone-400 transition-colors">hello@artisan.com</a>
                </p>
                <p className="flex flex-col">
                  <strong className="text-stone-900 uppercase tracking-widest text-[10px] mb-1">Phone</strong>
                  <a href="tel:+923001234567" className="hover:text-stone-400 transition-colors">+92 (300) 123 4567</a>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-stone-100">
                <h4 className="text-stone-900 uppercase tracking-widest text-[10px] font-bold mb-4">Follow the process</h4>
                <div className="flex gap-6 text-stone-400 text-xs uppercase tracking-widest">
                  <a href="#" className="hover:text-stone-900 transition-colors underline underline-offset-4">Instagram</a>
                  <a href="#" className="hover:text-stone-900 transition-colors underline underline-offset-4">Pinterest</a>
                </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Updated for Functionality) */}
          <div className="bg-stone-200 p-8 md:p-12 rounded-sm border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white border border-stone-200 p-3 text-sm focus:outline-none focus:border-stone-900 transition-colors" 
                    placeholder="Your name" 
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white border border-stone-200 p-3 text-sm focus:outline-none focus:border-stone-900 transition-colors" 
                    placeholder="email@address.com" 
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="bg-white border border-stone-200 p-3 text-sm focus:outline-none focus:border-stone-900 transition-colors appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Custom Commission</option>
                  <option>Order Status</option>
                  <option>Wholesale</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Message</label>
                <textarea 
                  rows="5" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white border border-stone-200 p-3 text-sm focus:outline-none focus:border-stone-900 transition-colors resize-none" 
                  placeholder="How can we help?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-stone-800 transition-all">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;