import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import GroupsDropdownMenu from './groups-menu';

const headerLinks = [
  { href: Routes.shops, icon: null, label: 'text-menu-promotion' },
  { href: Routes.coupons, icon: null, label: 'text-menu-preorder' },
  { href: Routes.help, label: 'text-menu-accessories' },
];

const StaticMenu = () => {
  const { t } = useTranslation('common');

  return (
    <>
      {headerLinks.map(({ href, label, icon }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
          >
            {icon && <span className="ltr:mr-2 rtl:ml-2">{icon}</span>}
            {t(label)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
