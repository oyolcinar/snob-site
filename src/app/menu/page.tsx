import Image from 'next/image';
import { bebas, antonio, amatic, anton } from '../fonts';

import LogoWhite from '../../../public/logos/SNOBSVGMENULOGO1.svg';
import Menu1 from '../../../public/images/menu1.svg';
import Menu1Mobile from '../../../public/images/menu1mobile.svg';
import Menu2 from '../../../public/images/menu2.svg';

export default function Menu() {
  return (
    <main className='bg-white'>
      <div className='hidden md:w-full mt-[-92px] md:relative md:flex md:justify-center md:items-center'>
        <Image src={Menu1} alt='' sizes='100vw' width={2000} />
        <div className='absolute m-[100px] mt-[192px] lg:m-0'>
          <div className='flex flex-col justify-center items-center'>
            <Image src={LogoWhite} alt='' width={140} height={80} />
            <div className={`${anton.className} text-[170px]`}>MENU</div>
          </div>
        </div>
      </div>
      <div className='md:hidden w-full mt-[-92px] relative flex justify-center items-center'>
        <Image src={Menu1Mobile} alt='' sizes='100vw' width={2000} />
        <div className='absolute m-[40px] mt-[142px] lg:m-0'>
          <div className='flex flex-col justify-center items-center'>
            <Image src={LogoWhite} alt='' width={140} height={80} />
            <div className={`${anton.className} text-[170px]`}>MENU</div>
          </div>
        </div>
      </div>
      <div
        className={`${bebas.className} py-[16px] w-full bg-bannerColor flex justify-center items-center text-[50px] gap-[16px] flex-wrap`}
      >
        <div className='cursor-pointer hover:text-selectColor transition duration-300'>
          SHOTS
        </div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div className='cursor-pointer hover:text-selectColor transition duration-300'>
          JUICES
        </div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div className='cursor-pointer hover:text-selectColor transition duration-300'>
          SMOOTHIES
        </div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div className='cursor-pointer hover:text-selectColor transition duration-300'>
          BOWLS
        </div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div className='cursor-pointer hover:text-selectColor transition duration-300'>
          SALADS
        </div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div className='cursor-pointer hover:text-selectColor transition duration-300'>
          BAKERY
        </div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div className='cursor-pointer hover:text-selectColor transition duration-300'>
          SWEETS
        </div>
      </div>
    </main>
  );
}
