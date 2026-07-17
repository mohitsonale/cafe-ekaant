import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Aishwarya Dere",
    text: "We visited Ekaant for a work-from-café day, and it turned out to be a great choice. The space is aesthetic, clean, and quiet, with multiple cozy corners that make it easy to sit and work peacefully. Service was quick.",
    stars: 5
  },
  {
    name: "Richa Yadav",
    text: "This café nails it on all fronts! Amazing coffee, mouthwatering burgers, and heavenly waffles. Quality and taste are a clear priority. Whether you're craving a strong cup or a sweet waffle treat, this place won't disappoint. A must-visit!",
    stars: 5
  },
  {
    name: "Vishaka",
    text: "Amazing food and place. Nice cafe to chill. The cold coffee is too good — ask them to make it strong and without sugar if that suits you.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#3D2314] text-[#FAFAF5] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none text-[20rem] font-serif leading-none select-none">
        &rdquo;
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-accent font-medium tracking-[0.2em] text-sm uppercase mb-4"
          >
            Guestbook
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#F5ECD7]"
          >
            Words from our community
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-[#2C1A0E] p-8 md:p-10 rounded-sm border border-[#EFE0C4]/10 relative group hover:border-accent/40 transition-colors duration-500 flex flex-col h-full"
            >
              <Quote className="w-8 h-8 text-accent/40 mb-6 group-hover:text-accent transition-colors duration-500" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-light text-[#EFE0C4]/90 leading-relaxed mb-8 flex-grow text-lg italic">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="font-serif text-[#FAFAF5] text-lg">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
