
const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5511993808798"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 ease-in-out transform hover:scale-110 animate-pulse cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/e25dbf4a-3f6c-4ea0-812e-adc108eb3e0c.png" 
        alt="WhatsApp" 
        className="w-12 h-12"
      />
      <div className="absolute -top-14 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Falar no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
