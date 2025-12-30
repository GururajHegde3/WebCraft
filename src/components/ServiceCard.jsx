import { Menu, X, Code, Smartphone, Zap, Mail, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const ServiceCard = ({ service, idx, activeService }) => {
  return (
    <div
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
  );
};
export default ServiceCard;