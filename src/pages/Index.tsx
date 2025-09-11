import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {
    ArrowRight,
    Globe,
    Sparkles,
    Users,
    Zap,
    Menu,
    X,
    Database,
    Cloud,
    Shield
} from "lucide-react";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import { useTranslation } from '@/contexts/TranslationContext';
import { LanguageToggle } from '@/components/LanguageToggle';

export default function Index() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, language, setLanguage } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const services = [
        {
            title: t('services.database'),
            description: t('services.database.desc'),
            icon: Database,
            features: ["MySql", "PostgreSQL", "MongoDB", "Redis"],
            price: "Starting from $3",
            badge: "Popular"
        },
        {
            title: t('services.workflow'),
            description: t('services.workflow.desc'),
            icon: Zap,
            features: ["n8n", "Budibase", "Flowise", "Actifices"],
            price: "Starting from $3",
            badge: "New"
        },
        {
            title: t('services.collaboration'),
            description: t('services.collaboration.desc'),
            icon: Users,
            features: ["Rocket Chat", "Confluence", "Notion", "Affine"],
            price: "Starting from $3"
        },
        {
            title: t('services.chat'),
            description: t('services.chat.desc'),
            icon: Cloud,
            features: ["Chatwoot", "Gowa", "Golang WhatsApp"],
            price: "Starting from $3"
        }
    ];

    const additionalServices = [
        {
            title: t('additional.devsecops'),
            description: t('additional.devsecops.desc'),
            icon: Shield,
            price: "Ask For Price"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-green-400/20">
                <div className="container mx-auto sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img src="/logosvg.svg" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10"/>
                            <span className="text-xl sm:text-2xl font-bold text-green-400">Exaltbyte</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center lg:flex md:flex space-x-4 lg:space-x-8 ml-auto">
                            <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.home')}</a>
                            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.about')}</a>
                            <Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.services')}</Link>
                            <LanguageToggle />
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="flex space-x-2">
                            <button
                                className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 flex flex-col space-y-4">
                            <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors" onClick={toggleMenu}>{t('nav.home')}</a>
                            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors" onClick={toggleMenu}>{t('nav.about')}</a>
                            <Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors" onClick={toggleMenu}>{t('nav.services')}</Link>
                            <LanguageToggle />
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <Badge className="bg-green-400/10 text-green-400 border-green-400/30 px-4 py-2 text-sm">
                            <Sparkles className="w-4 h-4 mr-2"/>
                            Innovation in Every Byte
                        </Badge>

                        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-white via-green-400 to-green-500 bg-clip-text text-transparent">
                                {t('hero.title')}
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                            <Button
                                size="lg"
                                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-6 text-lg"
                            >
                                {t('hero.cta.primary')}
                                <ArrowRight className="ml-2 w-5 h-5"/>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-green-400/50 text-green-400 hover:bg-green-400/10 px-8 py-6 text-lg"
                            >
                                {t('hero.cta.secondary')}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-1 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-green-400">{t('about.title')}</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            {t('about.description')}
                        </p>
                    </div>
                </div>
            </section>

            <header className="py-20 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-green-400">{t('services.title')}</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </div>
            </header>

            {/* Main Services */}
            <section className="py-1">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <Card key={index}
                                  className="bg-gray-900/50 border-green-400/20 hover:border-green-400/40 transition-all duration-300 group">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center">
                                            <service.icon className="w-6 h-6 text-green-400"/>
                                        </div>
                                        {service.badge && (
                                            <Badge className="bg-green-400/20 text-green-400 border-green-400/30">
                                                {service.badge}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-4">{service.description}</p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-green-400 mb-2">Templates:</h4>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="text-lg text-gray-400 flex items-center">
                                                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-2xl font-bold text-green-400">{service.price}</p>
                                        </div>
                                        <Button
                                            size="sm"
                                            className="bg-green-400 hover:bg-green-500 text-black"
                                        >
                                            Get Started
                                            <ArrowRight className="ml-2 w-4 h-4"/>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-gradient-to-t from-gray-900/30 to-transparent">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="text-green-400">{t('additional.title')}</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto justify-items-center">
                        {additionalServices.map((service, index) => (
                            <Card key={index} className="bg-gray-900/50 border-green-400/20 p-6 w-full max-w-md">
                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-10 h-10 bg-green-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <service.icon className="w-5 h-5 text-green-400"/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                                        <p className="text-green-400 font-bold">{service.price}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-green-400/20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <img src="/logosvg.svg" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10"/>
                            <span className="text-xl font-bold text-green-400">Exaltbyte</span>
                        </div>

                        <div className="text-gray-400 text-center md:text-right">
                            <p className="mb-1">{t('footer.innovation')}</p>
                            <p>&copy; 2025 Exaltbyte. {t('footer.rights')}.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}