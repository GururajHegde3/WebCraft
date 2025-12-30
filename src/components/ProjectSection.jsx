import ProjectCard from './ProjectCard.jsx';

const ProjectsSection = ({ visibleSections }) => {
  const projects = [
    {
      title: "BeFast Healthcare",
      url: "https://befasthealthcare.vercel.app/",
      category: "Healthcare",
      description: "A comprehensive healthcare website built for BeFast, featuring Home Nursing Services,Testimonials.",
      features: ["Appointment System", "Doctor Profiles", "Patient Portal", "Responsive Design"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Roomie Tasks",
      url: "https://roomie-tasks.vercel.app/",
      category: "Productivity",
      description: "Smart task assignment web application that automatically distributes household chores among roommates with built-in expense splitting.",
      features: ["Auto Task Assignment", "Expense Tracking", "Split Payments", "Real-time Updates"],
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="projects" className={`py-24 px-4 relative ${visibleSections.projects ? 'animate-fadeIn' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Real projects, real results - see what we've built</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;