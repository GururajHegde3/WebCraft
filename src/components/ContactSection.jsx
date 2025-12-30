import { Menu, X, Code, Smartphone, Zap, Mail, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';


const ContactSection = ({ visibleSections, formData, setFormData, handleSubmit }) => {
  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email Us", info: "webcraft.codes@gmail.com", href: "mailto:webcraft.codes@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, title: "Call Us", info: "+91 7090136876", href: "tel:+917090136876" }
  ];

  return (
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
          {contactInfo.map((contact, idx) => (
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
  );
};
export default ContactSection;