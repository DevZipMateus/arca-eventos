
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gradient mb-6">Sobre a ARCA</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em catering para diversos segmentos, oferecendo soluções 
            gastronômicas personalizadas com excelência e praticidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="service-card text-center animate-fade-in animate-delay-200">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Oferecer uma experiência gastronômica satisfatória com soluções práticas 
              para diversos segmentos, sempre priorizando qualidade e satisfação do cliente.
            </p>
          </div>

          {/* Visão */}
          <div className="service-card text-center animate-fade-in animate-delay-400">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser a melhor empresa de catering brasileira em buffet sem estrutura local 
              até 2030, referência em inovação e qualidade no segmento.
            </p>
          </div>

          {/* Valores */}
          <div className="service-card text-center animate-fade-in animate-delay-600">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nosso Lema</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Servir bem para servir sempre" - este é o princípio que norteia todas as 
              nossas ações e garante a excelência em cada serviço prestado.
            </p>
          </div>
        </div>

        {/* Company info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl font-semibold mb-6">Por que escolher a ARCA?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experiência especializada em sets de filmagem</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Atendimento personalizado para eventos corporativos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Soluções práticas sem necessidade de estrutura local</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cardápios diversificados e personalizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Equipe profissional qualificada</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Compromisso com prazos e qualidade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
