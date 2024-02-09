import { siteSettings } from '@/config/site';
import { useTranslation } from 'next-i18next';

const FooterPayement = () => {
    const { t } = useTranslation('common');

    return (
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3 py-4 lg:mb-4 xl:gap-3">
            <div>
                <p className='mb-1'>{t('text-security-certificate')}</p>
                <div className='flex flex-wrap gap-x-2 gap-y-1'>
                    {
                    siteSettings.securityPaymentCertificate.map((value, index) =>(
                        //eslint-disable-next-line
                        <img key={index} className='h-8 md:h-10 rounded' src={value.imageUrl} alt={value.title}/>
                    ))
                    }
                </div>
            </div>

            <div className='flex md:justify-center'>
                <div>
                    <p className='mb-1'>{t('text-delivery-method')}</p>
                    <div className='flex flex-wrap gap-x-2 gap-y-1'>
                        {
                        siteSettings.deliveryMethod.map((value, index) =>(
                            //eslint-disable-next-line
                            <img key={index} className='h-8 md:h-10 rounded' src={value.imageUrl} alt={value.title}/>
                        ))
                        }
                    </div>
                </div>
            </div>

            <div>
            <p className='mb-1'>{t('text-accepted-payment-method')}</p>
                <div className='flex flex-wrap gap-x-2 gap-y-1'>
                    {
                    siteSettings.paymentMethod.map((value, index) =>(
                        //eslint-disable-next-line
                        <img key={index} className='h-6 md:h-8 lg:h-10 rounded' src={value.imageUrl} alt={value.title}/>
                    ))
                    }
                </div>
            </div>
        </div>
        )
};
export default FooterPayement;