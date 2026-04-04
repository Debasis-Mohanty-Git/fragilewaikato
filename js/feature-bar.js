// Feature Bar JS - Generate Marquee Items
function initFeatureBar() {
  const marqueeTrack = document.getElementById('marquee-track');
  if (!marqueeTrack) return;

  const features = [
    { title: "Home Moving", desc: "Safe & careful home relocations", icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
    { title: "Office Moving", desc: "Quick & efficient office moves", icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>' },
    { title: "Packing Services", desc: "Secure packing by experts", icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>' },
    { title: "Storage Solutions", desc: "Clean & secure storage facilities", icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M22 8.35V20a2 2 0 01-2 2H4a2 2 0 01-2-2V8.35A2 2 0 013.26 6.5l8-3.2a2 2 0 011.48 0l8 3.2A2 2 0 0122 8.35z"/><path d="M6 18h12M6 14h12"/></svg>' }
  ];

  const allFeatures = [...features, ...features, ...features, ...features];
  allFeatures.forEach(f => {
    const card = document.createElement('div');
    card.className = "group w-[85vw] sm:w-[45vw] md:w-[35vw] lg:w-[25vw] xl:w-[20vw] p-6 flex items-start gap-4 hover:bg-gray-900 transition-all cursor-pointer shrink-0 border-r border-gray-800/80";
    card.innerHTML = `
      <div class="bg-primary p-3 rounded-lg shadow-md transition-transform group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(211,47,47,0.5)]">${f.icon}</div>
      <div class="flex flex-col">
        <span class="text-white font-bold text-sm lg:text-base leading-tight tracking-tight">${f.title}</span>
        <span class="text-gray-400 text-[0.75rem] leading-snug mt-1">${f.desc}</span>
      </div>`;
    marqueeTrack.appendChild(card);
  });
}
