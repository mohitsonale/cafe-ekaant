import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent font-medium tracking-[0.2em] text-sm uppercase mb-4">Visit Us</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-primary mb-10">
              Find your corner.
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#EFE0C4] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary mb-2">Location</h4>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    Survey No 209/4, Goodwill Enclave IV,<br />
                    Plot No 77, Kalyani Nagar,<br />
                    Pune, Maharashtra 411006
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#EFE0C4] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary mb-2">Hours</h4>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    Open Daily<br />
                    11:00 AM – 11:30 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#EFE0C4] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary mb-2">Contact</h4>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    099701 33633
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[#EFE0C4]">
              <p className="text-sm text-foreground/60 italic font-serif">
                * Work-from-cafe friendly • LGBTQ+ friendly • Dine-in & Takeaway
              </p>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[500px] w-full bg-[#EFE0C4] rounded-sm overflow-hidden shadow-lg relative grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.005213027028!2d73.90354767597895!3d18.54793726860427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b2d8b0c6a5%3A0x0!2sCafe+Ekaant!5e0!3m2!1sen!2sin!4v1700000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
