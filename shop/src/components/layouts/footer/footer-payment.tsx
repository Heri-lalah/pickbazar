import { siteSettings } from '@/config/site';
import { useTranslation } from 'next-i18next';

const FooterPayement = () => {
    const { t } = useTranslation('common');

    return (
        <div className='bg-black w-full'>
            <div className="text-white grid w-full grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3 p-2 lg:pb-4 xl:gap-3 px-5 md:px-10 lg:px-[50px] xl:px-16">
                <div>
                    <p className='mb-1'>{t('text-security-certificate')}</p>
                    <div className='flex flex-wrap gap-x-2 gap-y-1'>
                        {
                        siteSettings.securityPaymentCertificate.map((value) =>(
                            <img className='h-10 rounded' src={value.imageUrl} alt={value.title}/>
                        ))
                        }
                    </div>
                </div>

                <div>
                <p className='mb-1'>{t('text-delivery-method')}</p>
                <div className='flex flex-wrap gap-x-2 gap-y-1'>
                    {
                    siteSettings.deliveryMethod.map((value) =>(
                        <img className='h-10 rounded' src={value.imageUrl} alt={value.title}/>
                    ))
                    }
                </div>
                </div>

                <div>
                <p className='mb-1'>{t('text-accepted-payment-method')}</p>
                <div className='flex flex-wrap gap-x-2 gap-y-1'>
                    {
                    siteSettings.paymentMethod.map((value) =>(
                        <img className='h-10 rounded' src={value.imageUrl} alt={value.title}/>
                    ))
                    }
                </div>
                </div>
            </div>
        </div>
        )
};
export default FooterPayement;