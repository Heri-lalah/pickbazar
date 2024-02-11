import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from '@/components/layouts/menu/static-menu';
import { useAtom } from 'jotai';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { useMemo, useState } from 'react';
import GroupsDropdownMenu from '@/components/layouts/menu/groups-menu';
import { useHeaderSearch } from '@/layouts/headers/header-search-atom';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { locationAtom } from '@/lib/use-location';
import { MapPin } from '@/components/icons/map-pin';
import Button from '@/components/ui/button';
import LocationBasedShopForm from '@/components/form/location-based-shop-form';
import { useSettings } from '@/framework/settings';
import { ArrowDownIcon } from '@/components/icons/arrow-down';
import { SubHeader } from './sub-header';

const Search = dynamic(() => import('@/components/ui/search/search'));
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const Header = ({ layout }: { layout?: string }) => {
  const { t } = useTranslation('common');
  const { show, hideHeaderSearch } = useHeaderSearch();
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const [openDropdown, setOpenDropdown] = useState(false);
  const isHomePage = useIsHomePage();
  const isMultilangEnable =
    process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true' &&
    !!process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES;

  // useEffect(() => {
  //   if (!isHomePage) {
  //     hideHeaderSearch();
  //   }
  // }, [isHomePage]);
  const isFlattenHeader = useMemo(
    () => !show && isHomePage && layout !== 'modern',
    [show, isHomePage, layout]
  );

  const closeLocation = () => setOpenDropdown(false)

  return (
      <header
        className={cn(
          'site-header-with-search top-0 flex flex-col',
          {
            // '': isFlattenHeader,
            // 'sticky lg:fixed': isHomePage,
            // 'sticky shadow-sm border-b border-border-200': !isHomePage,
          }
        )}
      >
        <div className={cn('fixed inset-0 bg-black/50 -z-10 w-full h-[100vh]', openDropdown === true ? '' : 'hidden')} onClick={closeLocation}></div>

        <div
          className={cn(
            ' flex w-full transform-gpu items-center justify-between bg-light transition-transform duration-300 lg:h-22 lg:px-4 xl:px-8',
            {
              'lg:border-0 lg:shadow-none': isFlattenHeader,
              'lg:!bg-white': openDropdown,
            }
          )}
        >

          {/* Logo && Drodpdown menu */}
          <div className="flex flex-col lg:flex-row w-full items-center lg:w-auto grow-0 shrink-0 basis-auto">
            <Logo
              className={cn('pt-2 pb-3', !isMultilangEnable ? 'lg:mx-0' : 'ltr:ml-0 rtl:mr-0')}
            />

            <div className="hidden ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto xl:block">
              <GroupsDropdownMenu />
            </div>
          </div>

          {/* search section */}
          {(show || layout === 'standard' || layout === 'default' || layout === 'classic') && (
            <div className="mx-auto hidden w-full overflow-hidden px-10 lg:block xl:w-11/12 2xl:w-10/12">
              <Search label={t('text-search-label')} variant="minimal" />
            </div>
          )}
          {displayMobileHeaderSearch && (
            <div className="absolute top-0 block h-full w-full bg-light px-5 pt-1.5 ltr:left-0 rtl:right-0 md:pt-2 lg:hidden">
              <Search label={t('text-search-label')} variant="minimal" />
            </div>
          )}

          {/* join and button section */}
          <ul className="hidden shrink-0 items-center space-x-7 rtl:space-x-reverse lg:flex 2xl:space-x-10">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a
                href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 shrink-0 items-center justify-center rounded border border-transparent bg-accent px-3 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out hover:bg-accent-hover focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700"
              >
                {t('text-become-seller')}
              </a>
              <li>{isAuthorize ? <AuthorizedMenu /> : <JoinButton />}</li>
            </div>
          </ul>
        </div>

        <div className='bg-light hidden xl:flex'>
          <SubHeader/>
        </div>
      </header>
  );
};

export default Header;
