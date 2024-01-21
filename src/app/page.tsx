import Image from 'next/image';
import { bebas, antonio, amatic } from './fonts';
import Landing from '../../public/images/landing1.svg';
import LogoWhite from '../../public/logos/SNOBSVGWHITELOGO1.svg';

export default function Home() {
  return (
    <main className='bg-white'>
      <div className='w-full mt-[-92px] relative flex justify-center items-center'>
        <Image src={Landing} alt='' sizes='100vw' />
        <div className='absolute'>
          <Image src={LogoWhite} alt='' width={868} height={495} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-[40px] py-[40px]'>
        <div className={`${amatic.className} text-secondaryText text-8xl`}>
          ENJOY SNOB EXPERIENCE
        </div>
        <div
          className={`${antonio.className} text-mainText text-xl flex flex-col justify-center items-center`}
        >
          <div>ENJOY A RICH VARIETY OF ACAI BOWLS, SMOOTHIES,</div>
          <div>FRESH JUICES, PLANT-BASED SNACKS AND DELICIOUS DESSERTS</div>
        </div>
      </div>
      <div
        className={`${bebas.className} py-[16px] w-full bg-bannerColor flex justify-center items-center text-[50px] gap-[16px] flex-wrap`}
      >
        <div>SHOTS</div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div>JUICES</div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div>SMOOTHIES</div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div>BOWLS</div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div>SALADS</div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div>BAKERY</div>
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <div>SWEETS</div>
      </div>
    </main>
  );
}
