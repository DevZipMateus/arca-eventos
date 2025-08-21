
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Update page title and meta tags
    document.title = 'ARCA Eventos e Catering - Servir Bem Para Servir Sempre';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'ARCA Eventos e Catering oferece soluções gastronômicas para sets de filmagem, eventos corporativos, camarins e coffee breaks. Servir bem para servir sempre.');

    // Create Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'ARCA Eventos e Catering - Servir Bem Para Servir Sempre' },
      { property: 'og:description', content: 'ARCA Eventos e Catering oferece soluções gastronômicas para sets de filmagem, eventos corporativos, camarins e coffee breaks. Servir bem para servir sempre.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.arcaeventosecatering.com.br' },
      { property: 'og:image', content: '/lovable-uploads/baa4ba21-4d18-486a-91ab-b4c13c020abf.png' }
    ];

    ogTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existingTag) {
        existingTag = document.createElement('meta');
        existingTag.setAttribute('property', tag.property);
        document.head.appendChild(existingTag);
      }
      existingTag.setAttribute('content', tag.content);
    });

  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
