import React, { useState } from 'react';

const Login = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic: admin/admin grants admin role, anything else is guest
    if (username === 'admin' && password === 'admin') {
      setRole('admin');
    } else {
      setRole('guest');
    }
  };

  return (
    <div className="min-h-screen bg-stone-200 flex items-center justify-center p-4">
      {/* Centered Login Card */}
      <div className="bg-white w-[450px] max-w-full shadow-2xl rounded-lg overflow-hidden border border-stone-100">
        
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="font-serif text-4xl text-stone-900 mb-3">Sign In</h2>
              <div className="w-12 h-[1px] bg-stone-300 mx-auto mb-3"></div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
                Artisan Admin Portal
              </p>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-widest text-stone-400 font-bold ml-1">
                  Username
                </label>
                <input 
                  type="text" 
                  placeholder="admin" 
                  className="w-full p-4 bg-stone-50 border border-stone-100 focus:border-stone-900 outline-none transition-all text-sm"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-widest text-stone-400 font-bold ml-1">
                  Password
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full p-4 bg-stone-50 border border-stone-100 focus:border-stone-900 outline-none transition-all text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-stone-900 text-white py-4 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-stone-800 transition-all shadow-lg active:scale-[0.98]"
            >
              Sign In
            </button>

            {/* Helper text for presentation */}
            <div className="pt-6 text-center border-t border-stone-50">
              <p className="text-[9px] text-stone-300 uppercase tracking-widest">
                Admin Access: admin / admin
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;