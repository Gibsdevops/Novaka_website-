import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, Users, Target, Lightbulb, Award, Heart, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import { getTeamMembers, getCompanyInfo } from '../apiConfig';
import { fallbackTeam, fallbackCompanyInfo } from '../fallbackData';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [team, setTeam] = useState(fallbackTeam);
  const [companyInfo, setCompanyInfo] = useState(fallbackCompanyInfo);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch team members
        try {
          const teamData = await getTeamMembers();
          if (teamData && teamData.length > 0) {
            setTeam(teamData.sort((a, b) => a.order - b.order));
          }
        } catch (error) {
          console.warn('Using fallback team data');
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

    fetchData();
  }, []);

  const divisions = [
    {
      icon: <Users />,
      title: "Customer",
      description: "We excel at attracting and retaining revenue-driving customers solutions for your business, aligning perfectly with Novak's results-focused approach."
    },
    {
      icon: <CheckCircle />,
      title: "Process",
      description: "Policies and procedures serve as the bedrock of organizational success for any business. We not only acknowledge their crucial role but also diligently incorporate them into our holistic solutions."
    },
    {
      icon: <TrendingUp />,
      title: "People",
      description: "Our dedicated teams excel at profiling, attracting, developing and retaining top-tier talent, ensuring they find their perfect match in the right company or business."
    },
    {
      icon: <Target />,
      title: "Product",
      description: "We assist businesses in evaluating whether the products or services they offer align with market demand and customer preferences."
    }
  ];

  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      number: "01",
      title: "Excellence",
      description: "We are dedicated to exceeding expectations and achieving excellence in all our services, ensuring the best outcomes for our clients and partners."
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      number: "02",
      title: "Innovation",
      description: "We thrive on innovation, fostering creativity, and adapting to change to provide cutting-edge services and stay ahead of industry trends."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      number: "03",
      title: "Client-Centric",
      description: "Client satisfaction is our top priority. We tailor solutions to their needs, making their success our ultimate measure of achievement."
    },
    {
      icon: <Target className="w-12 h-12" />,
      number: "04",
      title: "Sustainability",
      description: "We commit to responsible and sustainable business practices."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      number: "05",
      title: "Integrity",
      description: "We operate with unwavering integrity, emphasizing honesty, transparency, and strong ethical values in all our relationships."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">
                NOVAK <span className="text-amber-500">HOSPITALITY</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-amber-500 transition">Home</Link>
              <a href="#mission" className="text-white hover:text-amber-500 transition">Mission & Vision</a>
              <a href="#team" className="text-white hover:text-amber-500 transition">Our Team</a>
              <a href="#values" className="text-white hover:text-amber-500 transition">Values</a>
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
              <Link to="/" className="block text-white hover:text-amber-500 py-2">Home</Link>
              <a href="#mission" className="block text-white hover:text-amber-500 py-2">Mission & Vision</a>
              <a href="#team" className="block text-white hover:text-amber-500 py-2">Our Team</a>
              <a href="#values" className="block text-white hover:text-amber-500 py-2">Values</a>
              <a href="#contact" className="block bg-amber-500 text-white px-6 py-2 rounded-full text-center">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover the story behind Novak Hospitality Solutions and our commitment to excellence in the hospitality industry
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {companyInfo?.about || "Novak Hospitality Solutions Uganda Ltd is a dynamic and multi-faceted company based in Uganda. Our comprehensive objectives span hospitality consulting, operational excellence, merchandise trading, manufacturing, and Training."}
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We are dedicated to delivering exceptional value to clients and enhancing profitability, aiming to excel while promoting growth and quality service.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 2020, Novak Hospitality is dedicated to nurturing progressive establishments in the food and hospitality sector. Drawing upon extensive experience from senior corporate positions in leading industry firms, the team is adept at managing projects of all sizes and scopes, anywhere and anytime.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                alt="Team Meeting" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* How We Differ */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">How We Differ</h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              We possess a broad range of expertise. This diversity allows us to offer integrated solutions that few others can match, providing a one-stop destination for various business needs. We provide you with the relevant info you need to make the right decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {companyInfo?.mission || "Our mission is to provide unwavering excellence, innovation, and expertise across diverse industries. We're committed to delivering exceptional value and operational excellence to empower businesses and individuals for growth and sustainability."}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {companyInfo?.vision || "Our vision is to lead with innovation, shape industries, and inspire positive change, setting the standard for service, quality, and sustainability."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that drive our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform">
                <div className="absolute top-4 right-4 text-6xl font-bold text-amber-500/20">
                  {value.number}
                </div>
                <div className="relative z-10">
                  <div className="bg-amber-500/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 transition">
                    <div className="text-amber-500 group-hover:text-white transition">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Divisions</h2>
            <p className="text-xl text-gray-600">Four pillars of excellence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="bg-amber-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-amber-500">{division.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{division.title}</h3>
                <p className="text-gray-600 leading-relaxed">{division.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Novak Hospitality boasts a diverse team of seasoned consultants who are carefully matched to projects based on style, cuisine, client requirements, and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={member.id || index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.photo || member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-amber-500 font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{member.bio || member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center">
            <p className="text-lg leading-relaxed">
              Each project is assigned a dedicated full team, ensuring comprehensive support from conceptualization to opening.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Customer Promise</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            At Novak Hospitality Solutions, we're dedicated to transforming your business with strategic consulting. As your trusted partner, we leverage expertise to unlock opportunities, providing tailored solutions for sustainable growth. With a focus on collaboration, integrity, and cutting-edge insights, we ensure your venture not only adapts but leads with distinction. Your success is our priority—excellence in every endeavor is our commitment.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your hospitality business
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <MapPin className="text-amber-500 mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-300 text-sm">{companyInfo?.address || "Kirabo Complex, Ntinda, Kampala"}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Phone className="text-amber-500 mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">{companyInfo?.phone || "+256 776 464 943"}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Mail className="text-amber-500 mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-sm">{companyInfo?.email || "novakhospitalitysoln@gmail.com"}</p>
              </div>
            </div>

            <a href={`mailto:${companyInfo?.email || 'novakhospitalitysoln@gmail.com'}`} className="inline-block bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition transform hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><Link to="/" className="text-gray-400 hover:text-amber-500 transition">Home</Link></li>
                <li><a href="#mission" className="text-gray-400 hover:text-amber-500 transition">Mission & Vision</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-amber-500 transition">Our Team</a></li>
                <li><a href="#values" className="text-gray-400 hover:text-amber-500 transition">Values</a></li>
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