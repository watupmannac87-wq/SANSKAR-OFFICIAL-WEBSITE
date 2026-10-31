import { Project, Service, ProcessStep, ValueProp } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'SANSKAR',
  displayName: 'Sanskar',
  title: 'Freelance Website Designer & Developer',
  location: 'Pune, Maharashtra, India',
  phone: '+91 7276650422',
  phoneDisplay: '+91 7276650422',
  email: 'sanskarhatkar8@gmail.com',
  whatsappUrl: 'https://wa.me/917276650422',
  brandPositioning: 'Modern websites for ambitious small businesses.',
  tagline: 'Your Business Deserves a Better Website.',
  intro:
    'I help restaurants, cafes, salons, hotels, and small businesses build beautiful, modern websites that strengthen their online presence and make it easier for customers to connect with them.',
  aboutHeading: 'A Little About Me',
  aboutParagraphs: [
    "Hey, I'm Sanskar, an independent website designer based in Pune, India.",
    'I enjoy creating modern and visually appealing websites for businesses. My focus is on clean design, smooth user experiences, mobile responsiveness, and helping businesses establish a professional online presence.',
    'I work with businesses to understand their needs and turn their ideas into attractive digital experiences.',
  ],
  targetAudiences: [
    'Restaurants and cafes',
    'Hotels and hospitality businesses',
    'Salons and barbershops',
    'Local businesses',
    'Startups and entrepreneurs',
    'International small businesses',
  ],
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'aryan-biryani',
    name: 'ARYAN BIRYANI AND TANDOOR',
    category: 'Restaurant Website Design',
    description:
      'A modern restaurant website concept designed to showcase the restaurant, food offerings, and essential customer information.',
    image: '/src/assets/images/mockup_restaurant_showcase_1793433223351.jpg',
    demoUrl: 'https://aryan-biryani-demo.preview',
    isDemo: true,
    tags: ['Restaurant & Dining', 'Menu Display', 'Reservation Flow', 'Mobile Responsive'],
    features: [
      'Interactive culinary menu with dietary and spice level indicators',
      'Instant table booking and WhatsApp order inquiry trigger',
      'Google Maps directions, opening hours, and contact details',
      'Mouth-watering photography showcase with responsive cards',
    ],
    type: 'restaurant',
  },
  {
    id: 'denim-salon',
    name: 'DENIM UNISEX SALON',
    category: 'Salon Website Design',
    description:
      'A stylish salon website concept designed to present salon services and create a polished online presence.',
    image: '/src/assets/images/mockup_salon_showcase_1793433223495.jpg',
    demoUrl: 'https://denim-salon-demo.preview',
    isDemo: true,
    tags: ['Salon & Beauty', 'Services & Pricing', 'Online Booking', 'Editorial Styling'],
    features: [
      'Complete catalog of hair, beard, styling, and skin treatments',
      'Transparent pricing matrix and package breakdown',
      'Direct WhatsApp booking integration for appointments',
      'Editorial lookbook gallery and team stylist presentation',
    ],
    type: 'salon',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'business-design',
    title: 'Business Website Design',
    shortDesc: 'Professional websites that help businesses establish an online presence.',
    iconName: 'Building2',
    deliverables: [
      'Custom brand-aligned visual design',
      'Clear value propositions & trust signals',
      'Contact forms & conversion points',
      'Google Maps & business info integration',
    ],
  },
  {
    id: 'restaurant-design',
    title: 'Restaurant Website Design',
    shortDesc:
      'Modern restaurant websites featuring menus, food galleries, contact details, and location information.',
    iconName: 'UtensilsCrossed',
    deliverables: [
      'Digital interactive menu layouts',
      'High-impact food & ambience galleries',
      'Table reservations & direct ordering links',
      'Opening hours, location & parking details',
    ],
  },
  {
    id: 'salon-design',
    title: 'Salon Website Design',
    shortDesc:
      'Attractive websites showcasing services, pricing, galleries, and contact information.',
    iconName: 'Scissors',
    deliverables: [
      'Structured service menus with clear pricing',
      'Lookbook & haircut portfolio galleries',
      'Direct WhatsApp & phone booking triggers',
      'Customer review showcases & hygiene standards',
    ],
  },
  {
    id: 'landing-page',
    title: 'Landing Page Design',
    shortDesc:
      'Modern landing pages designed to present a product, service, or business clearly.',
    iconName: 'Flame',
    deliverables: [
      'High-converting single-page layout',
      'Compelling hero copy presentation',
      'Product/service feature breakdown',
      'Focused single call-to-action flow',
    ],
  },
  {
    id: 'responsive-development',
    title: 'Responsive Website Development',
    shortDesc:
      'Websites designed to work smoothly across mobile phones, tablets, and desktops.',
    iconName: 'Smartphone',
    deliverables: [
      'Pixel-perfect mobile, tablet & desktop responsiveness',
      'Fast-loading clean modern code',
      'Smooth navigation & tap-friendly UI',
      'Cross-browser tested & verified',
    ],
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortDesc:
      'Improve the visual appearance, usability, and mobile experience of existing websites.',
    iconName: 'RefreshCw',
    deliverables: [
      'Visual aesthetic overhaul to modern standards',
      'Improved mobile responsiveness & speed',
      'Clutter removal & content restructuring',
      'Better customer engagement & contact flow',
    ],
  },
];

export const WHY_WORK_WITH_ME: ValueProp[] = [
  {
    id: 'modern-creative',
    title: 'Modern and creative designs',
    description:
      'Distinctive, bespoke aesthetics that look like an international design studio rather than generic cookie-cutter templates.',
    icon: 'Palette',
  },
  {
    id: 'mobile-friendly',
    title: 'Mobile-friendly experiences',
    description:
      'Engineered with mobile-first thinking so smartphone visitors experience fast, seamless, and intuitive navigation.',
    icon: 'SmartphoneCheck',
  },
  {
    id: 'attention-detail',
    title: 'Attention to detail',
    description:
      'Precise typography, balanced whitespace, clean alignments, and refined color contrast that inspire customer trust.',
    icon: 'Sparkles',
  },
  {
    id: 'clear-comm',
    title: 'Clear communication',
    description:
      'Direct, transparent, and prompt updates at every stage of the project through WhatsApp, phone, or email.',
    icon: 'MessageSquareText',
  },
  {
    id: 'tailored-business',
    title: 'Designs tailored to each business',
    description:
      'Every layout is thoughtfully crafted around your unique business personality, local market, and target customers.',
    icon: 'Target',
  },
  {
    id: 'personal-attention',
    title: 'Personal attention to every project',
    description:
      'You work directly with me from initial concept to launch—no middlemen, no outsourcing, no agency bureaucracy.',
    icon: 'UserCheck',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understand the business, its goals, and website requirements.',
    deliverables: ['Briefing & goals discussion', 'Content & asset collection', 'Structure & site architecture outline'],
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create a modern visual design tailored to the business.',
    deliverables: ['Custom visual layouts & typography', 'Mobile & desktop design previews', 'Revisions & design approval'],
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build a responsive and functional website.',
    deliverables: ['Clean, high-performance code', 'Interactive menus, maps & contact links', 'Cross-device responsiveness check'],
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Test the website and help publish it online.',
    deliverables: ['Final quality & speed inspection', 'Domain & hosting configuration help', 'Handover & post-launch support'],
  },
];
