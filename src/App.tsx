/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveLiveDemo } from './components/InteractiveLiveDemo';
import { INITIAL_PROJECTS } from './data/portfolioData';
import { Project } from './types/portfolio';

export default function App() {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('sanskar_projects');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_PROJECTS;
  });

  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('Business Website Design');

  // Save projects to localStorage when updated
  useEffect(() => {
    try {
      localStorage.setItem('sanskar_projects', JSON.stringify(projects));
    } catch {
      // Ignore
    }
  }, [projects]);

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    handleScrollToContact();
  };

  const handleAddNewProject = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleUpdateDemoUrl = (newUrl: string) => {
    if (!activeDemoProject) return;
    setProjects((prev) =>
      prev.map((p) => (p.id === activeDemoProject.id ? { ...p, demoUrl: newUrl } : p))
    );
    setActiveDemoProject((prev) => (prev ? { ...prev, demoUrl: newUrl } : null));
  };

  return (
    <div className="min-h-screen bg-[#090A10] text-[#E2E8F0] selection:bg-indigo-500/30 selection:text-white flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar onContactClick={handleScrollToContact} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreWork={handleScrollToWork}
          onDiscussProject={handleScrollToContact}
          onOpenQuickDemo={() => setActiveDemoProject(projects[0])}
        />

        {/* Featured Projects / My Work */}
        <Projects
          projects={projects}
          onOpenDemo={(p) => setActiveDemoProject(p)}
          onAddNewProject={handleAddNewProject}
        />

        {/* My Services */}
        <Services onSelectService={handleSelectService} />

        {/* Why Choose Me? */}
        <WhyChooseMe />

        {/* My Working Process */}
        <Process />

        {/* About Me */}
        <About onContactClick={handleScrollToContact} />

        {/* Contact Section */}
        <Contact selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Live Demo Preview Modal */}
      {activeDemoProject && (
        <InteractiveLiveDemo
          project={activeDemoProject}
          allProjects={projects}
          onSelectProject={(p) => setActiveDemoProject(p)}
          onClose={() => setActiveDemoProject(null)}
          onUpdateDemoUrl={handleUpdateDemoUrl}
        />
      )}
    </div>
  );
}
