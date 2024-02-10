import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';
import { siteSettings } from '@/config/site';
import Image from 'next/image';

export default function ClassicLayout({ variables }: HomePageProps) {
  console.log(variables.categories);
  return (
    <>
      {/* <Banner layout="classic" variables={variables.types} /> */}
      <div className='lg:h-96 2xl:h-auto min-w-full overflow-hidden'>
        <Image className='w-full'
        src={siteSettings.bannerImage.url} width={500} height={500}
        alt={siteSettings.bannerImage.title}
        />
      </div>
      <PromotionSliders variables={variables.types} />
      <FilterBar variables={variables.categories} />
      <Element
        name="grid"
        className="flex border-t border-solid border-border-200 border-opacity-70"
      >
        <Categories layout="classic" variables={variables.categories} />
        <ProductGridHome
          className="px-4 pb-8 lg:p-8"
          variables={variables.products}
        />
      </Element>
    </>
  );
}
