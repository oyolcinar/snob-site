'use client';
import React from 'react';
import Image from 'next/image';
import Arrow from '../../../public/logos/arrowMain.svg';

interface ScrollTopArrowProps {
  targetId: string;
}

const ScrollTopArrow: React.FC<ScrollTopArrowProps> = ({ targetId }) => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className='md:hidden fixed bottom-10 right-2 cursor-pointer z-50'
      onClick={scrollToTarget}
    >
      <Image src={Arrow} height={100} width={50} alt='' />
    </div>
  );
};

export default ScrollTopArrow;
