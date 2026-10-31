import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Eye, Plus, Check, Info, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
  onOpenDemo: (project: Project) => void;
  onAddNewProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onOpenDemo,
  onAddNewProject,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectCategory, setNewProjectCategory] = useState('Business Website Design');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [newProjectUrl, setNewProjectUrl] = useState('');

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;

    const newProject: Project = {
      id: `project-${Date.now()}`,
      name: newProjectName.trim().toUpperCase(),
      category: newProjectCategory,
      description: newProjectDesc.trim() || 'A modern responsive website tailored for business presence.',
      image: '/src/assets/images/hero_multi_device_mockup_1793433223423.jpg',
      demoUrl: newProjectUrl.trim() || 'https://demo.example.com',
      isDemo: true,
      tags: ['Custom Design', 'Responsive UI', 'Modern Aesthetics'],
      features: ['Tailored branding', 'Mobile optimization', 'Direct inquiry triggers'],
      type: 'business',
    };

    onAddNewProject(newProject);
    setNewProjectName('');
    setNewProjectDesc('');
    setNewProjectUrl('');
    setShowAddModal(false);
  };

  return (
    <section id="work" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
              FEATURED PROJECTS & CONCEPTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Selected Website Work.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 text-zinc-200 text-xs font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-indigo-400" />
              <span>Add New Project</span>
            </button>
          </div>
        </div>

        {/* Honest Disclosure Banner */}
        <div className="mb-12 p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl flex items-start sm:items-center gap-3 text-xs text-zinc-400">
          <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-zinc-200 font-medium">Demonstration Notice:</strong> The projects
            featured below are website design concepts and functional interactive demos created by
            Sanskar to showcase domain-specific layouts, mobile menus, and aesthetic standards.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-zinc-950/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-zinc-700/80 transition-all duration-300"
            >
              {/* Media Preview Box */}
              <div
                className={`lg:col-span-7 cursor-pointer overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/90 relative ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
                onClick={() => onOpenDemo(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} website preview`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* Overlay Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-[2px]">
                    <span className="px-5 py-2.5 bg-indigo-600 text-white font-medium text-xs rounded-xl shadow-xl flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Click to Test Live Demo
                    </span>
                  </div>

                  {/* Card corner tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10 rounded-md">
                      Interactive Concept Demo
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content Column */}
              <div
                className={`lg:col-span-5 flex flex-col justify-between ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div>
                  {/* Clean unboxed category with separator */}
                  <div className="flex items-center gap-2 text-xs font-medium text-indigo-400 mb-3">
                    <span>{project.category}</span>
                    <span className="text-zinc-700">/</span>
                    <span className="text-zinc-400">Concept Prototype</span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-4">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                    "{project.description}"
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-zinc-800/80">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Demo Trigger Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenDemo(project)}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-indigo-950 flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Live Demo</span>
                  </button>

                  <a
                    href="https://wa.me/917276650422?text=Hi%20Sanskar,%20I'm%20interested%20in%20a%20website%20similar%20to%20your%20concept"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-medium rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <span>Discuss Similar Website</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add New Project Modal for Sanskar */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-lg bg-[#0d0e17] border border-zinc-800 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
              <h3 className="text-base font-bold text-white font-display">Add Showcase Project</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-zinc-400 hover:text-white text-xs"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Project Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. THE BOTANIC CAFE"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Category</label>
                <select
                  value={newProjectCategory}
                  onChange={(e) => setNewProjectCategory(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Restaurant Website Design">Restaurant Website Design</option>
                  <option value="Salon Website Design">Salon Website Design</option>
                  <option value="Business Website Design">Business Website Design</option>
                  <option value="Hotel & Hospitality Design">Hotel & Hospitality Design</option>
                  <option value="Landing Page Design">Landing Page Design</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Project Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Short description of the concept and who it serves..."
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Demo URL (or placeholder)
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={newProjectUrl}
                  onChange={(e) => setNewProjectUrl(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-3 border-t border-zinc-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-2 text-xs text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs rounded-lg transition-colors"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
