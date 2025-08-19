
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const handleInstagramClick = (e: React.MouseEvent) => {
    console.log('Instagram link clicked');
    console.log('URL: https://www.instagram.com/cateringarca/');
    // Let the default behavior proceed
  };

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="/lovable-uploads/baa4ba21-4d18-486a-91ab-b4c13c020abf.png" 
              alt="ARCA Eventos e Catering" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-accent-foreground/80 mb-4 leading-relaxed">
              Servir bem para servir sempre. Experiência gastronômica de qualidade para seus eventos e produções.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/cateringarca/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleInstagramClick}
                className="text-white hover:text-primary transition-all duration-300 transform hover:scale-110 cursor-pointer"
                aria-label="Instagram da ARCA Catering"
              >
                <Instagram size={28} />
              </a>
              <a
                href="mailto:arcaeventos@live.com"
                className="text-white hover:text-primary transition-all duration-300 transform hover:scale-110 cursor-pointer"
                aria-label="E-mail da ARCA Catering"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://wa.me/5511993808798"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-all duration-300 transform hover:scale-110 cursor-pointer"
                aria-label="WhatsApp da ARCA Catering"
              >
                <Phone size={28} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>Catering para Sets de Filmagem</li>
              <li>Catering para Staff de Eventos</li>
              <li>Serviço de Camarins</li>
              <li>Coffee Breaks</li>
              <li>Kit Lanches</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-accent-foreground/80">
              <p>Telefone: (11) 99380-8798</p>
              <p>E-mail: arcaeventos@live.com</p>
              <p>Endereço: Rua Mussum, 19</p>
              <p>CNPJ: 44.705.338/0001-14</p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            © 2024 ARCA Eventos e Catering. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
