
import { ProjectCategory } from './types';

export const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      consultant: 'Horus AI',
      contact: 'تواصل معنا',
      quote: 'تحدث معنا واتساب'
    },
    hero: {
      subtitle: 'شريكك التقني نحو العالمية',
      title_start: 'حول أفكارك إلى',
      title_gradient: 'واقع رقمي مذهل',
      description: 'نجمع بين الإبداع في التصميم والقوة في البرمجة والذكاء في التسويق لنقدم لك حلولاً متكاملة تضمن تفوق مشروعك عالمياً.',
      cta_portfolio: 'شاهد أعمالنا',
      cta_ai: 'تحدث مع حورس'
    },
    stats: {
      clients: 'عميل سعيد',
      projects: 'مشروع ناجح',
      experience: 'سنوات خبرة',
      awards: 'جائزة عالمية'
    },
    services: {
      title: 'خدماتنا المتكاملة',
      subtitle: 'حلول رقمية شاملة بمعايير عالمية',
      items: {
        web: { title: 'تصميم وبرمجة المواقع', desc: 'مواقع ويب سريعة، آمنة، ومتجاوبة مع جميع الشاشات.' },
        app: { title: 'تطبيقات الهواتف', desc: 'تطبيقات Android و iOS احترافية بتجربة مستخدم سلسة.' },
        marketing: { title: 'التسويق الإلكتروني', desc: 'خطط تسويقية مدروسة وتحسين الظهور في محركات البحث.' },
        identity: { title: 'الهوية البصرية', desc: 'نصنع لعلامتك التجارية هوية بصرية مميزة تعلق في الأذهان.' },
        software: { title: 'أنظمة برمجية', desc: 'حلول CRM و ERP مخصصة لتسهيل إدارة أعمالك.' },
        data: { title: 'تحليل البيانات', desc: 'تقارير دقيقة تساعدك على اتخاذ القرارات الصحيحة.' }
      },
      form: {
        title: 'تهيئة المشروع',
        subtitle: 'يرجى ملء البيانات التالية لتقديم عرض دقيق',
        name: 'اسمك الكريم',
        company: 'اسم الشركة (اختياري)',
        submit: 'إرسال التفاصيل عبر واتساب',
        cancel: 'إلغاء',
        questions: {
          web: {
            q1: 'نوع الموقع (متجر، تعريفي، مدونة؟)',
            q2: 'هل يوجد تصميم جاهز؟',
            q3: 'الميزانية المتوقعة ($)'
          },
          app: {
            q1: 'المنصة (Android, iOS, Both)؟',
            q2: 'شرح مختصر للفكرة',
            q3: 'الميزانية المتوقعة ($)'
          },
          marketing: {
            q1: 'الهدف (مبيعات، انتشار، زيارات)؟',
            q2: 'المنصات المستهدفة',
            q3: 'ميزانية الإعلانات الشهرية'
          },
          identity: {
            q1: 'اسم العلامة التجارية',
            q2: 'الألوان المفضلة',
            q3: 'نوع النشاط'
          },
          software: {
            q1: 'عدد المستخدمين المتوقع',
            q2: 'أهم المشاكل التي تريد حلها',
            q3: 'الميزانية التقريبية'
          },
          data: {
            q1: 'مصدر البيانات الحالي',
            q2: 'نوع التقارير المطلوبة',
            q3: 'دورية التقارير'
          }
        }
      }
    },
    portfolio: {
      title: 'قصص نجاح حقيقية',
      subtitle: 'تصفح أحدث مشاريعنا التقنية، حيث يلتقي التصميم بالوظيفة العملية.',
      categories: {
        [ProjectCategory.ALL]: 'الكل',
        [ProjectCategory.DEVELOPMENT]: 'مواقع ويب',
        [ProjectCategory.MARKETING]: 'تسويق',
        [ProjectCategory.DESIGN]: 'تصميم',
        [ProjectCategory.MOBILE]: 'تطبيقات'
      },
      view_details: 'معاينة المشروع'
    },
    ai: {
      badge: 'Powered by Horus AI',
      title: 'نظام حورس الذكي',
      subtitle: 'تحدث مع "حورس" لتحديد أفضل استراتيجية لمشروعك.',
      placeholder: 'اسأل حورس... (مثال: كيف أبدأ متجري الإلكتروني؟)',
      welcome: 'أهلاً بك! 👁️ أنا "حورس"، المستشار الذكي لشركة سوشيال براند. أنا هنا لتحليل احتياجاتك واقتراح الحل الأمثل. كيف يمكنني مساعدتك؟',
      error: 'عذراً، حدث خطأ في الاتصال بنظام حورس. يرجى المحاولة لاحقاً.'
    },
    contact: {
      title: 'ابدأ مشروعك العالمي',
      subtitle: 'فريقنا جاهز لتحويل أفكارك إلى واقع. تواصل معنا مباشرة.',
      phone: 'اتصل بنا / واتساب',
      email: 'البريد الإلكتروني',
      location: 'العنوان',
      address_text: 'مصر، محافظة دمياط',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        message: 'تفاصيل المشروع',
        submit: 'بدء المحادثة واتساب',
        success_title: 'شكراً لك!',
        success_msg: 'تم استلام رسالتك بنجاح.'
      }
    },
    footer: {
      cta_title: 'هل أنت جاهز لإطلاق مشروعك القادم؟',
      cta_btn: 'احصل على استشارة مجانية',
      desc: 'نبني مستقبلاً رقمياً لعلامتك التجارية. خبراء في البرمجة والتسويق الرقمي.',
      links: 'روابط سريعة',
      company: 'الشركة',
      contact_info: 'بيانات التواصل',
      rights: 'جميع الحقوق محفوظة.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      consultant: 'Horus AI',
      contact: 'Contact',
      quote: 'Chat on WhatsApp'
    },
    hero: {
      subtitle: 'Your Global Tech Partner',
      title_start: 'Transform Ideas into',
      title_gradient: 'Digital Reality',
      description: 'We combine creative design, powerful development, and smart marketing to provide integrated solutions that guarantee your project global success.',
      cta_portfolio: 'Our Work',
      cta_ai: 'Talk to Horus'
    },
    stats: {
      clients: 'Happy Clients',
      projects: 'Projects Done',
      experience: 'Years Exp.',
      awards: 'Global Awards'
    },
    services: {
      title: 'Integrated Services',
      subtitle: 'Comprehensive digital solutions with global standards',
      items: {
        web: { title: 'Web Development', desc: 'Fast, secure, and responsive websites for all screens.' },
        app: { title: 'Mobile Apps', desc: 'Professional Android & iOS apps with seamless UX.' },
        marketing: { title: 'Digital Marketing', desc: 'Strategic marketing plans and SEO optimization.' },
        identity: { title: 'Visual Identity', desc: 'Distinctive branding that sticks in customers minds.' },
        software: { title: 'Custom Software', desc: 'Tailored CRM & ERP solutions for your business.' },
        data: { title: 'Data Analysis', desc: 'Accurate reports to help you make the right decisions.' }
      },
      form: {
        title: 'Project Configuration',
        subtitle: 'Please fill in the details for an accurate quote',
        name: 'Your Name',
        company: 'Company Name (Optional)',
        submit: 'Send Details via WhatsApp',
        cancel: 'Cancel',
        questions: {
          web: {
            q1: 'Site Type (Store, Corporate, Blog)?',
            q2: 'Do you have a design?',
            q3: 'Expected Budget ($)'
          },
          app: {
            q1: 'Platform (Android, iOS, Both)?',
            q2: 'Brief idea description',
            q3: 'Expected Budget ($)'
          },
          marketing: {
            q1: 'Goal (Sales, Awareness, Traffic)?',
            q2: 'Target Platforms',
            q3: 'Monthly Ad Budget'
          },
          identity: {
            q1: 'Brand Name',
            q2: 'Preferred Colors',
            q3: 'Business Activity'
          },
          software: {
            q1: 'Expected User Count',
            q2: 'Main problems to solve',
            q3: 'Approximate Budget'
          },
          data: {
            q1: 'Current Data Source',
            q2: 'Required Report Types',
            q3: 'Report Frequency'
          }
        }
      }
    },
    portfolio: {
      title: 'Success Stories',
      subtitle: 'Browse our latest technical projects, where design meets functionality.',
      categories: {
        [ProjectCategory.ALL]: 'All',
        [ProjectCategory.DEVELOPMENT]: 'Websites',
        [ProjectCategory.MARKETING]: 'Ads',
        [ProjectCategory.DESIGN]: 'Brand',
        [ProjectCategory.MOBILE]: 'Apps'
      },
      view_details: 'View Project'
    },
    ai: {
      badge: 'Powered by Horus AI',
      title: 'Horus Intelligent System',
      subtitle: 'Chat with "Horus" to define the best strategy for your project.',
      placeholder: 'Ask Horus... (e.g., How do I start my e-store?)',
      welcome: 'Welcome! 👁️ I am "Horus", Social Brand\'s AI Consultant. I am here to analyze your needs and suggest the optimal solution. How can I assist you?',
      error: 'Sorry, connection error with Horus System. Please try again later.'
    },
    contact: {
      title: 'Start Your Global Project',
      subtitle: 'Our team is ready to turn your ideas into reality. Chat with us now.',
      phone: 'Call / WhatsApp',
      email: 'Email',
      location: 'Headquarters',
      address_text: 'Damietta, Egypt',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Project Details',
        submit: 'Start WhatsApp Chat',
        success_title: 'Thank You!',
        success_msg: 'Message received successfully.'
      }
    },
    footer: {
      cta_title: 'Ready to launch your next big project?',
      cta_btn: 'Get Free Consultation',
      desc: 'Building a digital future for your brand. Experts in development and digital marketing.',
      links: 'Quick Links',
      company: 'Company',
      contact_info: 'Contact Info',
      rights: 'All rights reserved.'
    }
  }
};
