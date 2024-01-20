import Link from 'next/link';
import React from 'react';

interface FooterProps {
  // Define any props here if needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <nav className='flex justify-between items-center h-12 px-4 shadow-md bg-white text-black'>
      <div className='font-bold'>MyApp</div>
      <div className='flex gap-4'>{/* Add more links as needed */}</div>
    </nav>
  );
};

export default Footer;
