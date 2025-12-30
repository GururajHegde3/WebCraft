import { Menu, X, Code, Smartphone, Zap, Mail, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const CapabilityCard = ({ capability, idx }) => {
  return (
    <div
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
  );
};
export default CapabilityCard;