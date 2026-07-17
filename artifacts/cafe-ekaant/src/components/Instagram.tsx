import { motion } from 'framer-motion';
import { Instagram as InstaIcon } from 'lucide-react';
import i1 from '@assets/insta-1.jpg';
import i2 from '@assets/insta-2.jpg';
import i3 from '@assets/insta-3.jpg';
import i4 from '@assets/insta-4.jpg';
import i5 from '@assets/insta-5.jpg';
import i6 from '@assets/insta-6.jpg';

const images = [i1, i2, i3, i4, i5, i6];

export default function Instagram() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-4 text-primary hover:text-accent transition-colors inline-block"
          >
            <InstaIcon className="w-5 h-5" />
            <a href="#" className="font-medium tracking-widest text-sm uppercase">@cafeekaant</a>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-primary"
          >
            Follow Our Journey
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-0">
          {images.map((img, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group block"
            >
              <img 
                src={img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstaIcon className="w-8 h-8 text-[#FAFAF5]" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
