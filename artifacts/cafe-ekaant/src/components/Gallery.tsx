import { motion } from 'framer-motion';
import g1 from '@assets/gallery-1.jpg';
import g2 from '@assets/gallery-2.jpg';
import g3 from '@assets/gallery-3.jpg';
import g4 from '@assets/gallery-4.jpg';
import g5 from '@assets/gallery-5.jpg';
import g6 from '@assets/gallery-6.jpg';

export default function Gallery() {
  const images = [
    { src: g1, alt: "Coffee artistry", className: "md:col-span-2 md:row-span-2" },
    { src: g2, alt: "Cozy seating nook", className: "md:col-span-1 md:row-span-1" },
    { src: g3, alt: "Pool table", className: "md:col-span-1 md:row-span-2" },
    { src: g4, alt: "Food plating", className: "md:col-span-1 md:row-span-1" },
    { src: g5, alt: "Window seat", className: "md:col-span-1 md:row-span-1" },
    { src: g6, alt: "Evening ambiance", className: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background bg-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-accent font-medium tracking-[0.2em] text-sm uppercase mb-4"
            >
              The Space
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-primary"
            >
              Every corner has a story.
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/70 font-light max-w-sm md:text-right"
          >
            Find your perfect spot, whether it's by the window with your laptop, or around the pool table with friends.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`overflow-hidden rounded-sm relative group ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-[#FAFAF5] font-serif tracking-widest uppercase text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
