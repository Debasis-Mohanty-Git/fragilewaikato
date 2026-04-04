import React from 'react';
import { Home, Building2, Package, Warehouse } from 'lucide-react';

const FeatureBar = () => {
  const features = [
    {
      icon: <Home className="w-6 h-6 text-white shrink-0" />,
      title: "Home Moving",
      desc: "Safe & careful home relocations"
    },
    {
      icon: <Building2 className="w-6 h-6 text-white shrink-0" />,
      title: "Office Moving",
      desc: "Quick & efficient office moves"
    },
    {
      icon: <Package className="w-6 h-6 text-white shrink-0" />,
      title: "Packing Services",
      desc: "Secure packing by experts"
    },
    {
      icon: <Warehouse className="w-6 h-6 text-white shrink-0" />,
      title: "Storage Solutions",
      desc: "Clean & secure storage facilities"
    }
  ];

  const marqueeFeatures = [...features, ...features, ...features, ...features];

  return (
    <div className="absolute -bottom-16 left-0 right-0 z-20 pointer-events-none">
      <div className="w-full bg-black border-y border-gray-800 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] pointer-events-auto">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] border-l border-gray-800/80">
          {marqueeFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="group w-[85vw] sm:w-[45vw] md:w-[35vw] lg:w-[25vw] xl:w-[20vw] p-6 flex items-start gap-4 hover:bg-gray-900 transition-all cursor-pointer shrink-0 border-r border-gray-800/80"
            >
              <div className="bg-primary p-3 rounded-lg shadow-md transition-transform group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(211,47,47,0.5)]">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm lg:text-base leading-tight tracking-tight">
                  {feature.title}
                </span>
                <span className="text-gray-400 text-[0.75rem] leading-snug mt-1">
                  {feature.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
