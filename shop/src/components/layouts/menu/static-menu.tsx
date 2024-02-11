import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import { Promotion } from '@/components/icons/category';
import Image from 'next/image';

const headerLinks = [
  { href: Routes.shops, imageUrl: '/icons/promotion.jpg', label: 'text-menu-promotion' },
  { href: Routes.coupons, imageUrl: '/icons/precommande.jpg', label: 'text-menu-preorder' },
  { href: Routes.help, imageUrl:'/icons/accessoires.jpg', label:  'text-menu-accessories' },
];

const StaticMenu = () => {
  const { t } = useTranslation('common');
  console.log(Promotion)
  return (
    <>
      {headerLinks.map(({ href, label, imageUrl }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className="flex items-center gap-1 font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
          >
            <Image src={imageUrl} alt={label} width={25} height={25}/>
            <div className='h-5 border-2 border-accent-500'></div>
            {t(label)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
