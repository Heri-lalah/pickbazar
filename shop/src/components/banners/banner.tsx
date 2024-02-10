import { useType } from '@/framework/type';
import dynamic from 'next/dynamic';
const ErrorMessage = dynamic(() => import('@/components/ui/error-message'));
const BannerPrimary = dynamic(
  () => import('@/components/banners/banner-primary')
);
const BannerShort = dynamic(() => import('@/components/banners/banner-short'));
const BannerWithoutSlider = dynamic(
  () => import('@/components/banners/banner-without-slider')
);
const BannerWithPagination = dynamic(
  () => import('@/components/banners/banner-with-pagination')
);
const MAP_BANNER_TO_GROUP: Record<string, any> = {
  classic: BannerPrimary,
  modern: BannerShort,
  minimal: BannerWithoutSlider,
  standard: BannerPrimary,
  compact: BannerWithPagination,
  default: BannerPrimary,
};

const Banner: React.FC<{ layout: string; variables: any }> = ({
  layout,
  variables,
}) => {
  const { type, error } = useType(variables.type);
  if (error) return <ErrorMessage message={error.message} />;
  const Component = MAP_BANNER_TO_GROUP[layout];
  return (
    <div>
      <Component banners={type?.banners} layout={layout} slug={type?.slug} />
    </div>
  );
};

export default Banner;
