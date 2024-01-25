import Image from 'next/image';
import SectionLink from '../components/sectionLink';
import { bebas, antonio, amatic, anton } from '../fonts';
import { Metadata } from 'next';

import Logo from '../../../public/logos/SNOBLOGOFOOTER.svg';
import LogoWhite from '../../../public/logos/SNOBSVGMENULOGO1.svg';
import Menu1 from '../../../public/images/menu1.svg';
import Menu1Mobile from '../../../public/images/menu1mobile.svg';

export const metadata: Metadata = {
  title: 'MENU',
  description: 'SNOB',
};

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
        <SectionLink sectionId='shots-juices' label='SHOTS' />
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <SectionLink sectionId='shots-juices' label='JUICES' />
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <SectionLink sectionId='smoothies' label='SMOOTHIES' />
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <SectionLink sectionId='bowls' label='BOWLS' />
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <SectionLink sectionId='salads' label='SALADS' />
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <SectionLink sectionId='bakery-sweets' label='BAKERY' />
        <div className='bg-dividerColor w-[8px] h-[50px]'></div>
        <SectionLink sectionId='bakery-sweets' label='SWEETS' />
      </div>
      <div className='flex flex-col justify-center items-center h-[1130px] bg-menuPink'>
        <div
          className={`${bebas.className} w-[360px] sm:w-[400px] absolute flex flex-col justify-center items-center text-mainText`}
        >
          <div className='opacity-25' id='shots-juices'>
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
            <div className='bg-menuPinkDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>GINGERS HAVE MORE FUN (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              CARROT, GINGER, TURMERIC, PEAR, PINEAPPLE, LEMON, CAYENNE, MINT
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[8px]'></div>
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
            <div className='bg-menuPinkDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full' id='smoothies'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>JUST BEET IT (16 OZ)</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              BEET, CARROT, CUCUMBER, SPINACH, CELERY
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[8px]'></div>
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
            <div className='bg-menuPinkDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full text-start text-[20px] font-semibold'>
            SMOOTHIES
          </div>
          <div className='w-full text-start text-[13px] text'>
            MADE FRESH WITH YOUR CHOICE OF OAT MILK, ALMOND MILK, SOY MILK,
            COCONUT MILK, DAIRY MILK, WATERMELON JUICE, ORANGE JUICE OR COLD
            BREW
          </div>
          <div className='w-full bg-menuPinkDivider h-[1px] my-[8px]'></div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>THE SNOB</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              STRAWBERRIES, RASPBERRIES, BLUEBERRIES, BANANA, SUNFLOWER BUTTER,
              A TOUCH OF AGAVE, YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[8px]'></div>
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
            <div className='bg-menuPinkDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>EYE OPENER</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              COLD BREW, ALMOND BUTTER, BANANA, CACAO NIBS, A TOUCH OF AGAVE,
              AND YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>CHOCO-NUTTY</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              PEANUT BUTTER, CHOCOLATE PROTEIN POWDER, BANANA, CACAO NIBS, A
              TOUCH OF AGAVE, AND YOUR CHOICE OF MILK
            </div>
            <div className='bg-menuPinkDivider h-[1px] my-[8px]'></div>
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
        <div
          className={`${bebas.className} text-[100px] md:text-[261px] text-white`}
        >
          JUICES
        </div>
        <div
          className={`${bebas.className} text-[100px] md:text-[261px] text-white`}
        >
          SMOOTHIES
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-[1130px] bg-menuGreen'>
        <div
          className={`${bebas.className} w-[360px] sm:w-[400px] absolute flex flex-col justify-center items-center text-mainText`}
        >
          <div className='opacity-25' id='bowls'>
            <Image src={Logo} alt='' height={57} width={113} />
          </div>
          <div className='w-full text-start text-[20px] font-semibold mt-[10px]'>
            ACAI BOWLS
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>THE NUTTER</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR ACAI BASE TOPPED WITH BANANA, NUTELLA DRIZLLE, PEANUT BUTTER
              DRIZZLE, CACAO NIBS & HOMEMADE GRANOLA
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>THE HAVANA</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR ACAI BASE TOPPE WITH MANGO, KIWI, COCONUT FLAKES, HOMEMADE
              GRANOLA AND DULCE DE LECHE
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>WE GOT THE BERRY</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR ACAI BASE TOPPED WITH RASPBERRY, BLUEBERRY, STRAWBERRY, GOJI
              BERRIES, HOMEMADE GRANOLA & HONEY DRIZZLE
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>COOKIE MONSTER</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR ACAI BASE TOPPED WITH BANANA, BLUEBERRY, OREO CRUMBLES,
              HOMEMADE GRANOLA, COOKIE BUTTER DRIZLLE & RASPBERRY DRIZZLE
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full text-start text-[20px] font-semibold'>
            PITAYA BOWLS
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>THE ALOHA</div>
              <div>$15</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR PITAYA BASE TOPPED WITH KIWI, MANGO, COCONUT FLAKES, HOMEMADE
              GRANOLA & HONEY DRIZZLE
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>THE SNOBBY NUT</div>
              <div>$15</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR PITAYA BASE TOPPED WITH STRAWBERRY, BANANA, HOMEMADE GRANOLA,
              NUTELLA DRIZZLE & RASPBERRY DRIZZLE
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>THE DRAGONBERRY</div>
              <div>$15</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR PITAYA BASE TOPPED WITH STRAWBERRY, BLUEBERRY, RASPBERRY, GOJI
              BERRIES, CHIA SEEDS & HOMEMADE GRANOLA
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>THE SUNSET</div>
              <div>$11.5</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR PITAYA BASE TOPPED WITH BANANA, APPLE, ALMOD BUTTER, COCONUT
              FLAKES & SLIVERED ALMONDS
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full text-start text-[20px] font-semibold'>
            GREEN GODDESS BOWLS
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>GAIA</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR GREEN GODDESS BASE TOPPED WITH PINEAPPLE, STRAWBERRY,
              RASPBERRY, COCONUT FLAKES & AGAVE DRIZZLE
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>PERSEPHONE</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR GREEN GODDESS BASE TOPPED WITH PINEAPPLE, KIWI, BLUEBERRY,
              HEMP SEEDS & SUNFLOWER BUTTER DRIZZLE
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>PAMONA</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR GREEN GODDESS BASE TOPPED WITH BLUEBERRY, STRAWBERRY, HEMP
              SEEDS, GOJI BERRIES & HOMEMADE GRANOLA
            </div>
            <div className='bg-menuGreenDivider h-[1px] my-[8px]'></div>
          </div>
        </div>
        <div
          className={`${bebas.className} text-[160px] md:text-[387px] text-white`}
        >
          BOWLS
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-[1130px] bg-menuYellow'>
        <div
          className={`${bebas.className} w-[360px] sm:w-[400px] absolute flex flex-col justify-center items-center text-mainText`}
        >
          <div className='opacity-25'>
            <Image src={Logo} alt='' height={57} width={113} />
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>IXCACAO</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              OUR GREEN GODDESS BASE TOPPED WITH BANANA, STRAWBERRY, COCONUT
              FLAKES, CACAO NIBS & NUTELLA DRIZZLE
            </div>
            <div className='bg-menuYellowDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full text-start text-[20px] font-semibold mt-[10px]'>
            BUILD YOUR OWN BOWL
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>BASE</div>
              <div>$12</div>
            </div>
            <div className='text-start text-[13px] text'>
              ACAI, GREEN GODDESS
            </div>
            <div className='bg-menuYellowDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>FRUIT</div>
              <div>$0.50 EA</div>
            </div>
            <div className='text-start text-[13px] text'>
              BANANA, STRAWBERRY, BLUEBERRY, PINEAPPLE, KIWI, MANGO, PITAYA,
              GREEN APPLE, RASPBERRY, GOJI BERRY
            </div>
            <div className='bg-menuYellowDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div
              id='salads'
              className='flex justify-between item-center text-[16px] font-semibold'
            >
              <div>CRUNCHY STUFF</div>
              <div>$0.50 EA</div>
            </div>
            <div className='text-start text-[13px] text'>
              HOMEMADE GRANOLA, CACAO NIBS, SUNFLOWER SEEDS, PEPITAS, SLIVERED
              ALMONDS, CHIA SEEDS, COCONUT FLAKES, HEMP SEEDS, OREO CRUMBLE
            </div>
            <div className='bg-menuYellowDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>DRIZZLES</div>
              <div>$0.25 EA</div>
            </div>
            <div className='text-start text-[13px] text'>
              NUTELLA, PEANUT BUTTER, ALMOND BUTTER, SUNFLOWER BUTTER, HONEY,
              AGAVE, DULCE DE LECHE, COOKIE BUTTER AND RASPBERRY DRIZZLE
              (+$0.50)
            </div>
            <div className='bg-menuYellowDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full text-start text-[20px] font-semibold'>
            GRAIN BOWLS AND SALADS
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>MAPLE DIJON SPINACH BOWL</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              FARRO, SPINACH, ROASTED HERB CAULIFLOWER AND SWEET POTATO, TOASTED
              WALNUTS, GOLDEN RAISINS, MAPLE DIJON VINAIGRETTE
            </div>
            <div className='bg-menuYellowDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>HARICOTS VERT SALAD</div>
              <div>$15</div>
            </div>
            <div className='text-start text-[13px] text'>
              HARICOTS VERT, SUN-DRIED TOMATOES, SLIVERED ALMONDS, SHALLOTS AND
              A 7 MINUTE EGG OVER A BED OF MESCULIN WITH ESPELETTE PEPPER
              VINAIGRETTE
            </div>
            <div className='bg-menuYellowDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div
              id='bakery-sweets'
              className='flex justify-between item-center text-[16px] font-semibold'
            >
              <div>FIESTA GRAIN BOWL</div>
              <div>$14</div>
            </div>
            <div className='text-start text-[13px] text'>
              QUINOA, BLACK BEANS, CHARRED CORN, PICO, GUAC WITH CHILI LIME
              VINAIGRETTE & CRISPY TORTILLA STRIPS
            </div>
            <div className='bg-menuYellowDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>MEDITERRANEAN QUINOA SALAD</div>
              <div>$15</div>
            </div>
            <div className='text-start text-[13px] text'>
              QUINOA, CHICKPEAS, FETA, ROASTED BEETS, SHAVED FENNEL, CHERRY
              TOMATOES, KALAMATA OLIVES, DILL & CUCUMBER TZATZIKI
            </div>
            <div className='bg-menuYellowDivider h-[1px] my-[8px]'></div>
          </div>
          <div className='w-full text-start text-[20px] font-semibold'>
            BAKED GOODS AND SWEET TREATS
          </div>
          <div className='w-full mt-[10px]'>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>STRAWBERRY DONUT -GF/V</div>
              <div>$3.50</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>BLUEBERRY DONUT -GF/V</div>
              <div>$3.50</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>CARROT MUFFIN -GF/V</div>
              <div>$4</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>BLUEBERRY MUFFIN -GF/V</div>
              <div>$4</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>ALMOND BUTTER & JELLY POPTART -V</div>
              <div>$6</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>PEANUT BUTTER & CACAO NIB POPTART -V</div>
              <div>$6</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>BERRY YOGURT PARFAIT</div>
              <div>$6</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>APPLE PIE OVERNIGHT OATS -GF/V</div>
              <div>$6</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>DRIED CHERRY ENERGY BITES -GF/V</div>
              <div>$6</div>
            </div>
            <div className='flex justify-between item-center text-[16px] font-semibold'>
              <div>CHIA PUDDING -GF/V</div>
              <div>$6</div>
            </div>
          </div>
        </div>
        <div
          className={`${bebas.className} text-[130px] md:text-[260px] text-white`}
        >
          SALADS
        </div>
        <div
          className={`${bebas.className} text-[130px] md:text-[260px] text-white`}
        >
          SWEETS
        </div>
      </div>
    </main>
  );
}
