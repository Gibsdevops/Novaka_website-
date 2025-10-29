// src/api/fallbackData.js

import { TrendingUp, Users, Award, Target, CheckCircle, Lightbulb } from 'lucide-react';

export const fallbackServices = [
  {
    id: 1,
    title: "Operations Excellence",
    intro: "Operations Alignment, Quality Control & Standardization, Food Safety Management, Success Routines, and Operational Cash Management",
    icon: "TrendingUp",
    order: 5,
    featured: true
  },
  {
    id: 2,
    title: "People Management",
    intro: "Training Programs, Customized Training, People Management Systems, Recruitment Management and Employee Performance Analytics",
    icon: "Users",
    order: 4,
    featured: true
  },
  {
    id: 3,
    title: "Financial Advisory",
    intro: "Predictive Sales Analytics, Cost Management, P&L Analysis, Budget Analysis, Cost Controls Advisory",
    icon: "Award",
    order: 1,
    featured: true
  },
  {
    id: 4,
    title: "Technology Solutions",
    intro: "POS & Back Office, Access Control, CCTV, Fire Alarms, Audio/Visual Solutions and Customized Business Templates",
    icon: "Target",
    order: 0,
    featured: true
  },
  {
    id: 5,
    title: "Customer Experience",
    intro: "Sales Channel Analytics, Delivery Strategy, Operations Compliance Audits, Customer Experience Implementation",
    icon: "CheckCircle",
    order: 3,
    featured: true
  },
  {
    id: 6,
    title: "Business Turnarounds",
    intro: "Menu Engineering, Inventory Management, Purchasing Advisory, Startup Consulting, KPI Implementation",
    icon: "Lightbulb",
    order: 6,
    featured: false
  }
];

export const fallbackTeam = [
  {
    id: 1,
    name: "Isaac, Jacob Luwo",
    role: "Founder",
    bio: "Leads the company in all strategic operations and financial performance keeping the rest of us on Track.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    order: 1
  },
  {
    id: 2,
    name: "Tonny, Ochieng",
    role: "Senior Consultant",
    bio: "Leads the project delivery for our clients. Provides strategic solutions and addresses business needs.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    linkedin: "#",
    order: 2
  },
  {
    id: 3,
    name: "Allan, Twesigye",
    role: "Hotel Mgmt/Operations",
    bio: "Oversees supply chain, logistics, inventory, quality control, Budget & Third Party relationships at the site.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    linkedin: "#",
    order: 3
  },
  {
    id: 4,
    name: "Brian, Luzze",
    role: "Technology Expert",
    bio: "Acts as the internal server providing knowledge and advice related to technological products/issues.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "#",
    order: 4
  },
  {
    id: 5,
    name: "Muhammes, Baluku",
    role: "Head of Culinary",
    bio: "Leads the company in all aspects of culinary development, kitchen Talent and making great Food.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    linkedin: "#",
    order: 5
  }
];

export const fallbackTestimonials = [
  {
    id: 1,
    author: "John Smith",
    role: "Hotel Owner",
    content: "I can't speak highly enough of Novak Hospitality Solutions. As a hotel owner, I was facing challenges in optimizing our operations and enhancing guest experiences. Novak's expertise in the hospitality industry made all the difference. Their commitment to excellence and client satisfaction is truly outstanding. Thanks to them, we've seen a remarkable improvement in our efficiency, which has translated into increased profitability.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    published: true
  }
];

export const fallbackCompanyInfo = {
  id: 1,
  name: "Novak Hospitality Solutions",
  subtitle: "Transform your business with strategic consulting excellence",
  about: "Novak Hospitality Solutions Uganda Ltd is a dynamic and multi-faceted company dedicated to delivering exceptional value to clients and enhancing profitability across diverse industries.",
  mission: "Our mission is to provide unwavering excellence, innovation, and expertise across diverse industries. We're committed to delivering exceptional value and operational excellence to empower businesses and individuals for growth and sustainability.",
  vision: "Our vision is to lead with innovation, shape industries, and inspire positive change, setting the standard for service, quality, and sustainability.",
  email: "novakhospitalitysoln@gmail.com",
  phone: "+256 776 464 943",
  address: "Kirabo Complex, Ntinda, Kampala",
  facebook: "#",
  instagram: "#",
  linkedin: "#",
  twitter: "#"
};

export const fallbackClients = [];