import Image from 'next/image';
import { bebas, antonio, amatic, anton } from '../fonts';

import Logo from '../../../public/logos/SNOBLOGOFOOTER.svg';
import LogoWhite from '../../../public/logos/SNOBSVGMENULOGO1.svg';
import Menu1 from '../../../public/images/menu1.svg';
import Menu1Mobile from '../../../public/images/menu1mobile.svg';
import Menu2 from '../../../public/images/menu2.svg';

export default function Menu() {
  return (
    <main className='bg-white'>
      <div className='hidden md:w-full mt-[-91px] md:relative md:flex md:justify-center md:items-center'>
        <Image src={Menu1} alt='' sizes='100vw' width={2000} />
        <div className='absolute m-[100px] mt-[191px] lg:m-0'>
          <div className='flex flex-col justify-center items-center'>
            <Image src={LogoWhite} alt='' width={140} height={80} />
            <div className={`${anton.className} text-[170px]`}>MENU</div>
          </div>
        </div>
      </div>
      <div className='md:hidden w-full mt-[-91px] relative flex justify-center items-center'>
        <Image src={Menu1Mobile} alt='' sizes='100vw' width={2000} />
        <div className='absolute m-[40px] mt-[141px] lg:m-0'>
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
      <div className='flex flex-col justify-center items-center h-[1130px] bg-menuPink'>
        <div
          className={`${bebas.className} w-[400px] absolute flex flex-col justify-center items-center text-mainText`}
        >
          <div>
            <Image src={Logo} alt='' height={57} width={113} />
          </div>
          <div className='w-full text-start text-[20px] font-semibold mt-[10px]'>
            FRESH SHOTS AND JUICES
          </div>
          <div className='w-full text-start text-[13px]'>
            10 OZ OR 16 OZ, MADE FRESH DAILY
          </div>
          <div className='w-full mt-[10px]'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>WHEATGRASS SHOT (2 OZ)</div>
              <div>$5</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>GINGER SHOT (2 OZ)</div>
              <div>$5</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>WATERMELON JUICE</div>
              <div>$7/10</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>CELERY JUICE</div>
              <div>$6/9</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>ORANGE JUICE</div>
              <div>$6/9</div>
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>GINGERS HAVE MORE FUN (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              CARROT, GINGER, TURMERIC, PEAR, PINEAPPLE, LEMON, CAYENNE, MINT
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>LEAN GREEN (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              KALE, SPINACH, DANDELION GREENS, PARSLEY, CELERY, GREEN APPLE,
              LEMON, CUCUMBER
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>JUST BEET IT (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              BEET, CARROT, CUCUMBER, SPINACH, CELERY
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>CUTE-CUMBER (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              CUCUMBER, CELERY, PINEAPPLE, GREEN APPLE AND A PINCH OF HIMALAYAN
              SALT
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full text-start text-[20px] font-semibold'>
            SMOOTHIES
          </div>
          <div className='w-full text-start text-[13px] text'>
            MADE FRESH WITH YOUR CHOICE OF OAT MILK, ALMOND MILK, SOY MILK,
            COCONUT MILK, DAIRY MILK, WATERMELON JUICE, ORANGE JUICE OR COLD
            BREW
          </div>
          <div className='w-full bg-menuPinkDivider h-[1px] my-[10px]'></div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>THE SNOB</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              STRAWBERRIES, RASPBERRIES, BLUEBERRIES, BANANA, SUNFLOWER BUTTER,
              A TOUCH OF AGAVE, YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>GREEN MACHINE</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              KALE, SPINACH, BANANA, PINEAPPLE, SUNFLOWER BUTTER, A TOUCH OF
              AGAVE, AND YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>EYE OPENER</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              COLD BREW, ALMOND BUTTER, BANANA, COCOA NIBS, A TOUCH OF AGAVE,
              AND YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>CHOCO-NUTTY</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              PEANUT BUTTER, CHOCOLATE PROTEIN POWDER, BANANA, COCOA NIBS, A
              TOUCH OF AGAVE, AND YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>BUILD YOUR OWN SMOOTHIE</div>
              <div>$12</div>
            </div>
            <div className='text-start text-[13px] font-semibold'>
              COMES WITH 3 FRUITS/VEGGIES, 1 DRIZZLE OR PROTEIN AND YOUR CHOICE
              OF MILK
            </div>
            <div className='text-start text-[13px] font-semibold'>
              ADD ONS $0.50 EA
            </div>
            <div className='text-start text-[13px] text'>
              SPIRULINA, COCAO NIBS, CHIA SEEDS, HEMP SEEDS, ROLLED OATS, SUPER
              GREENS, COLLAGEN POWDER
            </div>
            <div className='text-start text-[13px] text'>
              <span className='font-semibold'>PROTEINS:</span> VANILLA,
              CHOCOLATE, STRAWBERRY, WHEY AND PEA
            </div>
          </div>
        </div>
        <div className={`${bebas.className} text-[261px] text-white`}>
          JUICES
        </div>
        <div className={`${bebas.className} text-[261px] text-white`}>
          SMOOTHIES
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-[1130px] bg-menuGreen'>
        <div
          className={`${bebas.className} w-[400px] absolute flex flex-col justify-center items-center text-mainText`}
        >
          <div>
            <Image src={Logo} alt='' height={57} width={113} />
          </div>
          <div className='w-full text-start text-[20px] font-semibold mt-[10px]'>
            ACAI BOWLS
          </div>
          <div className='w-full text-start text-[13px]'>
            10 OZ OR 16 OZ, MADE FRESH DAILY
          </div>
          <div className='w-full mt-[10px]'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>WHEATGRASS SHOT (2 OZ)</div>
              <div>$5</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>GINGER SHOT (2 OZ)</div>
              <div>$5</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>WATERMELON JUICE</div>
              <div>$7/10</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>CELERY JUICE</div>
              <div>$6/9</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>ORANGE JUICE</div>
              <div>$6/9</div>
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>GINGERS HAVE MORE FUN (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              CARROT, GINGER, TURMERIC, PEAR, PINEAPPLE, LEMON, CAYENNE, MINT
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>LEAN GREEN (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              KALE, SPINACH, DANDELION GREENS, PARSLEY, CELERY, GREEN APPLE,
              LEMON, CUCUMBER
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>JUST BEET IT (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              BEET, CARROT, CUCUMBER, SPINACH, CELERY
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>CUTE-CUMBER (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              CUCUMBER, CELERY, PINEAPPLE, GREEN APPLE AND A PINCH OF HIMALAYAN
              SALT
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full text-start text-[20px] font-semibold'>
            SMOOTHIES
          </div>
          <div className='w-full text-start text-[13px] text'>
            MADE FRESH WITH YOUR CHOICE OF OAT MILK, ALMOND MILK, SOY MILK,
            COCONUT MILK, DAIRY MILK, WATERMELON JUICE, ORANGE JUICE OR COLD
            BREW
          </div>
          <div className='w-full bg-menuGreenDivider h-[1px] my-[10px]'></div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>THE SNOB</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              STRAWBERRIES, RASPBERRIES, BLUEBERRIES, BANANA, SUNFLOWER BUTTER,
              A TOUCH OF AGAVE, YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>GREEN MACHINE</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              KALE, SPINACH, BANANA, PINEAPPLE, SUNFLOWER BUTTER, A TOUCH OF
              AGAVE, AND YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>EYE OPENER</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              COLD BREW, ALMOND BUTTER, BANANA, COCOA NIBS, A TOUCH OF AGAVE,
              AND YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>CHOCO-NUTTY</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              PEANUT BUTTER, CHOCOLATE PROTEIN POWDER, BANANA, COCOA NIBS, A
              TOUCH OF AGAVE, AND YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[10px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>BUILD YOUR OWN SMOOTHIE</div>
              <div>$12</div>
            </div>
            <div className='text-start text-[13px] font-semibold'>
              COMES WITH 3 FRUITS/VEGGIES, 1 DRIZZLE OR PROTEIN AND YOUR CHOICE
              OF MILK
            </div>
            <div className='text-start text-[13px] font-semibold'>
              ADD ONS $0.50 EA
            </div>
            <div className='text-start text-[13px] text'>
              SPIRULINA, COCAO NIBS, CHIA SEEDS, HEMP SEEDS, ROLLED OATS, SUPER
              GREENS, COLLAGEN POWDER
            </div>
            <div className='text-start text-[13px] text'>
              <span className='font-semibold'>PROTEINS:</span> VANILLA,
              CHOCOLATE, STRAWBERRY, WHEY AND PEA
            </div>
          </div>
        </div>
        <div className={`${bebas.className} text-[387px] text-white`}>
          BOWLS
        </div>
      </div>
    </main>
  );
}
