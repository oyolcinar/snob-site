import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/logos/SNOBSVGBLACKLOGO1.svg';
import Cart from '../../../public/logos/cart.svg';
import Instagram from '../../../public/logos/instagram1.svg';
import Facebook from '../../../public/logos/facebook1.svg';
import Twitter from '../../../public/logos/twitter1.svg';
import HamburgerIcon from '../../../public/logos/hamburger.svg';
import { anton } from '../fonts';

interface NavbarProps {
  // Define any props here if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className='flex justify-between items-center h-[92px] opacity-85 bg-white text-black sticky top-0 z-10'>
      <div className='flex justify-between w-full lg:justify-start items-center'>
        <div className='lg:hidden ml-[26px] lg:ml-[46px]'>
          <Image src={Cart} alt='' width={32} height={27} />
        </div>
        <div className='lg:ml-[46px]'>
          <Link href='/'>
            <Image src={Logo} alt='' width={139} height={79} />
          </Link>
        </div>
        <div className='lg:hidden mr-[26px] lg:mr-[46px]'>
          <Image src={HamburgerIcon} alt='Menu' width={25} height={25} />
        </div>
        <div
          className={`${anton.className} text-mainText md:mx-[46px] hidden lg:flex justify-between items-center gap-[60px] h-[29px]`}
        >
          <Link
            href='/menu'
            className='cursor-pointer hover:text-selectColor transition duration-300'
          >
            MENU
          </Link>
          <Link
            href='/deals'
            className='cursor-pointer hover:text-selectColor transition duration-300'
          >
            DEALS
          </Link>
          <Link
            href='/rewards'
            className='cursor-pointer hover:text-selectColor transition duration-300'
          >
            REWARDS
          </Link>
          <Link
            href='/about'
            className='cursor-pointer hover:text-selectColor transition duration-300'
          >
            ABOUT
          </Link>
          <Link
            href='/contact'
            className='cursor-pointer hover:text-selectColor transition duration-300'
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className='hidden lg:flex justify-between items-center gap-[50px]'>
        <div className='flex justify-between items-center gap-[21px]'>
          <Image
            src={Instagram}
            alt=''
            width={19}
            height={19}
            className='cursor-pointer'
          />
          <Image
            src={Facebook}
            alt=''
            width={19}
            height={19}
            className='cursor-pointer'
          />
          <Image
            src={Twitter}
            alt=''
            width={19}
            height={19}
            className='cursor-pointer'
          />
        </div>
        <div>
          <Image src={Cart} alt='' width={32} height={27} />
        </div>
        <div
          className={`${anton.className} flex gap-[15px] text-mainText sm:mr-[46px]`}
        >
          <div className='w-[122px] h-[33px] border-2 border-mainText rounded-lg flex justify-center items-center bg-mainText text-white cursor-pointer hover:bg-selectColor  transition duration-300'>
            <div>LOGIN</div>
          </div>
          <div className='w-[122px] h-[33px] border-2 border-mainText rounded-lg flex justify-center items-center cursor-pointer hover:bg-selectColor hover:text-white transition duration-300'>
            <div>SIGN UP</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
