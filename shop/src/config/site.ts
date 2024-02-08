import { Routes } from '@/config/routes';
import { PaymentGateway } from '@/types';

export const siteSettings = {
  name: 'SWITH GAMING',
  description: '',
  logo: {
    url: '/logo.jpg',
    alt: 'Swith-gaming',
    href: '/grocery',
    width: 200,
    height: 70,
  },
  defaultLanguage: 'fr',
  currencyCode: 'EUR',
  product: {
    placeholderImage: '/product-placeholder.svg',
    cardMaps: {
      grocery: 'Neon',
      furniture: 'Neon',
      bag: 'Neon',
      makeup: 'Neon',
      book: 'Neon',
      medicine: 'Neon',
      default: 'Neon',
    },
  },
  authorizedLinks: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },
    { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
  ],
  authorizedLinksMobile: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },
    { href: Routes.cards, label: 'profile-sidebar-my-cards' },
    { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    { href: Routes.questions, label: 'profile-sidebar-my-questions' },
    { href: Routes.refunds, label: 'text-my-refunds' },
    { href: Routes.reports, label: 'profile-sidebar-my-reports' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
    { href: Routes.changePassword, label: 'profile-sidebar-password' },
  ],
  dashboardSidebarMenu: [
    {
      href: Routes.profile,
      label: 'profile-sidebar-profile',
    },
    {
      href: Routes.changePassword,
      label: 'profile-sidebar-password',
    },
    {
      href: Routes.orders,
      label: 'profile-sidebar-orders',
    },
    {
      href: Routes.downloads,
      label: 'profile-sidebar-downloads',
    },
    {
      href: Routes.wishlists,
      label: 'profile-sidebar-my-wishlist',
    },
    {
      href: Routes.questions,
      label: 'profile-sidebar-my-questions',
    },
    {
      href: Routes.refunds,
      label: 'text-my-refunds',
    },
    {
      href: Routes.reports,
      label: 'profile-sidebar-my-reports',
    },
    {
      href: Routes.cards,
      label: 'profile-sidebar-my-cards',
      // MultiPayment: Make it dynamic or from mapper
      cardsPayment: [PaymentGateway.STRIPE],
    },
    {
      href: Routes.help,
      label: 'profile-sidebar-help',
    },
    {
      href: Routes.logout,
      label: 'profile-sidebar-logout',
    },
  ],
  sellingAdvertisement: {
    image: {
      src: '/selling.png',
      alt: 'Selling Advertisement',
    },
  },
  cta: {
    mockup_img_src: '/mockup-img.png',
    play_store_link: '/',
    app_store_link: '/',
  },
  footer: {
    copyright: {
      name: 'SWITCH GAMING',
      href: 'https://redq.io/',
    },
    editedBy : {
      text :'Site édité par la société',
      name : 'CLICK INC',
      href: '/',
    },
    address: '26 Rue des Arbres 25400 Audincourt France',
    email: 'contact@switch-gaming.com',
    phone: '09 83 52 33 55',
    time_slot :
      {
        day : ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        time: '09H - 18H',
      },
    menus: [
      {
        title: 'Informations légales',
        links: [
          {
            name : "Mentions légales",
            href: '/',
          },
          {
            name : "Conditions générales d’utilisation (CGU)",
            href: '/',
          },
          {
            name : "Conditions générales de vente (CGV)",
            href: '/',
          },
          {
            name : "Politique de confidentialité",
            href: '/',
          },
          {
            name : "Politique de garantie",
            href: '/',
          },
          {
            name : "Politique de Propriété Intellectuelle",
            href: '/',
          }
        ],
      },
      {
        title: 'Informations Commerciales',
        links: [
          {name: "Politique de livraison", href: "/"},
          {name: "Politique de retour", href: "/"},
          {name: "Modalités de remboursement", href: "/"},
          {name: "Modes de paiement", href: "/"},
          {name: "Conditions de facturation", href: "/"},
          {name: "Programme de fidélité", href: "/"}
        ],
      },
      {
        title: 'Service Clients',
        links: [
          {name: "Centre d'aide", href: "/"},
          {name: "Paiements sécurisés ", href: "/"},
          {name: "Contact", href: "/"},
          {name: "Bricole+ ", href: "/"},
          {name : "Demande de réparation ", href: "/"},
        ],
      },
      {
        title : "Qui nous sommes ?",
        links : [
          {name: "À propos de nous", href: "/"},
          {name: "Emploi", href: "/"},
          {name: "Blog", href: "/"},
         	{name: "Presse", href: "/"},
        ],
      }
    ],
    payment_methods: [
      {
        img: '/payment/visa.jpeg',
        url: '/',
      },
      {
        img: '/payment/master-card.jpeg',
        url: '/',
      },
      {
        img: '/payment/maestro.jpeg',
        url: '/',
      },
      {
        img: '/payment/american-express.jpeg',
        url: '/',
      },
      {
        img: '/payment/cb.jpeg',
        url: '/',
      },
    ],
  },
};
