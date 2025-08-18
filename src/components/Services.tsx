
import { Film, Users, Coffee, Package, Utensils, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Film,
      title: 'Catering para Sets de Filmagem',
      description: 'Alimentação especializada para equipes de produção audiovisual, com logística adaptada às necessidades do set.',
      features: ['Refeições durante as gravações', 'Lanches rápidos entre takes', 'Cardápio personalizado', 'Logística flexível']
    },
    {
      icon: Users,
      title: 'Catering para Staff de Eventos',
      description: 'Alimentação completa para equipes de eventos, garantindo energia e disposição durante todo o trabalho.',
      features: ['Coffee breaks profissionais', 'Refeições para equipe técnica', 'Serviço discreto', 'Horários flexíveis']
    },
    {
      icon: Utensils,
      title: 'Serviço de Camarins',
      description: 'Alimentação VIP para artistas e personalidades, com cardápios especiais e serviço de alta qualidade.',
      features: ['Cardápios personalizados', 'Restrições alimentares', 'Serviço diferenciado', 'Apresentação impecável']
    },
    {
      icon: Coffee,
      title: 'Coffee Breaks',
      description: 'Coffee breaks elaborados para reuniões, treinamentos e eventos corporativos de todos os portes.',
      features: ['Variedade de bebidas', 'Doces e salgados', 'Montagem no local', 'Diferentes formatos']
    },
    {
      icon: Package,
      title: 'Kit Lanches',
      description: 'Kits práticos e nutritivos para eventos, viagens corporativas e atividades externas.',
      features: ['Embalagens práticas', 'Opções saudáveis', 'Personalização da marca', 'Entrega pontual']
    },
    {
      icon: Star,
      title: 'Serviços Especiais',
      description: 'Soluções gastronômicas customizadas para necessidades específicas do seu evento ou produção.',
      features: ['Consultoria gastronômica', 'Cardápios temáticos', 'Serviço sob medida', 'Suporte completo']
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gradient mb-6">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções gastronômicas completas para diversos segmentos, 
            sempre com qualidade, praticidade e excelência no atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="service-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e receba uma proposta sob medida para o seu evento ou produção.
            </p>
            <a
              href="https://wa.me/5511993808798"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
