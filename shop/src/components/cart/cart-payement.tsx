import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Icons } from 'react-toastify';

const payementMethod = [
    'visa.jpeg',
    'master-card.jpeg',
    'maestro.jpeg',
    'american-express.jpeg',
    'cb.jpeg',
];

const securityCertificate = [
    'paiement-securise.jpeg',
    'visa.jpeg',
    'master-card.jpeg',
    'safe-key.jpeg',
    'pci-dss.jpeg'
];

const CartPayement = () => {
     const { t } = useTranslation('common');
    return (
        <div>
            <p className="text-center text-xs text-primary">{t('text-payement-method')}</p>
            <div className='mb-1 flex justify-center'>
                {
                    payementMethod.map(icon =>(
                        <Image
                        className='px-0.5'
                        key={icon} src={"/payment/" + icon}
                        alt={'payment-img-' + icon.split('.')[0]}
                        width={50}
                        height={30}
                        />
                    ))
                }
            </div>

            <div className='my-2'>
                <p className="text-center text-xs text-primary">{t('text-security-certificate')}</p>
                <div className='mb-2 flex justify-center'>
                    {
                        securityCertificate.map(icon =>(
                        <img
                        src={"/security_certificate/" + icon}
                        alt={'security_certificate-img-' + icon.split('.')[0]}
                        className='max-h-9'
                        />
                        // <Image
                        // key={icon}
                        // src={"/icons/" + icon}
                        // alt={'icon-' + icon.split('.')[0]}
                        // width={50}
                        // height={0}
                        // />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CartPayement;