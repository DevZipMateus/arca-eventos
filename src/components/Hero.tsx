
import { ChefHat, Users, Coffee, Film } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <ChefHat size={120} className="text-primary" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <Coffee size={100} className="text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-in-left">
            <h1 className="text-gradient mb-6">
              ARCA EVENTOS E CATERING
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              SERVIR BEM PARA SERVIR SEMPRE
            </p>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl">
              Oferecemos uma experiência gastronômica satisfatória com soluções práticas 
              para sets de filmagem, eventos corporativos, camarins e muito mais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/5511993808798"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                Solicitar Orçamento
              </a>
              <button
                onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero-outline"
              >
                Nossos Serviços
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center animate-fade-in animate-delay-200">
                <Film className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-sm font-medium">Sets de Filmagem</p>
              </div>
              <div className="text-center animate-fade-in animate-delay-400">
                <Users className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-sm font-medium">Eventos Staff</p>
              </div>
              <div className="text-center animate-fade-in animate-delay-600">
                <ChefHat className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-sm font-medium">Camarins</p>
              </div>
              <div className="text-center animate-fade-in animate-delay-600">
                <Coffee className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-sm font-medium">Coffee Breaks</p>
              </div>
            </div>
          </div>

          {/* Right content - Logo showcase */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150"></div>
              <img 
                src="/lovable-uploads/baa4ba21-4d18-486a-91ab-b4c13c020abf.png" 
                alt="ARCA Eventos e Catering - Experiência Gastronômica de Qualidade" 
                className="relative z-10 w-full max-w-md lg:max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
