import Link from "next/link"
import { siteSettings } from '@/config/site';
import { useTranslation } from 'next-i18next';
import { CopyRight } from "./copy-right";
import FooterPayement from "./footer-payment";

export const FooterBottomSection = () => {
    const {t} = useTranslation();
    return (
        <>
            <FooterPayement/>
            <CopyRight/>
        </>
    )
}