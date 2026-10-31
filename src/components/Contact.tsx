import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  HelpCircle,
  Copy,
  Check,
  Code2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  selectedServicePreset?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    websiteType: selectedServicePreset || 'Business Website Design',
    projectDetails: '',
  });

  const [copiedNotification, setCopiedNotification] = useState(false);
  const [showIntegrationGuide, setShowIntegrationGuide] = useState(false);

  // Update websiteType if a service is clicked above
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, websiteType: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Generate structured message
  const constructMessage = () => {
    return `Hello Sanskar, I would like to discuss a website project!
    
Name: ${formData.name || 'Not specified'}
Email: ${formData.email || 'Not specified'}
Business Name: ${formData.businessName || 'Not specified'}
Website Type: ${formData.websiteType}

Project Details:
${formData.projectDetails || 'Let us discuss on WhatsApp / Call.'}`;
  };

  // Dispatch via WhatsApp (100% working direct connection)
  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(constructMessage());
    const url = `https://wa.me/917276650422?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Dispatch via Email Client (100% working direct connection)
  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website Project Inquiry: ${formData.businessName || formData.websiteType}`
    );
    const body = encodeURIComponent(constructMessage());
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  // Copy inquiry to clipboard
  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(constructMessage());
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Have a Project in Mind? Let's Build Something Great.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Whether you're starting a new business or improving your existing online presence, I'd
            love to hear about your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white font-display">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-xl flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Designer & Developer</span>
                  <span className="text-sm font-semibold text-white">Sanskar</span>
                </div>

                {/* Location */}
                <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-xl flex items-center justify-between">
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Location
                  </span>
                  <span className="text-sm font-semibold text-white">Pune, Maharashtra, India</span>
                </div>

                {/* Phone */}
                <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-xl flex items-center justify-between">
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-zinc-400" /> Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+917276650422"
                    className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors font-mono"
                  >
                    +91 7276650422
                  </a>
                </div>

                {/* Email */}
                <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-xl flex items-center justify-between">
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-zinc-400" /> Email Address
                  </span>
                  <a
                    href="mailto:sanskarhatkar8@gmail.com"
                    className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                  >
                    sanskarhatkar8@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-zinc-800/80">
              <span className="text-xs font-medium text-zinc-400 block">Instant Channels</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-950"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Me</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 text-zinc-200 hover:text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>Send an Email</span>
                </a>
              </div>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-950"
              >
                <span>Let's Work Together</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Project Inquiry</h3>
                  <p className="text-xs text-zinc-400">
                    Fill in your project details to initiate instant conversation
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowIntegrationGuide(!showIntegrationGuide)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
                  title="Backend configuration guide for form delivery"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Backend Setup Info</span>
                </button>
              </div>

              {/* Form Backend Explanation Banner (Visible on toggle or clear callout) */}
              {showIntegrationGuide && (
                <div className="mb-6 p-4 bg-indigo-950/30 border border-indigo-900/50 rounded-xl text-xs text-zinc-300 animate-in fade-in duration-150">
                  <p className="font-semibold text-indigo-300 mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> How Form Submissions Work Here:
                  </p>
                  <p className="leading-relaxed mb-2 text-zinc-400">
                    To maintain 100% transparency with zero mock submissions, this form sends your
                    data directly through verified <strong>WhatsApp</strong> or{' '}
                    <strong>Email</strong> channels immediately.
                  </p>
                  <p className="leading-relaxed text-zinc-400">
                    <strong>For Developers / Sanskar:</strong> To connect automated backend email
                    forwarding, you can point the form's `action` to a free endpoint like{' '}
                    <code className="text-indigo-200">formspree.io/f/YOUR_ID</code> or{' '}
                    <code className="text-indigo-200">api.web3forms.com/submit</code>.
                  </p>
                </div>
              )}

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="e.g. Cafe Botanica / Spice Box"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Type of Website Required *
                    </label>
                    <select
                      name="websiteType"
                      value={formData.websiteType}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Business Website Design">Business Website Design</option>
                      <option value="Restaurant Website Design">Restaurant Website Design</option>
                      <option value="Salon Website Design">Salon Website Design</option>
                      <option value="Landing Page Design">Landing Page Design</option>
                      <option value="Responsive Website Development">Responsive Website Development</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    rows={4}
                    placeholder="Tell me about your business, current website (if any), timeline, or specific features you need..."
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder:text-zinc-600"
                  />
                </div>

                {/* Direct submission choices (Real & Honest) */}
                <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-emerald-950 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="w-full sm:flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-indigo-950 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="w-full sm:w-auto p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-xl text-zinc-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                    title="Copy formatted message to clipboard"
                  >
                    {copiedNotification ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
                  <span>* Guaranteed no spam. Fast response within 24 hours.</span>
                  {copiedNotification && (
                    <span className="text-emerald-400 font-medium">Copied to clipboard!</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
