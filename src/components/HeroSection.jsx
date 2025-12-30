import { Menu, X, Code, Smartphone, Zap, Mail, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';


const HeroSection = () => {
  const stats = [
    { value: "100%", label: "Client Satisfaction" },
    { value: "30%", label: "Cost Savings" },
    { value: "< 3s", label: "Average Load Time" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
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
  );
};
export default HeroSection;