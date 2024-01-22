import Image from 'next/image';
import { bebas, antonio, amatic, anton } from './fonts';

import Landing1 from '../../public/images/landing1.svg';
import Landing2 from '../../public/images/landing2.svg';
import Landing3 from '../../public/images/landing3.svg';
import Landing4 from '../../public/images/landing4.svg';
import Landing5 from '../../public/images/landing5.svg';
import Landing6 from '../../public/images/landing6.svg';
import Landing7 from '../../public/images/landing7.svg';
import Landing8 from '../../public/images/landing8.svg';
import Landing9 from '../../public/images/landing9.svg';
import Landing9Rotate from '../../public/images/landing9Rotate.svg';
import LogoWhite from '../../public/logos/SNOBSVGWHITELOGO1.svg';

export default function Home() {
  return (
    <main className='bg-white'>
      <div className='w-full mt-[-92px] relative flex justify-center items-center'>
        <Image src={Landing1} alt='' sizes='100vw' />
        <div className='absolute m-[100px] mt-[192px] lg:m-0'>
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
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 order-last lg:order-first bg-secondaryText p-[40px] flex flex-col lg:items-end lg:justify-center gap-[40px] items-center'>
          <div className={`${amatic.className} text-mainText text-6xl`}>
            FRESH SHOTS & JUICES
          </div>
          <div
            className={`${antonio.className} text-mainText text-xl flex flex-col justify-center items-center lg:items-end`}
          >
            <div>ENJOY A RICH VARIETY OF ACAI BOWLS, SMOOTHIES,</div>
            <div>FRESH JUICES, PLANT-BASED SNACKS AND DELICIOUS DESSERTS</div>
          </div>
          <div
            className={`${anton.className} flex justify-center items-center w-[156px] h-[36px] bg-bannerColor border-2 rounded-lg border-mainText text-mainText text-xl`}
          >
            <div>SEE THE MENU</div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:order-last order-first'>
          <Image src={Landing2} alt='' width={2000} />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 order-last lg:order-last bg-landingGreen p-[40px] flex flex-col lg:items-start lg:justify-center gap-[40px] items-center'>
          <div className={`${amatic.className} text-mainText text-6xl`}>
            SMOOTHIES
          </div>
          <div
            className={`${antonio.className} text-mainText text-xl flex flex-col justify-center items-center lg:items-start`}
          >
            <div>ENJOY A RICH VARIETY OF ACAI BOWLS, SMOOTHIES,</div>
            <div>FRESH JUICES, PLANT-BASED SNACKS AND DELICIOUS DESSERTS</div>
          </div>
          <div
            className={`${anton.className} flex justify-center items-center w-[156px] h-[36px] bg-buttonPink border-2 rounded-lg border-mainText text-mainText text-xl`}
          >
            <div>SEE THE MENU</div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:order-first order-first'>
          <Image src={Landing3} alt='' width={2000} />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 order-last lg:order-first bg-landingPink p-[40px] flex flex-col lg:items-end lg:justify-center gap-[40px] items-center'>
          <div className={`${amatic.className} text-mainText text-6xl`}>
            ACAI BOWLS
          </div>
          <div
            className={`${antonio.className} text-mainText text-xl flex flex-col justify-center items-center lg:items-start`}
          >
            <div>ENJOY A RICH VARIETY OF ACAI BOWLS, SMOOTHIES,</div>
            <div>FRESH JUICES, PLANT-BASED SNACKS AND DELICIOUS DESSERTS</div>
          </div>
          <div
            className={`${anton.className} flex justify-center items-center w-[156px] h-[36px] bg-buttonGreen border-2 rounded-lg border-mainText text-mainText text-xl`}
          >
            <div>SEE THE MENU</div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:order-last order-first'>
          <Image src={Landing4} alt='' width={2000} />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 order-last lg:order-last bg-landingGreenTwo p-[40px] flex flex-col lg:items-start lg:justify-center gap-[40px] items-center'>
          <div className={`${amatic.className} text-mainText text-6xl`}>
            PITAYA BOWLS
          </div>
          <div
            className={`${antonio.className} text-mainText text-xl flex flex-col justify-center items-center lg:items-start`}
          >
            <div>ENJOY A RICH VARIETY OF ACAI BOWLS, SMOOTHIES,</div>
            <div>FRESH JUICES, PLANT-BASED SNACKS AND DELICIOUS DESSERTS</div>
          </div>
          <div
            className={`${anton.className} flex justify-center items-center w-[156px] h-[36px] bg-buttonPinkTwo border-2 rounded-lg border-mainText text-mainText text-xl`}
          >
            <div>SEE THE MENU</div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:order-first order-first'>
          <Image src={Landing5} alt='' width={2000} />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 order-last lg:order-first bg-landingPinkTwo p-[40px] flex flex-col lg:items-end lg:justify-center gap-[40px] items-center'>
          <div className={`${amatic.className} text-mainText text-6xl`}>
            GREEN GODDESS BOWLS
          </div>
          <div
            className={`${antonio.className} text-mainText text-xl flex flex-col justify-center items-center lg:items-start`}
          >
            <div>ENJOY A RICH VARIETY OF ACAI BOWLS, SMOOTHIES,</div>
            <div>FRESH JUICES, PLANT-BASED SNACKS AND DELICIOUS DESSERTS</div>
          </div>
          <div
            className={`${anton.className} flex justify-center items-center w-[156px] h-[36px] bg-buttonYellow border-2 rounded-lg border-mainText text-mainText text-xl`}
          >
            <div>SEE THE MENU</div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:order-last order-first'>
          <Image src={Landing6} alt='' width={2000} />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 order-last lg:order-last bg-landingYellow p-[40px] flex flex-col lg:items-start lg:justify-center gap-[40px] items-center'>
          <div className={`${amatic.className} text-mainText text-6xl`}>
            GRAIN BOWLS & SALADS
          </div>
          <div
            className={`${antonio.className} text-mainText text-xl flex flex-col justify-center items-center lg:items-start`}
          >
            <div>ENJOY A RICH VARIETY OF ACAI BOWLS, SMOOTHIES,</div>
            <div>FRESH JUICES, PLANT-BASED SNACKS AND DELICIOUS DESSERTS</div>
          </div>
          <div
            className={`${anton.className} flex justify-center items-center w-[156px] h-[36px] bg-buttonPinkThree border-2 rounded-lg border-mainText text-mainText text-xl`}
          >
            <div>SEE THE MENU</div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:order-first order-first'>
          <Image src={Landing7} alt='' width={2000} />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 order-last lg:order-first bg-landingBeige p-[40px] flex flex-col lg:items-end lg:justify-center gap-[40px] items-center'>
          <div className={`${amatic.className} text-mainText text-6xl`}>
            BAKED GOODS & SWEETS
          </div>
          <div
            className={`${antonio.className} text-mainText text-xl flex flex-col justify-center items-center lg:items-start`}
          >
            <div>ENJOY A RICH VARIETY OF ACAI BOWLS, SMOOTHIES,</div>
            <div>FRESH JUICES, PLANT-BASED SNACKS AND DELICIOUS DESSERTS</div>
          </div>
          <div
            className={`${anton.className} flex justify-center items-center w-[156px] h-[36px] bg-buttonGreenThree border-2 rounded-lg border-mainText text-mainText text-xl`}
          >
            <div>SEE THE MENU</div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:order-last order-first'>
          <Image src={Landing8} alt='' width={2000} />
        </div>
      </div>
      <div className='hidden w-full relative lg:flex'>
        <Image src={Landing9} alt='' />
        <div className='absolute inset-0 flex'>
          <div className='hidden lg:block lg:w-1/2'></div>
          <div className='w-full w-1/2 p-[40px] flex flex-col justify-center items-start gap-[20px]'>
            <div
              className={`${amatic.className} text-mainText text-[114px] font-semibold`}
            >
              SNOB?
            </div>
            <div
              className={`${antonio.className} text-mainText text-lg leading-10 mr-[100px]`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              asperiores doloribus earum labore nesciunt, consectetur cum iusto,
              accusamus magni soluta perspiciatis.
            </div>
            <div
              className={`${antonio.className} text-mainText text-lg leading-10 mr-[100px]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae quos tempora qui temporibus rerum, dolore nam
              asperiores facere illo voluptate odio voluptates aut accusamus
              veniam molestiae saepe facilis. Beatae, itaque.
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full relative lg:hidden'>
        <Image src={Landing9Rotate} alt='' width={2000} />
        <div className='absolute inset-0 flex'>
          <div className='hidden lg:block lg:w-full lg:w-1/2'></div>
          <div className='w-full lg:w-1/2 p-[40px] flex flex-col justify-center items-center lg:items-start gap-[30px]'>
            <div
              className={`${amatic.className} text-mainText text-[114px] font-semibold mt-[200px]`}
            >
              SNOB?
            </div>
            <div
              className={`${antonio.className} text-mainText text-xl text-center lg:text-start leading-10`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              asperiores doloribus earum labore nesciunt, consectetur cum iusto,
              accusamus magni soluta perspiciatis. Voluptates quia a laudantium
              voluptas dignissimos perferendis tenetur aliquam!
            </div>
            <div
              className={`${antonio.className} text-mainText text-xl text-center lg:text-start leading-10`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae quos tempora qui temporibus rerum, dolore nam
              asperiores facere illo voluptate odio voluptates aut accusamus
              veniam molestiae saepe facilis. Beatae, itaque.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
