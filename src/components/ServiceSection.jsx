import { Menu, X, Code, Smartphone, Zap, Mail, Phone, CheckCircle, ArrowRight, Sparkles,ShoppingCart,Server,Cloud,Rocket,RefreshCw} from 'lucide-react';
import ServiceCard from './ServiceCard.jsx';


const ServicesSection = ({ visibleSections, activeService }) => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Bespoke websites and web applications built with cutting-edge technologies",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized"],
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Academic Projects",
      description: "Mini & major projects for engineering students in CSE, AIML, AIDS, ISE departments",
      features: ["Mini Projects", "Major Projects", "Reports"],
      color: "from-fuchsia-500 to-pink-600"
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
    
  ];

  return (
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
            <ServiceCard key={idx} service={service} idx={idx} activeService={activeService} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;