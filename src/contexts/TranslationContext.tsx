import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TranslationContextType {
  language: 'id' | 'en';
  setLanguage: (lang: 'id' | 'en') => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.services': 'Layanan',
    'hero.title': 'Exaltbyte',
    'hero.subtitle': 'Setiap byte bukan sekadar data, tapi potensi inovasi tanpa batas',
    'hero.cta.primary': 'Mulai Inovasi',
    'hero.cta.secondary': 'Pelajari Lebih Lanjut',
    'about.title': 'Tentang Exaltbyte',
    'about.description': 'Kami mengubah setiap byte data menjadi solusi inovatif yang memberdayakan bisnis dan masyarakat',
    'services.title': 'Layanan Aplikasi',
    'services.subtitle': 'Container dengan template aplikasi bawaan',
    'services.database': 'Manajemen Database',
    'services.database.desc': 'cocok untuk kebutuhan testing dan proyek skala kecil',
    'services.workflow': 'Otomatisasi Workflow',
    'services.workflow.desc': 'otomatisasi workflow n8n untuk menyederhanakan proses bisnis Anda',
    'services.collaboration': 'Kolaborasi Tim',
    'services.collaboration.desc': 'setup kolaborasi lengkap dengan tools seperti Slack, Notion, dan dashboard custom',
    'services.chat': 'Aplikasi Chat',
    'services.chat.desc': 'aplikasi chat dengan fitur dan integrasi custom',
    'additional.title': 'Layanan Tambahan',
    'additional.devsecops': 'DevSecOps',
    'additional.devsecops.desc': 'layanan DevSecOps untuk memastikan aplikasi Anda aman dan compliant',
    'footer.innovation': 'Inovasi di Setiap Byte',
    'footer.rights': 'Hak Cipta Dilindungi'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'hero.title': 'Exaltbyte',
    'hero.subtitle': 'Every byte is not just data, but the potential for limitless innovation',
    'hero.cta.primary': 'Let\'s Innovate',
    'hero.cta.secondary': 'Learn More',
    'about.title': 'About Exaltbyte',
    'about.description': 'We transform every byte of data into innovative solutions that empower businesses and society',
    'services.title': 'Application Service',
    'services.subtitle': 'Container with built-in template application',
    'services.database': 'Database Management',
    'services.database.desc': 'suitable for testing needs and small-scale projects',
    'services.workflow': 'Workflow Automation',
    'services.workflow.desc': 'n8n workflow automation to streamline your business processes',
    'services.collaboration': 'Team Collaboration',
    'services.collaboration.desc': 'complete collaboration setup with tools like Slack, Notion, and custom dashboards',
    'services.chat': 'Chat Applications',
    'services.chat.desc': 'chat applications with custom features and integrations',
    'additional.title': 'Additional Services',
    'additional.devsecops': 'DevSecOps',
    'additional.devsecops.desc': 'DevSecOps services to ensure your applications are secure and compliant',
    'footer.innovation': 'Innovation in Every Byte',
    'footer.rights': 'All Rights Reserved'
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};
