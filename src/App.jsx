import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Full-width Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section className="bg-gray-50 py-24 px-6 lg:px-12 mt-12 md:mt-24">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Waikato Movers You Can Rely On</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Fragile Removals, our Waikato movers pride themselves on providing top-notch services to our customers across the North Island. From the moment you reach out to us, whether it’s for a quote or to schedule your move, we’re dedicated to making your experience exceptional. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our team’s expertise ensures that every aspect of your move is handled with care, precision, and professionalism. We go the extra mile to tailor our services to meet your unique needs, ensuring your belongings are safe and your move is seamless.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                More About Us
              </button>
            </div>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:ml-6">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/FxreEpo2wrk?rel=0" 
                title="Fragile Removals Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-24 px-6 lg:px-12">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">What We Do For You</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                As the #1 rated Waikato moving company, we provide a full suite of relocation solutions tailored to your specific needs, whether you are moving locally or across the North Island.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Residential Moves', desc: 'For seamless residential moving services in Waikato, trust our experienced team to make your home transition smooth and stress-free.' },
                { title: 'Commercial Relocations', desc: 'Optimise your business relocation with our professional commercial moving services in Waikato, designed to minimise downtime and disruption.' },
                { title: 'Storage Solutions', desc: 'Secure your belongings with our top-notch storage solutions in Waikato, perfect for both short-term and long-term needs.' },
                { title: 'Long Distance Moving', desc: 'For stress-free long-distance moving services in Waikato, rely on our comprehensive transport solutions to ensure safe and timely delivery.' },
                { title: 'Moving Boxes & Supplies', desc: 'Find all the moving boxes and supplies you need for a secure and organised move in Waikato with our premium packing materials.' },
                { title: 'Packing & Unpacking', desc: 'Ensure a hassle-free move with our expert packing and unpacking services in Waikato, designed to protect your belongings and simplify the process.' },
              ].map((svc, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{svc.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
                  <a href="#" className="inline-block mt-6 text-primary font-bold hover:underline">Read more &rarr;</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Real Footer */}
      <Footer />
    </div>
  );
}

export default App;
