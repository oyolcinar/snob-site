import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/logos/SNOBLOGOFOOTER.png';
import Twitter from '../../../public/logos/twitter1.svg';
import Facebook from '../../../public/logos/facebook1.svg';
import Instagram from '../../../public/logos/instagram1.svg';
import { montserrat, anton, antonio } from '../fonts';

interface FooterProps {
  // Define any props here if needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <nav className='px-4 py-[133px] lg:py-0 bg-footerColor text-mainText'>
      <div className='flex flex-col lg:flex-row justify-between items-center bg-footerColor'>
        <div className='lg:ml-[175px] lg:mt-[62px] pb-[40px]'>
          <Link href='/'>
            <Image src={Logo} alt='' width={242} height={119} />
          </Link>
        </div>
        <div className='flex flex-col justify-start items-between gap-[40px] lg:gap-[70px] text-xl text-mainText lg:py-[127px]'>
          <div className='flex flex-col justify-center items-center'>
            <div className={anton.className}>SNOB UPPER EAST SIDE</div>
            <div className={antonio.className}>
              252 A EAST 77TH STREET, NEW YORK, NY 10075
            </div>
            <div className={antonio.className}>(212) 542-0177</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className={anton.className}>HOURS</div>
            <div className={antonio.className}>
              MONDAY to THURSDAY : 7:30 AM to 11 PM
            </div>
            <div className={antonio.className}>
              FRIDAY to SATURDAY : 7:30 AM to 12 AM
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start lg:gap-[70px] lg:pb-[110px] pb-[60px]'>
          <div className='flex justify-center lg:justify-start items-center gap-[30px] py-[70px] lg:py-0'>
            <Image
              src={Instagram}
              height={24}
              width={24}
              alt=''
              className='cursor-pointer'
            />
            <Image
              src={Facebook}
              height={24}
              width={24}
              alt=''
              className='cursor-pointer'
            />
            <Image
              src={Twitter}
              height={24}
              width={24}
              alt=''
              className='cursor-pointer'
            />
          </div>
          <div
            className={`${montserrat.className} flex flex-col lg:mr-[175px] items-center gap-[10px] lg:items-start`}
          >
            <div>Please feel free message us at</div>
            <div className='font-semibold'>hello@snob.health</div>
            <div>and let us know how we can help.</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-[16px] text-base lg:pb-[60px]'>
        <div className={`${montserrat.className} font-semibold`}>
          © 2021 SNOB. All rights reserved.
        </div>
        <div className={montserrat.className}>
          Terms of use | Privacy Policy
        </div>
      </div>
    </nav>
  );
};

export default Footer;
