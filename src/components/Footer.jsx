import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Graceful
        Interiors. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
