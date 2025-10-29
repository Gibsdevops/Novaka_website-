import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, X, Mail, Phone, MapPin, Star, TrendingUp, Users, Award, ArrowRight, CheckCircle, Lightbulb, Target, Heart, Shield } from 'lucide-react';
import { getServices, getTestimonials, getCompanyInfo, submitContactForm } from '../apiConfig';
import { fallbackServices, fallbackTestimonials, fallbackCompanyInfo } from '../fallbackData';

export default function NovakHospitality() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // State for API data
  const [services, setServices] = useState(fallbackServices);
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [companyInfo, setCompanyInfo] = useState(fallbackCompanyInfo);
  const [loading, setLoading] = useState(true);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Icon mapping for services
  const iconMap = {
    'Operations Excellence': <TrendingUp className="w-8 h-8" />,
    'People Management': <Users className="w-8 h-8" />,
    'Financial Advisory': <Award className="w-8 h-8" />,
    'Technology Solutions': <Target className="w-8 h-8" />,
    'Customer Experience': <CheckCircle className="w-8 h-8" />,
    'Business Turnarounds': <Lightbulb className="w-8 h-8" />
  };

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Fetch services
        try {
          const servicesData = await getServices();
          if (servicesData && servicesData.length > 0) {
            setServices(servicesData.sort((a, b) => a.order - b.order));
          }
        } catch (error) {
          console.warn('Using fallback services data');
        }

        // Fetch testimonials
        try {
          const testimonialsData = await getTestimonials();
          if (testimonialsData && testimonialsData.length > 0) {
            setTestimonials(testimonialsData.filter(t => t.published));
          }
        } catch (error) {
          console.warn('Using fallback testimonials data');
        }

        // Fetch company info
        try {
          const companyData = await getCompanyInfo();
          if (companyData && companyData.length > 0) {
            setCompanyInfo(companyData[0]);
          }
        } catch (error) {
          console.warn('Using fallback company data');
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=1080&fit=crop",
      title: "Powering Success in Hospitality",
      subtitle: companyInfo?.subtitle || "Transform your business with strategic consulting excellence",
      cta: "Discover Our Solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop",
      title: "Excellence in Every Endeavor",
      subtitle: "Your trusted partner for sustainable growth and innovation",
      cta: "Explore Services"
    },
    {
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&h=1080&fit=crop",
      title: "Elevate Your Guest Experience",
      subtitle: "Tailored strategies that redefine hospitality success",
      cta: "Get Started"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const values = [
    { icon: <Award />, title: "Excellence", description: "Dedicated to exceeding expectations and achieving excellence in all our services" },
    { icon: <Lightbulb />, title: "Innovation", description: "Fostering creativity and adapting to change to provide cutting-edge solutions" },
    { icon: <Heart />, title: "Client-Centric", description: "Client satisfaction is our top priority. We tailor solutions to their unique needs" },
    { icon: <Target />, title: "Sustainability", description: "Committed to responsible and sustainable business practices" },
    { icon: <Shield />, title: "Integrity", description: "Operating with unwavering integrity, honesty, transparency, and strong ethical values" }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const industries = [
    { name: "Food & Beverage", items: ["Restaurants", "Cafeterias", "Catering", "Cafes", "Fast Food", "Pubs", "Delis"] },
    { name: "Lodging", items: ["Hotels", "Motels", "B&Bs", "Inns", "Boutique Hotels", "Resorts", "Vacation Rentals"] },
    { name: "Recreation", items: ["Amusement Parks", "Campgrounds", "Theaters", "Museums", "Zoos", "Art Exhibits"] },
    { name: "Travel & Tourism", items: ["Tour Operators", "Travel Agencies", "Tourist Attractions", "Eco-Tourism"] },
    { name: "Meetings & Events", items: ["Conferences", "Trade Shows", "Corporate Events", "Celebrations", "Exhibitions"] }
  ];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);

    try {
      await submitContactForm(contactForm);
      alert('Message sent successfully! We will contact you soon.');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again or email us directly.');
      console.error('Contact form error:', error);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-slate-900/90'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">
                NOVAK <span className="text-amber-500">HOSPITALITY</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-amber-500 transition">Home</a>
              <a href="#services" className="text-white hover:text-amber-500 transition">Services</a>
              <Link to="/about" className="text-white hover:text-amber-500 transition">About</Link>
              <a href="#contact" className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition">Contact Us</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-white hover:text-amber-500 py-2">Home</a>
              <a href="#services" className="block text-white hover:text-amber-500 py-2">Services</a>
              <Link to="/about" className="block text-white hover:text-amber-500 py-2">About</Link>
              <a href="#contact" className="block bg-amber-500 text-white px-6 py-2 rounded-full text-center">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                {slides[currentSlide].subtitle}
              </p>
              <button className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition transform hover:scale-105 flex items-center gap-2">
                {slides[currentSlide].cta}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition">
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-amber-500 w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-900 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                {companyInfo?.about || "Novak Hospitality Solutions Uganda Ltd is a dynamic and multi-faceted company dedicated to delivering exceptional value to clients and enhancing profitability across diverse industries."}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a decade of experience, we create value, mitigate risk, and prioritize your unique hospitality vision. As your seasoned guide, we navigate your first venture or offer solutions for distressed situations.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:text-amber-600 transition">
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Team" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-amber-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition">
                  <div className="text-amber-500 group-hover:text-white transition">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored to your hospitality needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id || index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition group">
                <div className="bg-amber-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition">
                  <div className="text-amber-500 group-hover:text-white transition">
                    {iconMap[service.title] || <Target className="w-8 h-8" />}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Expertise across the hospitality spectrum</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 text-amber-500">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-amber-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id || index} className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-8">
              <div className="flex gap-2 text-amber-500 mb-6 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="text-center">
                <p className="font-bold text-slate-900 text-xl">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
              <p className="text-xl text-gray-300 mb-8">
                Tell us about your concept and needs and we'll contact you to schedule an exploration call.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <MapPin className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">{companyInfo?.address || "Kirabo Complex, Ntinda, Kampala"}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <Phone className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">{companyInfo?.phone || "+256 776 464 943"}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <Mail className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">{companyInfo?.email || "novakhospitalitysoln@gmail.com"}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 outline-none transition"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={5}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 outline-none transition resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={formSubmitting}
                  className="w-full bg-amber-500 text-white py-4 rounded-lg font-semibold hover:bg-amber-600 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">NOVAK <span className="text-amber-500">HOSPITALITY</span></h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner for sustainable growth and innovation in the hospitality industry.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-amber-500 transition">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition">Services</a></li>
                <li><Link to="/about" className="text-gray-400 hover:text-amber-500 transition">About</Link></li>
                <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{companyInfo?.address || "Kirabo Complex"}</li>
                <li>Ntinda, Kampala</li>
                <li>{companyInfo?.phone || "+256 776 464 943"}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Novak Hospitality Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}