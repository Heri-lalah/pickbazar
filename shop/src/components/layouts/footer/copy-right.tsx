import Link from "next/link"
import { siteSettings } from '@/config/site';
import { useTranslation } from 'next-i18next';

export const CopyRight = () => {
    const {t} = useTranslation();
    return (
        <div className="flex w-full flex-col px-5 md:px-10 lg:px-[50px] xl:px-16">
            <div className="my-1 flex w-full flex-col items-center p-0.5 lg:mt-0 lg:flex-row lg:justify-between lg:border-t-0">
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
    )
}