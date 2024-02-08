import { useTranslation } from 'next-i18next';
import { siteSettings } from '@/config/site';
import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import SubscriptionWidget from '@/components/settings/subscribe-to-newsletter';
import { CloseIcon } from '../icons/close-icon';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <div className="flex w-full flex-col border-gray-800 bg-white px-5 md:px-10 lg:border-b-8 lg:px-[50px] xl:px-16">
      {/* Top */}

      <div className="grid w-full grid-cols-3 pt-3 md:grid-cols-5 lg:pt-3 lg:pb-5 xl:grid-cols-7 2xl:grid-cols-7">
        {
          siteSettings.footer.time_slot.day.map((day) => (
            <div key={day} className="border-2 flex flex-col text-center">
              <h3 className="mt-3 mb-1 font-semibold text-primary">
                {day}
              </h3>
              <div>
                {
                  day !== 'Dimanche' ? (
                    <div>
                      <p>{siteSettings.footer.time_slot.time}</p>
                      <p>Ouvert</p>
                    </div>
                  ): (
                    <p className='text-red-500 flex justify-center gap-2'>
                      <CloseIcon width={15}></CloseIcon>
                      <span>Fermé</span>
                    </p>)
                }
              </div>
            </div>
          ))
        }
      </div>

      <div className="grid w-full grid-cols-1 gap-4 pt-3 md:grid-cols-3 lg:pt-3 lg:pb-16 xl:grid-cols-5 xl:gap-8 2xl:grid-cols-6">
        <div className="flex flex-col">
          <div className="mt-1 mb-4 flex items-start">
            <Logo/>
          </div>

          <ul className="space-y-2 mt-2">
            <li className='text-sm not-italic text-primary'>
              <address className='not-italic'>
                <span className='mr-1'>Adresse :</span>
                {t(siteSettings.footer.address)}
              </address>
            </li>

            <li className="text-sm text-primary">
              <span className='mr-1'>E-mail :</span>
              <Link className='text-blue-500' href={"mailto:" + siteSettings.footer.email}>
                {t(siteSettings.footer.email)}
              </Link>
              <p className='m-0'>Réponse sous 48 heures</p>
            </li>

            <li className="text-sm text-primary">
              <span className='mr-1'>Téléphone :</span>
              <Link href={"tel:" + siteSettings.footer.phone} className='text-blue-500'>
                {t(siteSettings.footer.phone)}
              </Link>
              <p className='m-0'>(Appel non surtaxé)</p>
            </li>

            <li className="text-sm text-primary">
              <p>Horaire d'ouverture du lundi au samedi de 9h00 à 18h00</p>
            </li>
          </ul>


        </div>

        {siteSettings.footer.menus.map((menu, idx) => (
          <div className="flex flex-col" key={`${menu.title}-${idx}`}>
            <h3 className="mt-3 mb-4 font-semibold text-primary lg:mb-7">
              {t(menu.title)}
            </h3>

            <ul className="space-y-3">
              {menu.links.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary transition-colors hover:text-orange-500"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-full md:col-span-2 lg:col-auto">
          <SubscriptionWidget
            title="text-subscribe-now"
            description="text-subscribe-details"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-4 flex w-full flex-col items-center border-t border-gray-200 pt-2 pb-2 lg:mt-0 lg:flex-row lg:justify-between lg:border-t-0">
        <span className="order-2 text-sm text-heading lg:order-1">
          {t('text-copyright')} &copy; {new Date().getFullYear()}{' '}
          <Link
            className="font-bold text-heading transition-colors hover:text-accent"
            href={siteSettings.footer.copyright.href}
          >
            {siteSettings.footer.copyright.name}.
          </Link>{' '}
          {t('text-rights-reserved')}
          <span className='mx-1'>|</span>
          {siteSettings.footer.editedBy.text}
          <Link
            className="ml-1 font-bold text-heading transition-colors hover:text-accent"
            href={siteSettings.footer.editedBy.href}
          >
            {siteSettings.footer.editedBy.name}.
          </Link>
        </span>

        {/* {siteSettings.footer.payment_methods && (
          <div className="order-1 mb-5 flex items-center space-x-5 rtl:space-x-reverse lg:order-2 lg:mb-0">
            {siteSettings.footer.payment_methods.map((method, idx) => (
              <Link
                className="relative flex h-5 items-center overflow-hidden"
                key={`${method.url}-${idx}`}
                href={method.url}
              >

                <img src={method.img} className="max-h-full max-w-full" />
              </Link>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Footer;
