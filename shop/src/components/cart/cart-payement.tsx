import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Icons } from 'react-toastify';

const payementMethod = [
    'visa copie.jpeg',
    'master-card copie.jpeg',
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
            <p className="text-center">{t('text-payement-method')}</p>
            <div className='my-1 flex justify-center'>
                {
                    payementMethod.map(icon =>(
                        <Image
                        className='px-0.5'
                        key={icon} src={"/icons/" + icon}
                        alt={'icon-' + icon.split('.')[0]}
                        width={50}
                        height={30}
                        />
                    ))
                }
            </div>

            <div className='my-2'>
                <p className="text-center">{t('text-security-certificate')}</p>
                <div className='my-1 flex justify-center'>
                    {
                        securityCertificate.map(icon =>(
                        <Image
                        className='px-0.5'
                        key={icon} src={"/icons/" + icon}
                        alt={'icon-' + icon.split('.')[0]}
                        width={70}
                        height={30}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CartPayement;