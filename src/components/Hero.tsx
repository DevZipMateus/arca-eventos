import { ChefHat, Users, Coffee, Film } from 'lucide-react';
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('/lovable-uploads/1ef6e08b-5204-4473-aea5-282cac6ff853.png')`
    }}></div>
      
      {/* White overlay for better text readability */}
      <div className="absolute inset-0 bg-white/[0.22]"></div>
      
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
          <div className="animate-slide-in-left bg-white/[0.58] rounded-lg">
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-display font-semibold text-primary mb-6">
              ARCA EVENTOS E CATERING
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-4 leading-relaxed font-semibold">
              SERVIR BEM PARA SERVIR SEMPRE
            </p>
            <p className="mb-8 max-w-xl text-2xl text-left text-[#0e0c00]">
              Oferecemos uma experiência gastronômica satisfatória com soluções práticas 
              para sets de filmagem, eventos corporativos, camarins e muito mais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://wa.me/5511993808798" target="_blank" rel="noopener noreferrer" className="btn-hero">
                Solicitar Orçamento
              </a>
              <button onClick={() => document.querySelector('#servicos')?.scrollIntoView({
              behavior: 'smooth'
            })} className="btn-hero-outline">
                Nossos Serviços
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center animate-fade-in animate-delay-200">
                <Film size={32} className="mx-auto mb-2 text-primary bg-transparent" />
                <p className="text-sm font-medium text-primary">Sets de Filmagem</p>
              </div>
              <div className="text-center animate-fade-in animate-delay-400 bg-transparent">
                <Users className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-sm font-medium text-primary">Eventos Staff</p>
              </div>
              <div className="text-center animate-fade-in animate-delay-600">
                <ChefHat className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-sm font-medium text-primary">Camarins</p>
              </div>
              <div className="text-center animate-fade-in animate-delay-600">
                <Coffee className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-sm font-medium text-primary">Coffee Breaks</p>
              </div>
            </div>
          </div>

          {/* Right content - Logo showcase */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150"></div>
              <img src="/lovable-uploads/baa4ba21-4d18-486a-91ab-b4c13c020abf.png" alt="ARCA Eventos e Catering - Experiência Gastronômica de Qualidade" className="relative z-10 w-full max-w-md lg:max-w-lg h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;