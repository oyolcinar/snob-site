import Image from 'next/image';
import { bebas, antonio, amatic, anton, montserrat } from '../fonts';
import { Metadata } from 'next';

import Contact1 from '../../../public/images/contact1.png';
import Contact1Mobile from '../../../public/images/contact1Mobile.png';
import Map from '../../../public/images/Map.png';

export const metadata: Metadata = {
  title: 'CONTACT',
  description: 'SNOB',
};

export default function Deals() {
  return (
    <main className='bg-white'>
      <div className='hidden md:w-full mt-[-91px] md:relative md:flex md:justify-center md:items-center'>
        <Image src={Contact1} alt='' sizes='100vw' width={2000} />
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='w-full lg:w-1/2 gap-[10px]'>
            <div
              className={`${amatic.className} w-[424px] text-white text-[36px]`}
            >
              252 EAST 77TH STREET, NEW YORK, NY, 10075
            </div>
            <div className='h-[499] w-[866] bg-white'>
              <Image src={Map} alt='' height={499} width={866} />
            </div>
          </div>
          <div className='w-1/3 flex flex-col justify-center items-start gap-[10px]'>
            <div className='flex gap-[10px]'>
              <div>
                <div
                  className={`${antonio.className} text-[18px] text-mainText`}
                >
                  NAME
                </div>
                <div>
                  <input
                    className={`${montserrat.className} h-[41px] w-[248px] border-2 border-rewardsButton text-[14px] rounded-lg text-mainText px-[16px] focus:outline-selectColor`}
                    placeholder='Parsley'
                  ></input>
                </div>
              </div>
              <div>
                <div
                  className={`${antonio.className} text-[18px] text-mainText`}
                >
                  LAST NAME
                </div>
                <div>
                  <input
                    className={`${montserrat.className} h-[41px] w-[240px] border-2 border-rewardsButton text-[14px] rounded-lg text-mainText px-[16px] focus:outline-selectColor`}
                    placeholder='Montana'
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <div className={`${antonio.className} text-[18px] text-mainText`}>
                EMAIL
              </div>
              <div>
                <input
                  className={`${montserrat.className} h-[41px] w-[500px] border-2 border-rewardsButton text-[14px] rounded-lg text-mainText px-[16px] focus:outline-selectColor`}
                  placeholder='parsleymon@gmail.com'
                ></input>
              </div>
            </div>
            <div>
              <div className={`${antonio.className} text-[18px] text-mainText`}>
                PHONE NUMBER
              </div>
              <div>
                <input
                  className={`${montserrat.className} h-[41px] w-[500px] border-2 border-rewardsButton text-[14px] rounded-lg text-mainText px-[16px] focus:outline-selectColor`}
                  placeholder='(917) 888 88 88'
                ></input>
              </div>
            </div>
            <div className='flex gap-[10px]'>
              <div>
                <div
                  className={`${antonio.className} text-[18px] text-mainText`}
                >
                  CITY
                </div>
                <div>
                  <input
                    className={`${montserrat.className} h-[41px] w-[240px] border-2 border-rewardsButton text-[14px] rounded-lg text-mainText px-[16px] focus:outline-selectColor`}
                    placeholder='New York'
                  ></input>
                </div>
              </div>
              <div>
                <div
                  className={`${antonio.className} text-[18px] text-mainText`}
                >
                  STATE
                </div>
                <div>
                  <input
                    className={`${montserrat.className} h-[41px] w-[64px] border-2 border-rewardsButton text-[14px] rounded-lg text-mainText px-[16px] focus:outline-selectColor`}
                    placeholder='NY'
                  ></input>
                </div>
              </div>
              <div>
                <div
                  className={`${antonio.className} text-[18px] text-mainText`}
                >
                  ZIP CODE
                </div>
                <div>
                  <input
                    className={`${montserrat.className} h-[41px] w-[176px] border-2 border-rewardsButton text-[14px] rounded-lg text-mainText px-[16px] focus:outline-selectColor`}
                    placeholder='11221'
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <div className={`${antonio.className} text-[18px] text-mainText`}>
                ANYTHING WE HOULD KNOW?
              </div>
              <div>
                <textarea
                  className={`${montserrat.className} h-[100px] w-[500px] border-2 border-rewardsButton text-[14px] rounded-lg text-mainText px-[16px] focus:outline-selectColor resize-none`}
                  placeholder=''
                ></textarea>
              </div>
            </div>
            <div
              className={`${anton.className} flex justify-center items-center w-[160px] h-[40px] bg-rewardsButton border-2 rounded-lg border-mainText text-mainText text-xl cursor-pointer hover:bg-selectColor hover:text-white transition duration-300`}
            >
              <div>SEND</div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden w-full mt-[-91px] relative flex justify-center items-center'>
        <Image src={Contact1Mobile} alt='' sizes='100vw' width={2000} />
        <div className='absolute inset-0 flex'>
          <div className='w-full flex flex-col justify-center items-center gap-[40px] mt-[100]'>
            <div
              className={`${amatic.className} w-[324px] text-center text-white text-6xl font-semibold`}
            >
              STAY TUNED FOR THE BEST DEALS!
            </div>
            <div
              className={`${antonio.className} text-mainText w-[314px] h-[40px] bg-white rounded-lg flex justify-start items-center`}
            >
              <div className='text-xl ml-[16px]'>ENTER YOUR EMAIL ADDRESS</div>
            </div>
            <div
              className={`${anton.className} flex justify-center items-center w-[160px] h-[40px] bg-dealsButton border-2 rounded-lg border-mainText text-mainText text-xl cursor-pointer hover:bg-selectColor hover:text-white transition duration-300`}
            >
              <div>SEND</div>
            </div>
          </div>
          <div className='hidden lg:block lg:w-1/2'></div>
        </div>
      </div>
    </main>
  );
}
