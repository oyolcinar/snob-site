import Image from 'next/image';
import { bebas, antonio, amatic, anton } from '../fonts';
import { Metadata } from 'next';

import LogoWhite from '../../../public/logos/SNOBABOUTWHITELOGO.svg';
import About1 from '../../../public/images/about.png';
import About1Mobile from '../../../public/images/aboutMobile.png';

export const metadata: Metadata = {
  title: 'ABOUT',
  description: 'SNOB',
};

export default function About() {
  return (
    <main className='bg-white'>
      <div className='hidden md:w-full mt-[-91px] md:relative md:flex md:justify-center md:items-center'>
        <Image src={About1} alt='' sizes='100vw' width={2000} />
        <div className='absolute m-[100px] mt-[191px] lg:m-0'>
          <div className='flex flex-col justify-center items-center'>
            <Image src={LogoWhite} alt='' width={327} height={186} />
            <div
              className={`${antonio.className} w-[470px] text-base text-mainText`}
            >
              Welcome to SNOB - New York&apos;s newest haven for smoothie, bowl,
              and health enthusiasts! At SNOB, we believe in nourishing the body
              and soul with the freshest, most flavorful ingredients. Our
              meticulously crafted smoothies and bowls are more than just a
              meal; they are a blend of art and science, designed to delight
              your taste buds and invigorate your body. From the vibrant colors
              of our freshly prepared fruits to the delicate balance of
              nutrients in every sip and bite, we ensure that every detail
              contributes to an exquisite and healthy dining experience.
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden w-full mt-[-91px] relative flex justify-center items-center'>
        <Image src={About1Mobile} alt='' sizes='100vw' width={2000} />
        <div className='absolute m-[40px] mt-[141px] lg:m-0'>
          <div className='flex flex-col justify-center items-center'>
            <Image src={LogoWhite} alt='' width={327} height={186} />
          </div>
        </div>
      </div>
      <div
        className={`${antonio.className} md:hidden p-[20px] bg-white text-base text-mainText`}
      >
        Welcome to SNOB - New York&apos;s newest haven for smoothie, bowl, and
        health enthusiasts! At SNOB, we believe in nourishing the body and soul
        with the freshest, most flavorful ingredients. Our meticulously crafted
        smoothies and bowls are more than just a meal; they are a blend of art
        and science, designed to delight your taste buds and invigorate your
        body. From the vibrant colors of our freshly prepared fruits to the
        delicate balance of nutrients in every sip and bite, we ensure that
        every detail contributes to an exquisite and healthy dining experience.
      </div>
    </main>
  );
}
