import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import DrawerWrapper from '@/components/ui/drawer/drawer-wrapper';
import { useAtom } from 'jotai';
import { drawerAtom } from '@/store/drawer-atom';
import Link from 'next/link';

const headerLinks = [
  { href: Routes.shops, icon: null, label: 'text-menu-promotion' },
  { href: Routes.coupons, icon: null, label: 'text-menu-preorder' },
  { href: Routes.help, label: 'text-menu-accessories' },
];

export default function MobileMainMenu() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [_, closeSidebar] = useAtom(drawerAtom);

  function handleClick(path: string) {
    router.push(path);
    closeSidebar({ display: false, view: '' });
  }

  return (
    <DrawerWrapper>
      <ul className="grow">
        {headerLinks.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <button
              onClick={() => handleClick(href)}
              className="flex cursor-pointer items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
            >
              {t(label)}
            </button>
          </li>
        ))}
        <li>
          <button
            className="flex cursor-pointer items-center pt-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
          >Playstation</button>
          <ul
            className="flex flex-col gap-2 cursor-pointer mt-1 px-5 ml-4 text-sm capitalize text-heading transition duration-200 hover:text-accent md:px-8"
          >
            <Link href='/'>Playstation 5</Link>
            <Link href='/'>Playstation 4</Link>
            <Link href='/'>Playstation 3</Link>
            <Link href='/'>Playstation 2</Link>
            <Link href='/'>Playstation 1</Link>
          </ul>
        </li>

        <li>
          <button
            className="flex cursor-pointer items-center pt-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
          >Nintendo</button>
          <ul
            className="flex flex-col gap-2 cursor-pointer mt-1 px-5 ml-4 text-sm capitalize text-heading transition duration-200 hover:text-accent md:px-8"
          >
            <Link href='/'>Nintendo Switch</Link>
            <Link href='/'>Nintendo 3DS</Link>
            <Link href='/'>Nintendo DS</Link>
            <Link href='/'>Gamecube</Link>
          </ul>
        </li>

        <li>
          <button
            className="flex cursor-pointer items-center pt-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
          >Xbox</button>
          <ul
            className="flex flex-col gap-2 cursor-pointer mt-1 px-5 ml-4 text-sm capitalize text-heading transition duration-200 hover:text-accent md:px-8"
          >
            <Link href='/'>Xbox Séries SIX</Link>
            <Link href='/'>Xbox One</Link>
            <Link href='/'>Xbox 360</Link>
          </ul>
        </li>

        <li>
          <button
            className="flex cursor-pointer items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
          >
            FUNKO POP & Figurine
          </button>
        </li>
      </ul>
    </DrawerWrapper>
  );
}
