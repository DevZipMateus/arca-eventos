
import React from 'react';
import ImageCarousel from './ImageCarousel';

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos e eventos que realizamos com excelência e dedicação
          </p>
        </div>
        
        <div className="animate-scale-in">
          <ImageCarousel />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            "Cada evento é único e merece nossa atenção especial"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
