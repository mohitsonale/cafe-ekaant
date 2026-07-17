import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImg from '@assets/hero-interior.jpg';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden bg-black">
      {/* Background Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={heroImg}
          alt="Cafe Ekaant interior"
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#2C1A0E]/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="inline-block overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FAFAF5] font-medium tracking-tight"
            >
              Your Quiet Corner in Pune
            </motion.h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-[#EFE0C4] text-lg md:text-xl font-light tracking-wide mt-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Coffee. Calm. Connection.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-devanagari text-xl md:text-2xl"
            >
              कॉफी. शांति. जुड़ाव.
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-[#EFE0C4] text-xs uppercase tracking-[0.2em] mb-4">Scroll</span>
        <div className="w-[1px] h-16 bg-[#EFE0C4]/30 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#FAFAF5]"
          />
        </div>
      </motion.div>
    </section>
  );
}
