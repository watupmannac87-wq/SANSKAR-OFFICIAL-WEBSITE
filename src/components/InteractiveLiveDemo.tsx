import React, { useState } from 'react';
import {
  X,
  Laptop,
  Smartphone,
  ExternalLink,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  UtensilsCrossed,
  Scissors,
  CheckCircle2,
  Calendar,
  Flame,
  Star,
  Edit2,
  Share2,
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface InteractiveLiveDemoProps {
  project: Project;
  onClose: () => void;
  onUpdateDemoUrl?: (newUrl: string) => void;
}

export const InteractiveLiveDemo: React.FC<InteractiveLiveDemoProps> = ({
  project,
  onClose,
  onUpdateDemoUrl,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeMenuTab, setActiveMenuTab] = useState<string>('all');
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [tempUrl, setTempUrl] = useState(project.demoUrl);
  const [reservationName, setReservationName] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationGuests, setReservationGuests] = useState('2');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateDemoUrl) {
      onUpdateDemoUrl(tempUrl);
    }
    setIsEditingUrl(false);
  };

  const handleSimulateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
    }, 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6 overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-6xl h-[92vh] flex flex-col bg-[#0d0e17] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-[#090A10] shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div className="min-w-0">
              <span className="text-xs uppercase tracking-wider text-indigo-400 font-medium block">
                Interactive Website Demo
              </span>
              <h3 className="text-sm font-semibold text-white truncate font-display">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Viewport Mode Switcher */}
          <div className="hidden sm:flex items-center bg-zinc-900/90 border border-zinc-800 rounded-lg p-1">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                deviceMode === 'desktop'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              Desktop View
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                deviceMode === 'mobile'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Mobile View
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditingUrl(!isEditingUrl)}
              title="Edit or inspect demo URL"
              className="px-2.5 py-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors flex items-center gap-1.5"
            >
              <Edit2 className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden md:inline">Demo URL</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo URL Config Banner (Collapsible) */}
        {isEditingUrl && (
          <form
            onSubmit={handleSaveUrl}
            className="flex items-center gap-3 px-4 py-2.5 bg-indigo-950/40 border-b border-indigo-900/40 text-xs shrink-0"
          >
            <span className="text-indigo-300 font-medium shrink-0">Demo Link:</span>
            <input
              type="text"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              placeholder="https://your-demo-url.com"
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded px-2.5 py-1 text-white text-xs focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded transition-colors"
            >
              Save Link
            </button>
          </form>
        )}

        {/* Concept Notice Bar */}
        <div className="px-4 py-1.5 bg-zinc-900/80 border-b border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">Design Concept</span>
            <span>·</span>
            <span className="text-zinc-300">Created by Sanskar</span>
            <span>·</span>
            <span>Demonstration project for potential restaurant & salon clients</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-zinc-400">
            <span>Pune, Maharashtra</span>
          </div>
        </div>

        {/* Interactive Viewport Container */}
        <div className="flex-1 overflow-y-auto bg-zinc-950/90 flex justify-center p-2 sm:p-4 md:p-6">
          <div
            className={`w-full transition-all duration-300 bg-[#090a10] border border-zinc-800/80 rounded-xl overflow-hidden flex flex-col shadow-2xl ${
              deviceMode === 'mobile'
                ? 'max-w-sm my-auto min-h-[640px] border-zinc-700'
                : 'max-w-5xl'
            }`}
          >
            {project.type === 'restaurant' ? (
              /* ARYAN BIRYANI & TANDOOR DEMO */
              <div className="text-zinc-100 flex flex-col min-h-full">
                {/* Demo Nav */}
                <header className="px-4 py-3 bg-[#120e0a] border-b border-amber-900/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide text-amber-100 font-display">
                        ARYAN
                      </h4>
                      <p className="text-[10px] text-amber-400/80 uppercase tracking-wider">
                        Biryani & Tandoor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-400 hidden sm:inline flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" /> 11:30 AM – 11:00 PM
                    </span>
                    <a
                      href="https://wa.me/917276650422?text=Hello%20Aryan%20Biryani,%20I%20would%20like%20to%20order%20food"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-black font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Order Now
                    </a>
                  </div>
                </header>

                {/* Demo Hero */}
                <div className="relative p-6 sm:p-10 bg-gradient-to-b from-[#1a1309] to-[#090A10] border-b border-zinc-800/80">
                  <div className="max-w-xl">
                    <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 block">
                      Authentic Dum & Charcoal Flavours · Pune
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
                      Slow-Cooked Handi Biryani & Smoky Tandoori Delicacies.
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                      Made with long-grain aged basmati rice, hand-pounded royal spices, and tender
                      marinated cuts cooked to perfection in clay tandoor pots.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="#menu-demo"
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-lg transition-colors"
                      >
                        Explore Menu
                      </a>
                      <a
                        href="tel:+917276650422"
                        className="px-4 py-2 bg-zinc-900 border border-zinc-700 hover:border-amber-500/50 text-white text-xs rounded-lg transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        Call to Reserve
                      </a>
                    </div>
                  </div>
                </div>

                {/* Menu Highlights Section */}
                <div id="menu-demo" className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">Specialties Menu</h3>
                      <p className="text-xs text-zinc-400">
                        Handcrafted everyday with freshest ingredients
                      </p>
                    </div>

                    {/* Filter buttons */}
                    <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
                      {['all', 'biryani', 'tandoori', 'breads'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveMenuTab(tab)}
                          className={`px-3 py-1 text-xs font-medium rounded-md capitalize transition-colors ${
                            activeMenuTab === tab
                              ? 'bg-amber-500 text-zinc-950 shadow-sm'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          {tab === 'all' ? 'All Items' : tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Menu Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        name: 'Special Chicken Dum Biryani',
                        price: '₹280',
                        category: 'biryani',
                        desc: 'Fragrant saffron basmati cooked with tender chicken pieces and browned onions in sealed clay pot.',
                        badge: 'Bestseller',
                      },
                      {
                        name: 'Mutton Handi Zafrani Biryani',
                        price: '₹360',
                        category: 'biryani',
                        desc: 'Rich succulent mutton morsels marinated in Kashmiri chili, curd, and royal shahi masala.',
                        badge: 'Chef Choice',
                      },
                      {
                        name: 'Murgh Malai Tikka',
                        price: '₹260',
                        category: 'tandoori',
                        desc: 'Boneless chicken cubes marinated in creamy cheese, cashew paste and mild aromatic spices.',
                        badge: 'Popular',
                      },
                      {
                        name: 'Charcoal Tandoori Chicken',
                        price: '₹240',
                        category: 'tandoori',
                        desc: 'Traditional clay-oven roasted chicken with signature tandoori rub and fresh lemon mint dip.',
                        badge: 'Classic',
                      },
                      {
                        name: 'Garlic Butter Naan',
                        price: '₹60',
                        category: 'breads',
                        desc: 'Crisp leavened flatbread topped with minced garlic, butter, and fresh coriander.',
                        badge: 'Sides',
                      },
                      {
                        name: 'Paneer Tikka Biryani',
                        price: '₹250',
                        category: 'biryani',
                        desc: 'Smoked paneer chunks layered with aromatically spiced rice and saffron milk.',
                        badge: 'Veg Special',
                      },
                    ]
                      .filter((item) => activeMenuTab === 'all' || item.category === activeMenuTab)
                      .map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl hover:border-amber-500/40 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <h4 className="font-semibold text-sm text-white">{item.name}</h4>
                              <span className="text-amber-400 font-bold text-xs shrink-0 font-mono">
                                {item.price}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                              {item.desc}
                            </p>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-[11px]">
                            <span className="text-amber-400/90 font-medium">{item.badge}</span>
                            <a
                              href={`https://wa.me/917276650422?text=Hello%20Aryan%20Biryani,%20I%20would%20like%20to%20order%20${encodeURIComponent(
                                item.name
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-300 hover:text-amber-400 font-medium flex items-center gap-1"
                            >
                              Order <MessageCircle className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Location & Reservation interactive strip */}
                <div className="mt-auto p-6 bg-[#100d09] border-t border-amber-900/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h4 className="font-bold text-sm text-amber-200 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-amber-500" /> Visit Aryan Biryani & Tandoor
                      </h4>
                      <p className="text-xs text-zinc-400 mb-1">
                        Main Road, FC Road / Koregaon Park, Pune, Maharashtra 411001
                      </p>
                      <p className="text-xs text-zinc-500">
                        Open Daily: 11:30 AM to 3:30 PM & 7:00 PM to 11:00 PM
                      </p>
                    </div>

                    <form
                      onSubmit={handleSimulateBooking}
                      className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col gap-2"
                    >
                      <span className="text-xs font-semibold text-white">Book a Table (Demo)</span>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={reservationName}
                          onChange={(e) => setReservationName(e.target.value)}
                          required
                          className="bg-zinc-800/80 border border-zinc-700 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-amber-500"
                        />
                        <select
                          value={reservationGuests}
                          onChange={(e) => setReservationGuests(e.target.value)}
                          className="bg-zinc-800/80 border border-zinc-700 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-amber-500"
                        >
                          <option value="2">2 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="6">6+ Guests</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded transition-colors flex items-center justify-center gap-1.5"
                      >
                        {bookingConfirmed ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-black" /> Reservation Request Sent!
                          </>
                        ) : (
                          'Confirm Reservation'
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              /* DENIM UNISEX SALON DEMO */
              <div className="text-zinc-100 flex flex-col min-h-full">
                {/* Salon Nav */}
                <header className="px-4 py-3 bg-[#0d0f17] border-b border-indigo-950/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Scissors className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide text-zinc-100 font-display">
                        DENIM
                      </h4>
                      <p className="text-[10px] text-indigo-400 uppercase tracking-widest">
                        Unisex Hair & Grooming
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-400 hidden sm:inline flex items-center gap-1">
                      <Clock className="w-3 h-3 text-indigo-400" /> Tue–Sun: 10:00 AM – 9:00 PM
                    </span>
                    <a
                      href="https://wa.me/917276650422?text=Hello%20Denim%20Salon,%20I%20would%20like%20to%20book%20a%20salon%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Book Slot
                    </a>
                  </div>
                </header>

                {/* Salon Hero */}
                <div className="p-6 sm:p-10 bg-gradient-to-b from-[#111322] to-[#090A10] border-b border-zinc-800/80">
                  <div className="max-w-xl">
                    <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2 block">
                      Contemporary Styling · Pune, Maharashtra
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
                      Elevate Your Personal Style with Precision Cuts & Hair Therapy.
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                      A boutique unisex salon offering creative hair design, bespoke balayage, beard
                      sculpting, and revitalizing skin treatments tailored for you.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="https://wa.me/917276650422?text=Hi%20Denim%20Salon,%20please%20share%20available%20slots%20for%20this%20weekend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp Appointment
                      </a>
                      <a
                        href="tel:+917276650422"
                        className="px-4 py-2 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white text-xs rounded-lg transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5 text-zinc-400" />
                        +91 7276650422
                      </a>
                    </div>
                  </div>
                </div>

                {/* Services Catalog */}
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">Service Menu & Pricing</h3>
                      <p className="text-xs text-zinc-400">
                        Professional unisex grooming with premium salon-grade products
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
                      {['all', 'hair', 'beard', 'color'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveMenuTab(tab)}
                          className={`px-3 py-1 text-xs font-medium rounded-md capitalize transition-colors ${
                            activeMenuTab === tab
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          {tab === 'all' ? 'All Services' : tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        name: 'Signature Precision Haircut',
                        category: 'hair',
                        price: '₹450',
                        duration: '45 mins',
                        desc: 'Consultation, scalp wash, custom shear cut styled with matte clay or argan serum.',
                      },
                      {
                        name: 'Royal Beard Sculpt & Hot Towel',
                        category: 'beard',
                        price: '₹300',
                        duration: '30 mins',
                        desc: 'Edge shaping, beard steam, essential oils massage, and razor sharp perimeter.',
                      },
                      {
                        name: 'Balayage & Global Color',
                        category: 'color',
                        price: '₹2,400+',
                        duration: '120 mins',
                        desc: 'Ammonia-free dimensional coloring, bonding treatment, and gloss finishing toners.',
                      },
                      {
                        name: 'Keratin Smoothing Therapy',
                        category: 'hair',
                        price: '₹3,200+',
                        duration: '90 mins',
                        desc: 'Frizz reduction treatment infused with botanical protein for ultra-sleek manageable locks.',
                      },
                      {
                        name: 'Detox Charcoal Facial',
                        category: 'beard',
                        price: '₹850',
                        duration: '45 mins',
                        desc: 'Deep pore extraction, cold compress hydration, and pollution defense glow mask.',
                      },
                      {
                        name: 'Highlights & Tone',
                        category: 'color',
                        price: '₹1,600+',
                        duration: '60 mins',
                        desc: 'Sun-kissed foil highlights crafted to match your facial undertones and personal vibe.',
                      },
                    ]
                      .filter((s) => activeMenuTab === 'all' || s.category === activeMenuTab)
                      .map((service, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <h4 className="font-semibold text-sm text-white">{service.name}</h4>
                              <span className="text-indigo-400 font-bold text-xs shrink-0 font-mono">
                                {service.price}
                              </span>
                            </div>
                            <span className="text-[11px] text-zinc-500 block mb-2">
                              Duration: {service.duration}
                            </span>
                            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                              {service.desc}
                            </p>
                          </div>
                          <a
                            href={`https://wa.me/917276650422?text=Hello%20Denim%20Salon,%20I%20would%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(
                              service.name
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pt-2 border-t border-zinc-800 text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center justify-between"
                          >
                            <span>Book on WhatsApp</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Salon Location strip */}
                <div className="mt-auto p-6 bg-[#0a0c14] border-t border-indigo-950/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-zinc-200 mb-1 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-indigo-400" /> Denim Unisex Salon Studio
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Viman Nagar & Baner Commercial District, Pune, Maharashtra
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://wa.me/917276650422"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Chat With Reception
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Info */}
        <div className="px-4 py-2.5 bg-[#090A10] border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 shrink-0">
          <span className="truncate">
            Portfolio Demo Concept · Custom design ready for deployment
          </span>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917276650422?text=Hi%20Sanskar,%20I%20saw%20your%20demo%20project%20and%20want%20a%20similar%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Get a Website Like This →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
