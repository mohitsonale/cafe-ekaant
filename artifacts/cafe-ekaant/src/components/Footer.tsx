import { Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-[#FAFAF5] pt-24 pb-8 border-t border-[#3D2314]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">
          
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#" className="flex flex-col items-start group mb-6">
              <span className="font-serif text-3xl tracking-wider text-[#EFE0C4]">Ekaant</span>
            </a>
            <p className="font-devanagari text-lg text-accent mb-4">एकांत — Your quiet corner.</p>
            <p className="text-[#EFE0C4]/70 font-light leading-relaxed max-w-sm">
              A space crafted for deep work, meaningful connections, and the perfect cup of coffee.
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-serif text-xl mb-6 text-[#EFE0C4]">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Menu', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[#FAFAF5]/70 hover:text-accent transition-colors text-sm font-light tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-serif text-xl mb-6 text-[#EFE0C4]">Visit</h4>
            <address className="not-italic text-[#FAFAF5]/70 font-light text-sm space-y-2 mb-6">
              <p>Survey No 209/4, Goodwill Enclave IV,</p>
              <p>Plot No 77, Kalyani Nagar,</p>
              <p>Pune, Maharashtra 411006</p>
            </address>
            <p className="text-[#FAFAF5]/70 font-light text-sm mb-6">
              <span className="text-accent font-medium">Open Daily:</span> 11:00 AM – 11:30 PM
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#EFE0C4]/20 flex items-center justify-center text-[#EFE0C4] hover:bg-accent hover:border-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#EFE0C4]/20 flex items-center justify-center text-[#EFE0C4] hover:bg-accent hover:border-accent transition-colors">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-[#EFE0C4]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FAFAF5]/50 text-sm font-light">
            &copy; {currentYear} Cafe Ekaant. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#FAFAF5]/50 font-light">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
