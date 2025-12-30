import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Zap, Mail, Phone, CheckCircle, ArrowRight, Sparkles, Layers, Shield, RefreshCw, Globe, Server, Palette, ShoppingCart, Rocket, Cloud } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState({});
  const [activeService, setActiveService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Bespoke websites and web applications built with cutting-edge technologies",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized"],
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Progressive Web Apps",
      description: "Modern PWAs that work seamlessly across all devices with app-like experience",
      features: ["Cross-Platform", "Offline Support", "Push Notifications"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Complete online store setup with payment integration and inventory management",
      features: ["Payment Gateway", "Admin Dashboard", "Analytics"],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Web Applications",
      description: "Complex web applications tailored to your business processes and workflows",
      features: ["Custom Logic", "Database Design", "API Integration"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Deployment & Hosting",
      description: "Full deployment services with reliable cloud hosting and continuous delivery",
      features: ["Cloud Setup", "Domain Config", "SSL Certificates"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Ongoing updates, security patches, and technical support for your digital assets",
      features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes"],
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed up your existing website with advanced optimization techniques",
      features: ["Load Time Reduction", "SEO Enhancement", "Code Optimization"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "End-to-end development from frontend to backend with complete deployment",
      features: ["Frontend & Backend", "Database Setup", "Production Ready"],
      color: "from-fuchsia-500 to-pink-600"
    }
  ];

  const capabilities = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Any Domain, Any Industry",
      description: "From healthcare to finance, retail to education - we build for everyone",
      examples: ["Healthcare", "Education", "Fitness", "Finance", "Real Estate", "Manufacturing", "Hospitality"]
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Complete Solutions",
      description: "End-to-end development from concept to deployment and beyond",
      examples: ["Frontend", "Backend", "Database", "Cloud Hosting", "DevOps", "CI/CD"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Design That Converts",
      description: "Beautiful interfaces designed to turn visitors into customers",
      examples: ["UI/UX Design", "Brand Identity", "Prototyping", "User Research", "A/B Testing", "Accessibility"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security measures to protect your business and customers",
      examples: ["SSL Certificates", "Data Encryption", "GDPR Compliance", "Regular Audits", "Backup Systems", "DDoS Protection"]
    }
  ];

  const stats = [
    { value: "100%", label: "Client Satisfaction" },
    { value: "30%", label: "Cost Savings" },
    { value: "< 3s", label: "Average Load Time" },
    { value: "24/7", label: "Support Available" }
  ];

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(`New Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:webcraft.codes@gmail.com?subject=${subject}&body=${body}`;
      
      setTimeout(() => {
        alert('Thank you for reaching out! Your email client has been opened. Please send the email to complete your message.');
        setFormData({ name: '', email: '', message: '' });
      }, 500);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 opacity-20 blur-3xl transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      />

      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="fixed w-1 h-1 bg-violet-500 rounded-full opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center animate-rotate3d">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                WebCraft
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'capabilities', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 capitalize relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800">
            {['home', 'services', 'capabilities', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-zinc-900 transition-all capitalize"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 mb-6 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300">Premium Quality • Affordable Pricing • Fast Delivery</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Transform Your Vision
            </span>
            <br />
            <span className="text-white">Into Digital Reality</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fadeIn">
            We craft premium digital experiences at prices that won't break the bank. Get enterprise-quality solutions at startup-friendly rates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <a
              href="#contact"
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-zinc-800 transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </section>

      <section id="services" className={`py-24 px-4 relative ${visibleSections.services ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Comprehensive solutions for your digital success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  activeService === idx ? 'ring-2 ring-violet-500/50' : ''
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-violet-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className={`py-24 px-4 relative ${visibleSections.capabilities ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Limitless Possibilities
              </span>
            </h2>
            <p className="text-gray-400 text-lg">We build for every industry, every need, every vision</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-gray-400">{capability.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {capability.examples.map((example, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 rounded-full text-sm text-violet-300"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`py-24 px-4 relative ${visibleSections.contact ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Let's Build Together
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Turn your ideas into reality - reach out today</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Email Us", info: "webcraft.codes@gmail.com", href: "mailto:webcraft.codes@gmail.com" },
              { icon: <Phone className="w-6 h-6" />, title: "Call Us", info: "+91 7090136876", href: "tel:+917090136876" }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                className="flex items-center space-x-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{contact.title}</p>
                  <p className="text-white font-semibold">{contact.info}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition-all duration-300"
              />
              
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition-all duration-300"
              />
              
              <textarea
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition-all duration-300"
              />
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 WebCraft. Crafting Digital Excellence.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-25px) translateX(5px); }
        }
        @keyframes rotate3d {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        .animate-rotate3d {
          animation: rotate3d 10s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}