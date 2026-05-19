/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ChevronRight, 
  Dumbbell, 
  Zap, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  CheckCircle2, 
  Users, 
  Award,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-rose-600 p-1.5 rounded-lg transform group-hover:rotate-12 transition-transform">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-black text-2xl uppercase tracking-tighter italic">THE FITNESS PLANET</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
            {['Programs', 'Amenities', 'Membership', 'Coaches'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-rose-500 transition-colors">{item}</a>
            ))}
            <button className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-rose-600 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
              Join Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-[#050505] border-b border-white/5 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Programs', 'Amenities', 'Membership', 'Coaches'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-xl font-display font-bold uppercase">{item}</a>
            ))}
            <button className="bg-rose-600 text-white w-full py-3 rounded-xl font-bold uppercase tracking-wider">
              Join Now
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-2 bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/70">Elite Performance Only</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] uppercase tracking-tighter italic">
              Forge Your <br />
              <span className="text-rose-600">Legend</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed text-balance">
              Not just a gym. A battleground for the ambitious. World-class equipment, elite trainers, and a community that pushes you beyond your limits.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-rose-600 text-white px-8 py-4 rounded-xl font-display font-black uppercase text-lg flex items-center justify-center gap-2 hover:bg-rose-700 transition-colors group shadow-lg shadow-rose-600/20">
                Start 7-Day Trial
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-display font-black uppercase text-lg hover:bg-white/10 transition-colors">
                View Gallery
              </button>
            </motion.div>

            {/* Credibility */}
            <motion.div variants={fadeIn} className="flex items-center gap-8 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-black">500+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Active Members</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-display font-black">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Elite Coaches</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-display font-black">4.9/5</span>
                <div className="flex gap-0.5">
                  <Star className="w-3 h-3 text-rose-500 fill-rose-500" />
                  <Star className="w-3 h-3 text-rose-500 fill-rose-500" />
                  <Star className="w-3 h-3 text-rose-500 fill-rose-500" />
                  <Star className="w-3 h-3 text-rose-500 fill-rose-500" />
                  <Star className="w-3 h-3 text-rose-500 fill-rose-500" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/5 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
               <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
                alt="Gym Environment" 
                className="w-full h-[600px] object-cover hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <div className="bg-rose-600 p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Certified Excellence</h4>
                    <p className="text-[10px] text-white/60">International Training Standard</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-rose-600/10 blur-[100px] -z-10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="flex flex-col gap-4">
              <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">Our Disciplines</span>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter">Choose Your <br /> Training Style</h2>
            </div>
            <p className="text-white/40 max-w-sm mb-2 font-medium">From powerlifting to high-intensity functional training, we provide the environment and expertise for every goal.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Strength & Conditioning", desc: "Build explosive power and functional strength with olympic lifting and heavy machines.", icon: <Award className="w-8 h-8" />, color: "rose" },
              { title: "HIIT & Cardio", desc: "Burn calories and boost your metabolic rate with high-intensity interval training.", icon: <Zap className="w-8 h-8" />, color: "blue" },
              { title: "Personal Coaching", desc: "1-on-1 sessions with elite trainers to fast-track your specific fitness goals.", icon: <Users className="w-8 h-8" />, color: "emerald" },
            ].map((program, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 border border-white/5 p-8 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="relative z-10 flex flex-col gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-rose-600 group-hover:border-rose-600 transition-all duration-300 text-rose-600 group-hover:text-white`}>
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-display font-black uppercase italic">{program.title}</h3>
                  <p className="text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">{program.desc}</p>
                  <div className="flex items-center gap-2 pt-2 group-hover:translate-x-2 transition-transform">
                    <span className="text-xs uppercase font-bold tracking-widest text-white/60">Learn More</span>
                    <ChevronRight className="w-4 h-4 text-rose-500" />
                  </div>
                </div>
                {/* Background Decor */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 blur-2xl group-hover:bg-rose-600/10 transition-colors rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fitness Planet Method Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-rose-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-45 transition-transform duration-1000">
              <Dumbbell className="w-64 h-64 text-white" />
            </div>
            
            <div className="relative z-10 max-w-2xl flex flex-col gap-8">
              <span className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Our DNA</span>
              <h2 className="text-4xl md:text-7xl font-display font-black uppercase italic tracking-tighter leading-none text-white">The <br /> Fitness Planet <br /> Method</h2>
              <p className="text-xl text-rose-100 leading-relaxed font-medium">
                We don't believe in "quick fixes." Our method is built on three pillars: Raw Power, Mental Discipline, and Scientific Recovery. We build humans that last.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {['No Ego Policy', 'Science-Based', 'Result Driven'].map((pill) => (
                  <div key={pill} className="border border-white/30 rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider bg-white/5">
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="amenities" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-rose-600 aspect-video rounded-3xl flex items-center justify-center p-6 text-center">
                <h4 className="font-display font-black uppercase text-2xl">Premium Equipment</h4>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="bg-white/5 border border-white/10 aspect-video rounded-3xl flex flex-col items-center justify-center p-6">
                <span className="text-4xl font-display font-black">24/7</span>
                <span className="text-xs uppercase font-bold tracking-widest text-white/40">Full Access</span>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-4 block">World Class Facility</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">Beyond the <br /> Ordinary Gym</h2>
            
            <div className="flex flex-col gap-8">
              {[
                { title: "Advanced Biometrics", desc: "Track your progress with state-of-the-art body scanning technology." },
                { title: "Recovery Zone", desc: "Cryotherapy, saunas, and sports massage to keep you in peak condition." },
                { title: "High-Altitude Room", desc: "Specialized cardio deck for maximum athletic threshold training." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl group-hover:bg-rose-600/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-rose-600" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold uppercase italic">{item.title}</h3>
                    <p className="text-white/40 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership / Pricing */}
      <section id="membership" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-4 block">Membership Plans</span>
          <h2 className="text-4xl md:text-7xl font-display font-black uppercase italic tracking-tighter mb-6">Invest In Yourself</h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">No hidden fees, no long contracts. Just pure commitment to excellence.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { name: "Standard", price: "49", features: ["24/7 Access", "All Floor Equipment", "Lockers & Showers"] },
            { name: "Pro", price: "89", featured: true, features: ["Everything in Standard", "Unlimited Group Classes", "1 PT Session per Month", "Sauna & Ice Bath"] },
            { name: "Elite", price: "199", features: ["Full VIP Access", "4 PT Sessions per Month", "Supplements Package", "Physio Consulting"] },
          ].map((plan, i) => (
            <div 
              key={i}
              className={`p-10 rounded-[2.5rem] flex flex-col gap-8 transition-transform hover:scale-105 duration-500 ${plan.featured ? 'bg-rose-600 text-white shadow-2xl shadow-rose-600/20' : 'bg-white/5 border border-white/5'}`}
            >
              <div className="flex flex-col gap-2">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${plan.featured ? 'text-white/70' : 'text-rose-500'}`}>
                  {plan.featured ? 'Most Popular' : 'Core Plan'}
                </span>
                <h3 className="text-3xl font-display font-black uppercase italic">{plan.name}</h3>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-display font-black">${plan.price}</span>
                <span className={`text-sm font-bold opacity-60`}>/mo</span>
              </div>
              <div className="flex flex-col gap-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${plan.featured ? 'text-white' : 'text-rose-500'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`mt-auto w-full py-4 rounded-2xl font-black uppercase tracking-wider transition-all ${plan.featured ? 'bg-white text-rose-600 hover:bg-neutral-100' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Map / Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter leading-[0.9]">Find Your <br /> Strength</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl group-hover:bg-rose-600 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Main Training Base</h4>
                  <p className="text-white/40">123 Fitness Ave, Iron District, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl group-hover:bg-rose-600 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Direct Line</h4>
                  <p className="text-white/40">+1 (555) POWER-GYM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl group-hover:bg-rose-600 transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Operating Hours</h4>
                  <p className="text-white/40">Staffed: 5AM - 11PM | Keyfob: 24/7</p>
                </div>
              </div>
            </div>
            {/* Newsletter or mini-form */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 mt-4">
              <h4 className="font-display font-bold uppercase mb-4 italic">Get Training Tips & Updates</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="email@address.com" className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-rose-500 transition-colors" />
                <button className="bg-rose-600 px-6 py-3 rounded-xl font-bold uppercase text-sm">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-auto overflow-hidden rounded-[2.5rem] border border-white/5 relative bg-[#111]">
            {/* Visual placeholder for Map */}
            <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-30 grayscale saturate-0" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center animate-ping absolute opacity-20" />
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center relative z-10 border-4 border-white">
                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform" />
              </div>
              <span className="font-display font-black text-white text-xl tracking-tighter italic">THE FITNESS PLANET</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-rose-600 p-1.5 rounded-lg">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-black text-xl uppercase tracking-tighter italic">THE FITNESS PLANET</span>
          </div>
          
          <div className="flex gap-8 text-xs uppercase font-bold tracking-widest text-white/40">
            <a href="#" className="hover:text-rose-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-rose-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-rose-500 transition-colors">Cookies</a>
          </div>

          <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">
            © 2026 THE FITNESS PLANET. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
