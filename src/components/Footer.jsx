import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <p>&#169; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
