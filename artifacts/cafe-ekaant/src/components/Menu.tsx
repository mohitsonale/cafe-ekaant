import { motion } from 'framer-motion';
import menuColdCoffee from '@assets/menu-cold-coffee.jpg';
import menuRamen from '@assets/menu-ramen.jpg';
import menuGarlicBread from '@assets/menu-garlic-bread.jpg';
import menuCappuccino from '@assets/menu-cappuccino.jpg';
import menuOatmeal from '@assets/menu-oatmeal.jpg';
import menuLavaCake from '@assets/menu-lava-cake.jpg';
import menuWaffles from '@assets/menu-waffles.jpg';
import menuLatte from '@assets/menu-latte.jpg';

const menuItems = [
  {
    name: "Signature Cold Coffee",
    desc: "Ask for it strong, no sugar",
    price: "₹220",
    img: menuColdCoffee
  },
  {
    name: "Cappuccino",
    desc: "Precision in every pour",
    price: "₹160",
    img: menuCappuccino
  },
  {
    name: "Latte",
    desc: "Silky and soothing",
    price: "₹170",
    img: menuLatte
  },
  {
    name: "Veg Ramen",
    desc: "Soul in a bowl",
    price: "₹320",
    img: menuRamen
  },
  {
    name: "Cheese Garlic Bread",
    desc: "Crispy, golden perfection",
    price: "₹180",
    img: menuGarlicBread
  },
  {
    name: "Berries Oats Meal",
    desc: "Morning ritual, elevated",
    price: "₹250",
    img: menuOatmeal
  },
  {
    name: "Waffles",
    desc: "Heavenly with every bite",
    price: "₹270",
    img: menuWaffles
  },
  {
    name: "Chocolate Lava Cake",
    desc: "Warm center, warm heart",
    price: "₹280",
    img: menuLavaCake
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-accent font-medium tracking-[0.2em] text-sm uppercase mb-4"
          >
            Featured Menu
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-primary"
          >
            Crafted with intention
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm aspect-[4/5] mb-5 relative bg-[#EFE0C4]">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="font-serif text-lg text-primary group-hover:text-accent transition-colors">{item.name}</h4>
                  <p className="text-sm text-foreground/60 mt-1 font-light italic">{item.desc}</p>
                </div>
                <span className="text-primary font-medium">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-block border border-primary text-primary px-8 py-3 rounded-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
