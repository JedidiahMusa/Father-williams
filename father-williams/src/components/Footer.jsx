import React from 'react';
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    {name:"Home", to:"home"},
    {name:"objective", to:"objective"},
    {name:"Help", to:"howWeHelp"},
    {name:"Impact", to:"impact"},
    {name:"Team", to:"ourteam"},
  ]
  
  
  return (
    <footer className="w-full bg-gradient-to-b from-[#000000] overflow-hidden to-[#01011d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white mb-4">Father Williams Abba Charitable Trust</h2>
            <p className="text-gray-300 mb-6">
            FATHER WILLIAMS ABBA CHARITABLE TRUST (EST. 2024)
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 flex items-center justify-center transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3B82F6]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 flex items-center justify-center transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3B82F6]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 flex items-center justify-center transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3B82F6]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 flex items-center justify-center transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3B82F6]"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Quick Links */}

            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                <span className="after:absolute after:bottom-0 after:left-0 after:h-1 after:w-8 after:bg-[#3B82F6] after:-mb-3 after:block">Quick Links</span>
              </h3>
              <ul className="space-y-4">
                {navLinks.map((link)=>(
              <Link to={link.to} key={link.to}>
              <li>
                  <a href="/" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center group">
                    <span className="transform group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              </Link>
            ))}
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                <span className="after:absolute after:bottom-0 after:left-0 after:h-1 after:w-8 after:bg-[#3B82F6] after:-mb-3 after:block">Contact Us</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#3B82F6] mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>14301 N. 87 St., Ste. 208</p>
                    <p>Scottsdale, AZ 85260</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#3B82F6] flex-shrink-0" />
                  <p className="text-gray-300">480-584-3517</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#3B82F6] flex-shrink-0" />
                  <a 
                    href="mailto:info@abbacharitabletrust.org" 
                    className="text-gray-300 hover:text-[#3B82F6] transition-colors"
                  >
                    info@abbacharitabletrust.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-10">
          <div className="max-w-md mx-auto">
            <h3 className="text-center text-lg font-semibold text-white mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-center text-gray-300 mb-6">
              Stay updated with our latest news, events, and activities.
            </p>
            
            <form  className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-gray-700 rounded-lg px-4 py-3 text-white w-full focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] placeholder-gray-400"
              />
              <button 
                type="submit" 
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors sm:flex-shrink-0"
              >
                Subscribe
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Father Williams Abba Charitable Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;