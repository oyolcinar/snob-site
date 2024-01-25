import Image from 'next/image';
import { bebas, antonio, amatic, anton } from '../fonts';
import { Metadata } from 'next';

import Special1 from '../../../public/images/specials.png';
import SpecialMobile from '../../../public/images/specialsRotated.png';

export const metadata: Metadata = {
  title: 'REWARDS',
  description: 'SNOB',
};

export default function Rewards() {
  return (
    <main className='bg-white'>
      <div className='hidden md:w-full mt-[-91px] md:relative md:flex md:justify-center md:items-center'>
        <Image src={Special1} alt='' sizes='100vw' width={2000} />
        <div className='absolute inset-0 flex'>
          <div className='w-full lg:w-1/2 p-[40px] flex flex-col justify-center items-start gap-[40px] ml-[200px]'>
            <div
              className={`${amatic.className} w-[424px] text-white text-6xl md:text-8xl lg:p-0 font-semibold`}
            >
              REWARDS COMING SOON!
            </div>
            <div className={`${antonio.className} text-mainText`}>
              REWARD TEXT HERE ENJOY A RICH VARIETY OF ACAI BOWLS, SMOOTHIES,
              FRESH JUICES, PLANT-BASED SNACKS AND DELICIOUS DESSERTS
            </div>
            <div
              className={`${antonio.className} text-mainText w-[414px] h-[40px] bg-white rounded-lg flex justify-start items-center mr-[20px]`}
            >
              <div className='text-xl ml-[16px]'>ENTER YOUR EMAIL ADDRESS</div>
            </div>
            <div
              className={`${anton.className} flex justify-center items-center w-[160px] h-[40px] bg-rewardsButton border-2 rounded-lg border-mainText text-mainText text-xl cursor-pointer hover:bg-selectColor hover:text-white transition duration-300`}
            >
              <div>JOIN MAILING LIST</div>
            </div>
          </div>
          <div className='hidden lg:block lg:w-1/2'></div>
        </div>
      </div>
      <div className='md:hidden w-full mt-[-91px] relative flex justify-center items-center'>
        <Image src={SpecialMobile} alt='' sizes='100vw' width={2000} />
        <div className='absolute inset-0 flex'>
          <div className='w-full lg:w-1/2 p-[40px] flex flex-col justify-center items-center md:items-start gap-[40px] md:ml-[200px] mt-[-100px]'>
            <div
              className={`${amatic.className} w-[424px] text-center text-white text-8xl lg:p-0 font-semibold`}
            >
              REWARDS COMING SOON!
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
