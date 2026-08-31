import { useState, useRef, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Facebook, Mail, Code, Briefcase, User, Download, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React.js', level: 70 },
    { name: 'Tailwind CSS', level: 60 },
    { name: 'SASS/SCSS', level: 50 }
  ];

  const projects = [
    {
      title: 'Fashion Frenzy',
      description: 'Nike minimal clone web application built with React.js, Tailwind CSS, and Firebase.',
      link: 'https://nike-silk.vercel.app/',
      tags: ['React', 'Tailwind', 'Firebase'],
      image:"/assets/nike.png"
    },
    {
      title: 'Hotel Trivia',
      description: 'Hotel booking application using the Booking.com API to retrieve hotel data from locations worldwide.',
      link: 'https://real-state-beige.vercel.app/',
      tags: ['API', 'React', 'Travel'],
      image:"/assets/Hotel.png"
    },
    {
      title: 'Next Blog',
      description: 'Cutting-edge blog project using Next.js with Supabase database management.',
      link: 'https://blog2go.onrender.com/',
      tags: ['Next.js', 'Supabase', 'Blog'],
      image:"/assets/blog.png"
    },
    {
      title: 'Gym Fusion',
      description: 'Fitness web application - your one stop for getting the body you want.',
      link: 'https://gym-fusion.vercel.app/',
      tags: ['React', 'Fitness', 'UI/UX'],
      image:"/assets/gym.jpg"
    },
    {
      title: 'Build Bay',
      description: 'Construction company website specializing in building houses into homes.',
      link: 'https://build-bay-psi.vercel.app/',
      tags: ['React', 'Business', 'Construction'],
      image:"/assets/build_bay.png"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-teal-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Luthando
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['home', 'about', 'services', 'resume', 'portfolio', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-slate-300 hover:text-teal-400 transition-colors duration-300 capitalize relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="https://github.com/Luthando496" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/luthando-didiza-43494b1a6/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-teal-400">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              {['home', 'about', 'services', 'resume', 'portfolio', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-slate-300 hover:text-teal-400 transition-colors capitalize"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-500/10"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-teal-400 text-lg font-medium">Welcome to my portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Luthando</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-400 mb-4">Frontend Developer</p>
          <p className="text-xl text-slate-500 mb-12">Based in Cape Town, South Africa</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1">
              Hire Me
            </a>
            <a href="#portfolio" className="px-8 py-4 border border-teal-500 rounded-full font-medium hover:bg-teal-500/10 transition-all duration-300">
              View Work
            </a>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-teal-400" size={32} />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-16"></div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl font-semibold">
                I'm <span className="text-teal-400">Luthando Didiza</span>, a Web Developer
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                I help you build brands for your business at an affordable price. With over 3 years of experience, I've delivered exceptional results through dedicated work and attention to detail. My passion lies in creating intuitive, responsive web applications that provide seamless user experiences.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Delivering work within time and budget while exceeding client requirements is my motto. I specialize in modern web technologies and stay updated with the latest industry trends to provide cutting-edge solutions.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="space-y-6">
                <div className="border-b border-slate-700 pb-4">
                  <span className="text-teal-400 font-semibold">Name:</span>
                  <p className="text-slate-300 mt-1">Luthando Didiza</p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <span className="text-teal-400 font-semibold">Email:</span>
                  <p className="text-slate-300 mt-1 text-sm">luthandodidza197@gmail.com</p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <span className="text-teal-400 font-semibold">Age:</span>
                  <p className="text-slate-300 mt-1">{2025 - 2001}</p>
                </div>
                <div className="pb-4">
                  <span className="text-teal-400 font-semibold">From:</span>
                  <p className="text-slate-300 mt-1">Cape Town, South Africa</p>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '7+', label: 'Happy Clients' },
              { value: '30+', label: 'Projects Done' },
              { value: '4+', label: 'Awards' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.value}</h3>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={40} />,
                title: 'Web Development',
                description: 'Building modern, responsive websites with clean code and best practices. Specialized in creating seamless user experiences.'
              },
              {
                icon: <User size={40} />,
                title: 'Frontend Development',
                description: 'Creating intuitive user interfaces with React.js, implementing interactive elements, and ensuring responsive design across all devices.'
              },
              {
                icon: <Briefcase size={40} />,
                title: 'Backend Development',
                description: 'Developing robust server-side applications using Node.js, Express.js, and MongoDB for scalable solutions.'
              }
            ].map((service, index) => (
              <div key={index} className="group p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}

                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-100">{service.title}</h3>
                <div className="w-16 h-1 bg-teal-400 mb-4"></div>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-teal-400">Education</h3>
              <div className="space-y-6">
                {[
                  { year: '2019 - 2020', title: 'Frontend Development', institution: 'LinkedIn Learning', description: 'Completed certificate in frontend development, mastering HTML, CSS, and JavaScript.' },
                  { year: '2020 - 2021', title: 'React.js Mastery', institution: 'Coursera', description: 'Earned certificate in React.js, focusing on components, hooks, and state management.' },
                  { year: '2014 - 2019', title: 'Matric Certificate', institution: 'Mfuleni High School', description: 'Obtained Matric Certificate after completing high school education.' }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300">
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm">{item.year}</span>
                    <h4 className="text-xl font-semibold mt-4 mb-2">{item.title}</h4>
                    <p className="text-teal-400 mb-2">{item.institution}</p>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-8 text-teal-400">Experience</h3>
              <div className="space-y-6">
                {[
                  { year: '2023 - Present', title: 'Frontend Developer', institution: 'Freelance', description: 'Developed responsive web applications using React, Tailwind CSS, and Next.js for various clients.' },
                  { year: '2022 - 2023', title: 'Intern Developer', institution: 'ComegetCred Finance', description: 'Contributed to building React-based dashboards, learning advanced state management and API integration.' }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300">
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm">{item.year}</span>
                    <h4 className="text-xl font-semibold mt-4 mb-2">{item.title}</h4>
                    <p className="text-teal-400 mb-2">{item.institution}</p>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-slate-800">
                  <div className="w-full h-full flex items-center justify-center text-slate-600">
                    <img src={project.image} alt="gym_image" className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-16"></div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-teal-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-16"></div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-slate-100"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-slate-100"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="6"
              className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-slate-100 resize-none"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500">© 2024 Luthando Didiza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;