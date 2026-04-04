import React from 'react';
import QuoteForm from './QuoteForm';
import FeatureBar from './FeatureBar';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [
    '/hero-bg.png',
    '/carousel-1.png',
    '/carousel-2.png',
    '/carousel-3.png'
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100vh] pt-32 pb-48 lg:pt-48 lg:pb-64">
      <div className="absolute inset-0 z-0 bg-gray-900 overflow-hidden">
        {images.map((src, idx) => (
          <img 
            key={src}
            src={src} 
            alt={`Moving Truck ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="text-white space-y-6 lg:space-y-8">
            <h1 className="text-4xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Waikato Movers <br />
              <span className="text-white text-3xl lg:text-5xl mt-4 block font-bold">Hamilton & Cambridge Furniture & Office Movers</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-200 max-w-xl leading-relaxed font-light">
              Moving in Waikato? Fragile Removals provides professional furniture & office removals in Hamilton, Cambridge & across the wider Waikato region.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-lg shadow-[0_10px_20px_rgba(211,47,47,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0.5">
                GET A FREE QUOTE
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 active:translate-y-0.5 backdrop-blur-sm">
                OUR SERVICES
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <QuoteForm />
          </div>
        </div>
      </div>

      <FeatureBar />
    </section>
  );
};

export default HeroSection;
