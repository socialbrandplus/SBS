
import { Project, ProjectCategory, Service } from './types';
import { 
  Code, 
  Megaphone, 
  Palette, 
  Smartphone, 
  BarChart, 
  Globe 
} from 'lucide-react';
import React from 'react';

// Images selected to look like real UI Screenshots matching the device frames

export const PROJECTS: (Project & { tech?: string[] })[] = [
  // --- MOBILE APPS (Vertical UI Images for Phone Mockup) ---
  {
    id: 1,
    title: "تطبيق 'فود ستيشن' - Food Station",
    category: ProjectCategory.MOBILE,
    image: "https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?q=80&w=800&auto=format&fit=crop", // Food App UI
    description: "تطبيق توصيل طعام متكامل ينافس كبرى التطبيقات. يدعم تتبع السائق، المحفظة الرقمية، ونظام ولاء العملاء.",
    year: "2024",
    tech: ["Flutter", "Firebase", "Google Maps API"],
    clientReview: {
      name: "أحمد العلي",
      role: "المدير العام",
      text: "تجربة المستخدم سلسة للغاية، وحققنا 50 ألف تحميل في أول شهر."
    },
    results: [{ label: "تحميلات", value: "+50k" }, { label: "مطعم مشترك", value: "200+" }]
  },
  {
    id: 2,
    title: "محفظة 'كاشي' - Cashy Wallet",
    category: ProjectCategory.MOBILE,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop", // Fintech App UI
    description: "تطبيق تكنولوجيا مالية (Fintech) لتحويل الأموال ودفع الفواتير. يتميز بأعلى معايير الأمان والتشفير.",
    year: "2024",
    tech: ["React Native", "Node.js", "Blockchain Integ."],
    clientReview: {
      name: "سارة حسن",
      role: "CTO",
      text: "الأمان والسرعة في التطبيق مذهلة. الفريق برمج نظاماً معقداً بواجهة بسيطة."
    },
    results: [{ label: "معاملات يومية", value: "$100k" }, { label: "مستخدم نشط", value: "20k" }]
  },
  {
    id: 3,
    title: "تطبيق 'عقاراتي' - Aqarati",
    category: ProjectCategory.MOBILE,
    image: "https://images.unsplash.com/photo-1581291518147-915f07a78330?q=80&w=800&auto=format&fit=crop", // Map Based App UI
    description: "منصة عقارية تربط البائعين بالمشترين مع ميزة المعاينة الافتراضية 360 درجة والبحث عبر الخريطة.",
    year: "2023",
    tech: ["Swift (iOS)", "Kotlin (Android)", "AR Core"],
    clientReview: {
      name: "م. محمد فوزي",
      role: "مطور عقاري",
      text: "ساعدنا التطبيق في بيع 40% من وحداتنا الجديدة عبر الإنترنت."
    },
    results: [{ label: "مبيعات", value: "$5M+" }, { label: "وحدات", value: "1500" }]
  },
  {
    id: 4,
    title: "تطبيق 'جيم برو' - Gym Pro",
    category: ProjectCategory.MOBILE,
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop", // Fitness App UI
    description: "تطبيق لياقة بدنية يوفر جداول تمارين مخصصة، تتبع السعرات، وربط مع الساعات الذكية.",
    year: "2023",
    tech: ["Flutter", "HealthKit", "AI Coach"],
    results: [{ label: "مشتركين", value: "12k" }, { label: "تقييم", value: "4.8" }]
  },
  {
    id: 5,
    title: "منصة 'طبيبي' - Tabibi",
    category: ProjectCategory.MOBILE,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", // Medical App UI
    description: "تطبيق لحجز العيادات والاستشارات الطبية عن بعد (Telemedicine) مع ملف صحي إلكتروني للمريض.",
    year: "2024",
    tech: ["React Native", "WebRTC", "HIPAA Compliant"],
    results: [{ label: "حجوزات", value: "+800/يوم" }, { label: "أطباء", value: "500" }]
  },

  // --- WEBSITES & SAAS (Horizontal UI Images for Laptop Mockup) ---
  {
    id: 6,
    title: "متجر 'إيليت' - Elite Fashion",
    category: ProjectCategory.DEVELOPMENT,
    image: "https://images.unsplash.com/photo-1481487484168-9b930d55208d?q=80&w=1200&auto=format&fit=crop", // Fashion E-commerce Desktop UI
    description: "متجر أزياء عالمي بتصميم فاخر. يدعم الدفع الدولي، تعدد العملات، والذكاء الاصطناعي في ترشيح الملابس.",
    year: "2024",
    tech: ["Next.js", "Shopify Plus", "Algolia"],
    clientReview: {
      name: "جيسيكا م.",
      role: "مديرة العلامة",
      text: "التصميم الجديد ضاعف مبيعاتنا الدولية بفضل سرعة الموقع وتجربة المستخدم."
    },
    results: [{ label: "معدل التحويل", value: "4.5%" }, { label: "زوار شهرياً", value: "200k" }]
  },
  {
    id: 7,
    title: "لوحة 'ألفا' - Alpha Dashboard",
    category: ProjectCategory.DEVELOPMENT,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", // Data Dashboard UI
    description: "نظام ERP سحابي لإدارة الموارد البشرية والمخزون للشركات الكبرى. تقارير لحظية ورسوم بيانية تفاعلية.",
    year: "2023",
    tech: ["Vue.js", "Laravel", "D3.js"],
    results: [{ label: "شركات مستخدمة", value: "50+" }, { label: "توفير وقت", value: "60%" }]
  },
  {
    id: 8,
    title: "منصة 'إتقان' التعليمية - Itqan",
    category: ProjectCategory.DEVELOPMENT,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop", // Education Platform UI
    description: "نظام إدارة تعلم (LMS) متكامل للمدارس والجامعات. فصول افتراضية، اختبارات أونلاين، وتقييم آلي.",
    year: "2023",
    tech: ["Moodle Custom", "React", "Zoom API"],
    results: [{ label: "طلاب", value: "10k+" }, { label: "اختبارات", value: "1M" }]
  },
  {
    id: 9,
    title: "موقع 'سكاي ترافل' - Sky Travel",
    category: ProjectCategory.DEVELOPMENT,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop", // Travel Website UI
    description: "بوابة حجز طيران وفنادق. محرك بحث سريع يقارن الأسعار من مئات المصادر لحظياً.",
    year: "2024",
    tech: ["Angular", "Amadeus API", "Node.js"],
    results: [{ label: "حجوزات", value: "$2M" }, { label: "سرعة البحث", value: "0.5s" }]
  },
  {
    id: 10,
    title: "بوابة 'أخبار اليوم' - News Portal",
    category: ProjectCategory.DEVELOPMENT,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop", // News Portal UI
    description: "موقع إخباري ضخم يتحمل ملايين الزوار. نظام إدارة محتوى (CMS) مخصص للصحفيين.",
    year: "2023",
    tech: ["WordPress VIP", "React Front", "AWS Cloud"],
    results: [{ label: "زيارات يومية", value: "500k" }, { label: "Uptime", value: "99.9%" }]
  },
  {
    id: 11,
    title: "موقع 'بيتك' - Baytak Real Estate",
    category: ProjectCategory.DEVELOPMENT,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop", // Real Estate Website UI
    description: "منصة لعرض العقارات الفاخرة مع جولات افتراضية وخرائط تفاعلية للمناطق.",
    year: "2024",
    tech: ["Next.js", "Mapbox", "Three.js"],
    results: [{ label: "عقارات مباعة", value: "200+" }, { label: "عملاء محتملين", value: "5k" }]
  },

  // --- BRANDING & DESIGN (Artistic/Square Images) ---
  {
    id: 12,
    title: "هوية 'روست' - Roast Coffee",
    category: ProjectCategory.DESIGN,
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop", // Coffee Branding
    description: "تصميم هوية بصرية كاملة لسلسلة مقاهي مختصة. شمل العمل: الشعار، الأكواب، الديكور الداخلي، والزي الموحد.",
    year: "2024",
    tech: ["Illustrator", "Photoshop", "Brand Strategy"],
    clientReview: {
      name: "كريم سامي",
      role: "المؤسس",
      text: "الهوية الجديدة ساعدتنا في التوسع وفتح 5 فروع جديدة في عام واحد."
    },
    results: [{ label: "انتشار العلامة", value: "عالي" }, { label: "فروع", value: "12" }]
  },
  {
    id: 13,
    title: "شركة 'نيكسس' - Nexus Tech",
    category: ProjectCategory.DESIGN,
    image: "https://images.unsplash.com/photo-1626785774573-4b799314348d?q=80&w=800&auto=format&fit=crop", // Modern Tech Branding
    description: "هوية بصرية لشركة ذكاء اصطناعي ناشئة. تصميم عصري يعكس التطور التقني والمستقبل.",
    year: "2023",
    tech: ["Blender 3D", "Figma", "After Effects"],
    results: [{ label: "جائزة تصميم", value: "A'Design" }, { label: "تمويل", value: "$3M" }]
  },
  {
    id: 14,
    title: "منتجات 'بيور' - Pure Cosmetics",
    category: ProjectCategory.DESIGN,
    image: "https://images.unsplash.com/photo-1556228720-1957be83c310?q=80&w=800&auto=format&fit=crop", // Cosmetics Packaging
    description: "تصميم عبوات وتغليف (Packaging) لمنتجات عناية بالبشرة. التركيز على البساطة والفخامة (Minimalism).",
    year: "2024",
    tech: ["Packaging Design", "3D Rendering"],
    results: [{ label: "مبيعات التجزئة", value: "+200%" }]
  },
  {
    id: 15,
    title: "مطعم 'سلطان' - Sultan Grill",
    category: ProjectCategory.DESIGN,
    image: "https://images.unsplash.com/photo-1541533848490-bc9c304c3d69?q=80&w=800&auto=format&fit=crop", // Restaurant Branding
    description: "إعادة بناء العلامة التجارية لمطعم مشويات عريق. دمجنا الأصالة مع الحداثة في الشعار وقوائم الطعام.",
    year: "2023",
    tech: ["Branding", "Menu Design", "Signage"],
    results: [{ label: "زيادة العملاء", value: "30%" }]
  },

  // --- MARKETING (Horizontal Analytics/Charts UI) ---
  {
    id: 16,
    title: "حملة 'الجمعة البيضاء' - Mega Sale",
    category: ProjectCategory.MARKETING,
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200&auto=format&fit=crop", // Analytics Graph UI
    description: "إدارة حملة إعلانية ضخمة لمتجر إلكتروني في موسم التخفيضات. استراتيجية متعددة القنوات (فيسبوك، جوجل، تيك توك).",
    year: "2023",
    tech: ["Meta Ads", "Google Analytics 4", "TikTok Ads"],
    clientReview: {
      name: "مدير التسويق",
      role: "Noon Seller",
      text: "حققنا 10 أضعاف العائد على الإنفاق الإعلاني (ROAS) خلال أسبوع واحد."
    },
    results: [{ label: "ROAS", value: "10.5x" }, { label: "مبيعات", value: "$150k" }]
  },
  {
    id: 17,
    title: "نمو 'عقار ماب' - Growth Hacking",
    category: ProjectCategory.MARKETING,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", // Growth Chart UI
    description: "استراتيجية SEO ومحتوى لتصدر نتائج البحث في مجال العقارات. تحسين معدل التحويل (CRO) لصفحات الهبوط.",
    year: "2024",
    tech: ["SEO Technical", "Semrush", "HubSpot"],
    results: [{ label: "Organic Traffic", value: "+400%" }, { label: "Leads", value: "3000/mo" }]
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "تصميم وبرمجة المواقع",
    description: "نطور مواقع ويب سريعة، آمنة، ومتجاوبة مع جميع الشاشات باستخدام أحدث التقنيات.",
    icon: "Globe"
  },
  {
    id: 2,
    title: "تطبيقات الهواتف الذكية",
    description: "تطبيقات Android و iOS احترافية تقدم تجربة مستخدم سلسة وأداء عالي.",
    icon: "Smartphone"
  },
  {
    id: 3,
    title: "التسويق الإلكتروني",
    description: "خطط تسويقية مدروسة، إدارة إعلانات ممولة، وتحسين الظهور في محركات البحث SEO.",
    icon: "Megaphone"
  },
  {
    id: 4,
    title: "الهوية البصرية والتصميم",
    description: "نصنع لعلامتك التجارية هوية بصرية مميزة تعلق في أذهان عملائك.",
    icon: "Palette"
  },
  {
    id: 5,
    title: "أنظمة برمجية خاصة",
    description: "حلول برمجية مخصصة للشركات (CRM, ERP) لتسهيل إدارة أعمالك.",
    icon: "Code"
  },
  {
    id: 6,
    title: "تحليل البيانات",
    description: "نساعدك على فهم أداء مشروعك من خلال تقارير وتحليلات دقيقة.",
    icon: "BarChart"
  }
];
