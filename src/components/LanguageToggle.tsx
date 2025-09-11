import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
      className="border-green-400/50 text-green-400 hover:bg-green-400/10"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'id' ? 'EN' : 'ID'}
    </Button>
  );
};
