import { ArrowRight } from 'lucide-react';
const ProjectCard = ({ project, idx }) => {
  return (
    <div className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:bg-zinc-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
      <div className="relative h-64 overflow-hidden">
        <iframe
          src={project.url}
          className="w-full h-full pointer-events-none scale-100 group-hover:scale-110 transition-transform duration-500"
          title={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <span className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-semibold text-white`}>
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-400 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.features.map((feature, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs text-violet-300"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors group"
        >
          <span>View Live Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;