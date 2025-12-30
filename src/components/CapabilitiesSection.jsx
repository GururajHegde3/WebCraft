import { Globe,Layers ,Palette,Shield } from 'lucide-react';
import CapabilityCard from './CapabilityCard.jsx';


const CapabilitiesSection = ({ visibleSections }) => {
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

  return (
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
            <CapabilityCard key={idx} capability={capability} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CapabilitiesSection;