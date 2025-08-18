
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 99380-8798',
      href: 'https://wa.me/5511993808798'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'arcaeventos@live.com',
      href: 'mailto:arcaeventos@live.com'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Rua Mussum, 19',
      href: '#'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@cateringarca',
      href: 'https://instagram.com/cateringarca'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gradient mb-6">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender suas necessidades gastronômicas. 
            Entre em contato e solicite seu orçamento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.href !== '#' ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : '_self'}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Company Info */}
            <div className="mt-12 p-6 bg-card rounded-2xl border border-border">
              <h4 className="font-semibold text-foreground mb-4">Informações da Empresa</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium">Razão Social:</span> ARCA EVENTOS E CATERING</p>
                <p><span className="font-medium">CNPJ:</span> 44.705.338/0001-14</p>
                <p><span className="font-medium">Website:</span> www.arcaeventosecatering.com.br</p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="animate-fade-in animate-delay-400">
            <div className="bg-card rounded-2xl p-8 border border-border h-fit">
              <h3 className="text-2xl font-semibold mb-6">Solicite seu Orçamento</h3>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Pronto para oferecer uma experiência gastronômica excepcional no seu próximo evento ou produção?
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5511993808798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero w-full text-center block"
                  >
                    Conversar no WhatsApp
                  </a>
                  
                  <a
                    href="mailto:arcaeventos@live.com"
                    className="btn-hero-outline w-full text-center block"
                  >
                    Enviar E-mail
                  </a>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-3">O que incluir na sua mensagem:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Tipo de evento ou produção
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Data e horário do evento
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Número de pessoas
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Local do evento
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Serviços desejados
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
