import { siteSettings } from '@/config/site';
import Image from 'next/image';

export const FooterService = () => {
    return (
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 lg:my-8 lg:pt-3 lg:pb-5 gap-x-1 gap-y-5 lg:gap-2">
            {
                siteSettings.services.map((item, index) => (
                    <div
                    key={index}
                    className='grid grid-cols-3'
                    >
                        <div className='self-center text-center'>
                            {/* eslint-disable-next-line */}
                            <img
                            className='inline'
                            alt={item.alt}
                            src={item.imageUrl}
                            width={40}
                            height={40}
                            />
                        </div>
                        <div className='col-span-2'>
                            <p className='font-bold'>{item.title}</p>
                            <p className='text-sm mt-2'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}