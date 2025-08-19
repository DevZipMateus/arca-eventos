
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de todas as imagens da galeria
  const galleryImages = [
    '/lovable-uploads/galeria/336439165_779462846568688_4518622171549050480_n.jpg',
    '/lovable-uploads/galeria/465474937_18466848691057447_2765191429648426526_n.jpg',
    '/lovable-uploads/galeria/468500288_18470917282057447_3527718952183678426_n.jpg',
    '/lovable-uploads/galeria/469273490_18472368616057447_4385499695974285503_n.jpg',
    '/lovable-uploads/galeria/469722258_18473516560057447_3672629544944607907_n.jpg',
    '/lovable-uploads/galeria/469970979_18473663920057447_5580207061137145090_n.jpg',
    '/lovable-uploads/galeria/470224411_18473877490057447_1356247322764821280_n.jpg',
    '/lovable-uploads/galeria/471266343_18475846012057447_8248872723800362630_n.jpg',
    '/lovable-uploads/galeria/473380726_18480204568057447_2429280264825451042_n.jpg',
    '/lovable-uploads/galeria/474150779_18480665566057447_4555980890227370393_n.jpg',
    '/lovable-uploads/galeria/474872485_18483856789057447_8390677519787013332_n.jpg',
    '/lovable-uploads/galeria/477108163_18484915549057447_2834531365042324268_n.jpg',
    '/lovable-uploads/galeria/481363851_18487473655057447_8633765935436229723_n.jpg',
    '/lovable-uploads/galeria/487456045_1041430751466214_6959370163894882222_n.jpg',
    '/lovable-uploads/galeria/487512188_1041240444818578_7416374761600852173_n.jpg',
    '/lovable-uploads/galeria/487823650_1041430651466224_7551427067136786754_n.jpg',
    '/lovable-uploads/galeria/488301752_1041240308151925_8566468601192299089_n.jpg',
    '/lovable-uploads/galeria/488467589_1041240701485219_3035562812654177704_n.jpg',
    '/lovable-uploads/galeria/530402904_18519274159057447_8596057511853780347_n.jpg'
  ];

  // Troca automática a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index} className={index === currentIndex ? 'block' : 'hidden'}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`Galeria ARCA ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 hover:opacity-0" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="left-4 bg-white/90 hover:bg-white" 
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)}
        />
        <CarouselNext 
          className="right-4 bg-white/90 hover:bg-white"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)}
        />
      </Carousel>
      
      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-110' 
                : 'bg-muted hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
