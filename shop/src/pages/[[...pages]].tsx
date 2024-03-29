import type { NextPageWithLayout } from '@/types';
import type { InferGetStaticPropsType } from 'next';
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';
import HomeLayout from '@/components/layouts/_home';
import Seo from '@/components/seo/seo';
import { useWindowSize } from '@/lib/use-window-size';
import { getStaticPaths, getStaticProps } from '@/framework/home-pages.ssr';
import { useType } from '@/framework/type';
import Swiper from 'swiper';

export { getStaticPaths, getStaticProps };

const CartCounterButton = dynamic(
  () => import('@/components/cart/cart-counter-button'),
  { ssr: false }
);
const Classic = dynamic(() => import('@/components/layouts/classic'));
const Standard = dynamic(() => import('@/components/layouts/standard'));
const Modern = dynamic(() => import('@/components/layouts/modern'));
const Minimal = dynamic(() => import('@/components/layouts/minimal'));
const Compact = dynamic(() => import('@/components/layouts/compact'));

const MAP_LAYOUT_TO_GROUP: Record<string, any> = {
  classic: Classic,
  modern: Modern,
  standard: Standard,
  minimal: Minimal,
  compact: Compact,
  default: Classic,
};
const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ variables, layout }) => {
  const { query } = useRouter();
  const { width } = useWindowSize();
  const { type } = useType(variables.types.type);

  useEffect(() => {
    if (query.text || query.category) {
      scroller.scrollTo('grid', {
        smooth: true,
        offset: -110,
      });
    }
  }, [query.text, query.category]);

  // disable error loading dom
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const Component = MAP_LAYOUT_TO_GROUP['classic'];
  return (
    <>
      {domLoaded && (
        <div>
          <Seo title={type?.name} url={type?.slug} images={type?.banners} />
          <Component variables={variables} />
          {width > 1023 && (
            <CartCounterButton />
          )}
        </div>
      )}
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export default Home;
