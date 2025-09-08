import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import { ArrowRight, Code2, Globe, Sparkles, Target, Users, Zap, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import {useState} from "react";


export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-green-400/20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logosvg.svg" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xl sm:text-2xl font-bold text-green-400">Exaltbyte</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
              <a href="#vision" className="text-gray-300 hover:text-green-400 transition-colors">Vision</a>
              <Link to="/portfolio" className="text-gray-300 hover:text-green-400 transition-colors">Portfolio</Link>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
                onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <nav className="md:hidden mt-4 flex flex-col space-y-4">
                <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors" onClick={toggleMenu}>Home</a>
                <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors" onClick={toggleMenu}>About</a>
                <a href="#vision" className="text-gray-300 hover:text-green-400 transition-colors" onClick={toggleMenu}>Vision</a>
                <Link to="/portfolio" className="text-gray-300 hover:text-green-400 transition-colors" onClick={toggleMenu}>Portfolio</Link>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors" onClick={toggleMenu}>Contact</a>
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
              <Sparkles className="w-4 h-4 mr-2" />
              Innovation in Every Byte
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-green-400 to-green-500 bg-clip-text text-transparent">
                Exaltbyte
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Setiap byte bukan sekadar data, tapi potensi inovasi tanpa batas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-6 text-lg"
              >
                Mulai Inovasi
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-400/50 text-green-400 hover:bg-green-400/10 px-8 py-6 text-lg"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-32 left-16 opacity-30">
          <div className="text-green-400 font-mono text-sm">
            {'{ innovation: true }'}
          </div>
        </div>
        <div className="absolute bottom-32 right-16 opacity-30">
          <div className="text-green-400 font-mono text-sm">
            {'<byte>potential</byte>'}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-green-400">Tentang</span> Exaltbyte
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kami mengubah setiap byte data menjadi solusi inovatif yang memberdayakan bisnis dan masyarakat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Teknologi Terdepan</h3>
                <p className="text-gray-300">
                  Memanfaatkan teknologi cutting-edge untuk menciptakan solusi yang efisien dan scalable
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Inovasi Berkelanjutan</h3>
                <p className="text-gray-300">
                  Terus berinovasi dalam setiap aspek pengembangan untuk menghadirkan nilai tambah maksimal
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Fokus Hasil</h3>
                <p className="text-gray-300">
                  Berkomitmen memberikan hasil terbaik yang measurable dan berdampak nyata bagi klien
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 relative bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-green-400">Visi</span> Kami
            </h2>
            
            <div className="bg-gray-900/30 border border-green-400/20 rounded-2xl p-12 backdrop-blur-sm">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Globe className="w-10 h-10 text-black" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-light text-gray-100 leading-relaxed mb-8">
                "Setiap byte bukan sekadar data, tapi potensi inovasi tanpa batas"
              </blockquote>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Kami percaya bahwa dalam setiap bit informasi terdapat kesempatan untuk menciptakan 
                solusi yang mengubah cara kerja, cara hidup, dan cara berinteraksi dengan teknologi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">100+</div>
              <div className="text-gray-300">Proyek Selesai</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">50+</div>
              <div className="text-gray-300">Klien Bahagia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">24/7</div>
              <div className="text-gray-300">Dukungan</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">99%</div>
              <div className="text-gray-300">Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-gray-900/30 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Mulai <span className="text-green-400">Inovasi</span> Bersama
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Siap mengubah ide Anda menjadi solusi digital yang powerful? Mari berkolaborasi!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-6 text-lg"
            >
              <Users className="mr-2 w-5 h-5" />
              Hubungi Kami
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-green-400/50 text-green-400 hover:bg-green-400/10 px-8 py-6 text-lg"
            >
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-green-400/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {/*<div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">*/}
              {/*  <Code2 className="w-5 h-5 text-black" />*/}
              {/*</div>*/}
              <img src="/logosvg.svg" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10" />

              <span className="text-xl font-bold text-green-400">Exaltbyte</span>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p className="mb-1">Innovation in Every Byte</p>
              <p>&copy; 2025 Exaltbyte. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}