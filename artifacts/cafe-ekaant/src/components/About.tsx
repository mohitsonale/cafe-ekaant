import { motion } from 'framer-motion';
import { Star, Clock, MapPin } from 'lucide-react';
import aboutImg from '@assets/about-pour.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background bg-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-accent font-medium tracking-[0.2em] text-sm uppercase mb-4">Our Story</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                A space where time slows down.
              </h3>
            </div>
            
            <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg">
              <p>
                Born from a desire to create a true sanctuary in the bustling heart of Kalyani Nagar. 
                <span className="font-serif italic font-normal text-primary"> Ekaant </span> 
                isn't just a place to grab a quick coffee—it's a beloved retreat designed for those 
                who seek solace.
              </p>
              <p>
                Whether you're a remote worker needing a quiet corner, a creator seeking inspiration, 
                or friends wanting to connect over a game of foosball or pool, we've curated every 
                detail to make you feel at home.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#EFE0C4]">
              <div>
                <div className="flex items-center gap-1.5 text-accent mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i === 4 ? 'fill-accent/30' : 'fill-accent'}`} />
                  ))}
                </div>
                <p className="text-3xl font-serif text-primary">4.4</p>
                <p className="text-sm text-foreground/60 tracking-wide mt-1">From 365+ reviews</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-xl font-serif text-primary">Open Daily</p>
                <p className="text-sm text-foreground/60 tracking-wide mt-1">11:00 AM – 11:30 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img 
                src={aboutImg} 
                alt="Coffee pour at Cafe Ekaant" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 border border-accent/20 rounded-sm -z-10" />
            <div className="absolute -top-6 -right-6 w-1/2 h-1/2 bg-[#EFE0C4]/50 rounded-sm -z-10" />
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -right-8 bottom-12 bg-card p-6 rounded-sm shadow-xl max-w-[200px] z-20"
            >
              <MapPin className="w-6 h-6 text-accent mb-3" />
              <p className="text-sm font-medium text-primary">Kalyani Nagar</p>
              <p className="text-xs text-foreground/60 mt-1">Pune's favorite quiet corner</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
