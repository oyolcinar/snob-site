import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/logos/SNOBSVGBLACKLOGO1.svg';
import Cart from '../../../public/logos/cart.svg';
import Instagram from '../../../public/logos/instagram1.svg';
import Facebook from '../../../public/logos/facebook1.svg';
import Twitter from '../../../public/logos/twitter1.svg';
import { anton } from '../fonts';

interface NavbarProps {
  // Define any props here if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className='flex justify-between items-center sm:h-[92px] shadow-md opacity-85 bg-white text-black sticky top-0'>
      <div className='flex justify-start items-center'>
        <div className='sm:ml-[46px]'>
          <Image src={Logo} alt='' width={139} height={79} />
        </div>
        <div className={`${anton.className} text-mainText sm:ml-[46px]`}>
          <div className='flex justify-between items-center gap-[60px] h-[29px]'>
            <Link href='/menu'>MENU</Link>
            <Link href='/deals'>DEALS</Link>
            <Link href='/rewards'>REWARDS</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/contact'>CONTACT</Link>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center gap-[50px]'>
        <div className='flex justify-between items-center gap-[21px]'>
          <Image src={Instagram} alt='' width={19} height={19} />
          <Image src={Facebook} alt='' width={19} height={19} />
          <Image src={Twitter} alt='' width={19} height={19} />
        </div>
        <div>
          <Image src={Cart} alt='' width={32} height={27} />
        </div>
        <div
          className={`${anton.className} flex gap-[15px] text-mainText sm:mr-[46px]`}
        >
          <div className='w-[122px] h-[33px] border-2 border-mainText rounded-lg flex justify-center items-center bg-mainText text-white'>
            <div>LOGIN</div>
          </div>
          <div className='w-[122px] h-[33px] border-2 border-mainText rounded-lg flex justify-center items-center'>
            <div>SIGN UP</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
