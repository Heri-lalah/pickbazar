import { Image } from '@/components/ui/image';
import cn from 'classnames';
import Link from '@/components/ui/link';
import { logoPlaceholder } from '@/lib/placeholders';
// import { useSettings } from '@/framework/settings';
import { siteSettings } from '@/config/site';

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {

  return (
    <Link href="/" className={cn('inline-flex', className)} {...props}>
      <span className="relative h-10 w-32 overflow-hidden md:w-40">
        <Image
          src={siteSettings.logo.url ?? logoPlaceholder}
          alt={siteSettings.logo.alt || 'SWITH GAMING'}
          fill
          sizes="(max-width: 768px) 100vw"
          // width={siteSettings.logo.width}
          // height={siteSettings.logo.height}
          loading="eager"
          className="object-contain"
        />
      </span>
    </Link>
  );
};

export default Logo;
