import { motion } from 'framer-motion';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background bg-noise border-t border-[#EFE0C4]/50">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent font-medium tracking-[0.2em] text-sm uppercase mb-4">Reservations</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-primary mb-6">
            Reserve your table.
          </h3>
          <p className="text-foreground/70 font-light mb-12">
            Planning a visit? Drop us a message or call <span className="font-medium text-primary">099701 33633</span>. For large groups or special events, we recommend booking in advance.
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-primary tracking-wide">Name</label>
              <input 
                id="name"
                type="text" 
                required
                className="w-full bg-transparent border-b border-primary/30 py-3 px-1 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-primary tracking-wide">Email</label>
              <input 
                id="email"
                type="email" 
                required
                className="w-full bg-transparent border-b border-primary/30 py-3 px-1 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2 pt-4">
            <label htmlFor="message" className="text-sm font-medium text-primary tracking-wide">Message</label>
            <textarea 
              id="message"
              required
              rows={4}
              className="w-full bg-transparent border-b border-primary/30 py-3 px-1 focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-foreground/30"
              placeholder="Tell us about your reservation (date, time, guests)..."
            />
          </div>

          <div className="pt-6 text-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-sm font-medium tracking-widest uppercase text-sm hover:bg-accent transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
