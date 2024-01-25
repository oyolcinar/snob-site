import Image from 'next/image';
import { bebas, antonio, amatic, anton } from '../fonts';
import { Metadata } from 'next';

import Deals1 from '../../../public/images/deals.svg';
import DealsMobile from '../../../public/images/dealsRotated.svg';

export const metadata: Metadata = {
  title: 'DEALS',
  description: 'SNOB',
};

export default function Deals() {
  return (
    <main className='bg-white'>
      <div className='hidden md:w-full mt-[-91px] md:relative md:flex md:justify-center md:items-center'>
        <Image src={Deals1} alt='' sizes='100vw' width={2000} />
        <div className='absolute inset-0 flex'>
          <div className='w-full lg:w-1/2 p-[40px] flex flex-col justify-center items-start gap-[40px] ml-[200px]'>
            <div
              className={`${amatic.className} w-[424px] text-white text-6xl md:text-8xl lg:p-0 font-semibold`}
            >
              STAY TUNED FOR THE BEST DEALS!
            </div>
            <div
              className={`${antonio.className} text-mainText w-[414px] h-[40px] bg-white rounded-lg flex justify-start items-center mr-[20px]`}
            >
              <div className='text-xl ml-[16px]'>ENTER YOUR EMAIL ADDRESS</div>
            </div>
            <div
              className={`${anton.className} flex justify-center items-center w-[160px] h-[40px] bg-dealsButton border-2 rounded-lg border-mainText text-mainText text-xl cursor-pointer hover:bg-selectColor hover:text-white transition duration-300`}
            >
              <div>JOIN MAILING LIST</div>
            </div>
          </div>
          <div className='hidden lg:block lg:w-1/2'></div>
        </div>
      </div>
      <div className='md:hidden w-full mt-[-91px] relative flex justify-center items-center'>
        <Image src={DealsMobile} alt='' sizes='100vw' width={2000} />
        <div className='absolute inset-0 flex'>
          <div className='w-full lg:w-1/2 p-[40px] flex flex-col justify-center items-center md:items-start gap-[40px] md:ml-[200px] mt-[-100px]'>
            <div
              className={`${amatic.className} w-[424px] text-center text-white text-8xl lg:p-0 font-semibold`}
            >
              STAY TUNED FOR THE BEST DEALS!
            </div>
            <div
              className={`${antonio.className} text-mainText w-[414px] h-[40px] bg-white rounded-lg flex justify-start items-center`}
            >
              <div className='text-xl ml-[16px]'>ENTER YOUR EMAIL ADDRESS</div>
            </div>
            <div
              className={`${anton.className} flex justify-center items-center w-[160px] h-[40px] bg-dealsButton border-2 rounded-lg border-mainText text-mainText text-xl cursor-pointer hover:bg-selectColor hover:text-white transition duration-300`}
            >
              <div>JOIN MAILING LIST</div>
            </div>
          </div>
          <div className='hidden lg:block lg:w-1/2'></div>
        </div>
      </div>
    </main>
  );
}
