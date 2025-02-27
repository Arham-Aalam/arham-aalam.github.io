import React from 'react';
import { Github, Youtube, ExternalLink, Briefcase, GraduationCap, Twitter, Linkedin } from 'lucide-react';

// Sample data - replace with your actual information
const timelineData = [
  {
    year: '2024 - present',
    title: 'Software Engineer 3',
    description: 'Got promoted to L4',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    year: '2022 - 2024',
    title: 'Software Engineer 2',
    description: 'Joined Google, Solving compliance problems by leveraging the tech developed at Google.',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    year: '2020 - 2022',
    title: 'Software Engineer',
    description: 'Worked as a SWE at Torque Vision Lab.',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    year: '2018 - 2020',
    title: 'Software Engineer',
    description: 'Did freelancing in ML domain.',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    year: '2020',
    title: 'Bachelore\'s in Computer Science',
    description: '',
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

const projectsData = [
  {
    title: 'Astral Space',
    description: "Join us to play this fantastic artificial intelligence-based game 'Astral Space' with an amazing space theme with lots of adventure and challenges. it is a hyper-casual game that's very easy to play. Here you can use your hands to control the ball and can destroy other obstacles in your way to gain points, but always keep away from black holes, damage obstacles, and so on.",
    links: {
      youtube: 'https://youtube.com/watch?v=demo',
    },
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'AI can see it!',
    description: "This was my college days project, I took this inspiration from the Pokemon cartoon where Ash was having a gadget to identify the breed of a Pokemon by just scanning them. Since we don't have Pokemons in real life so we decided to use very general-purpose objects. This tool helps us to find all the information available over the internet about a particular scanned object.",
    links: {
      youtube: 'https://www.youtube.com/watch?v=BRJkOP_EJkk'
    },
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Computer Vision',
    description: "This project was a small R&D for demonstrating the different possibilities and use cases of Mediapipe, In this video I have tried to make real world interactable, This is how we can interact with the virtual objects if we can localize the hand landmarks, After the analysis I have found that the depth has a crucial role to make the real world experience and this is how Oculus and MS hololens works.",
    links: {
      youtube: 'https://youtu.be/CilgM7gMFzU'
    },
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Visicam',
    description: "An Android app which helps in streaming the live video from your phone to router which can be accessed by any computer connected to the same WIFI.",
    links: {
      youtube: 'https://www.youtube.com/shorts/XSp6ew_BoaE'
    },
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800',
  },
];

// Social media links
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Arham-Aalam',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'X',
    url: 'https://x.com/AalamArham',
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arham-ansari-9469b8139/',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@arhamcodes',
    icon: <Youtube className="w-5 h-5" />,
  },
];

function App() {
  return (
    <div className="min-h-screen space-bg text-white relative">
      {/* Hero Section */}
      <header className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 glow-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Arham Ansari</h1>
          <p className="text-xl text-blue-200">Software Engineer @Google</p>
        </div>
      </header>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center glow-text">My Journey</h2>
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="flex gap-4 timeline-item">
              <div className="flex flex-col items-center">
                <div className="timeline-icon p-2 rounded-full text-white">
                  {item.icon}
                </div>
                {index < timelineData.length - 1 && (
                  <div className="flex-1 w-0.5 timeline-connector my-2"></div>
                )}
              </div>
              <div className="project-card rounded-lg p-6 flex-1 transform hover:scale-[1.02] transition-transform">
                <div className="text-sm text-purple-400 font-semibold">{item.year}</div>
                <h3 className="text-xl font-bold mt-1 text-blue-200">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center glow-text">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card rounded-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-200">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    {project.links.demo && (
                      <a 
                        href={project.links.demo}
                        className="flex items-center gap-1 text-purple-400 hover:text-purple-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        className="flex items-center gap-1 text-blue-300 hover:text-blue-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.links.youtube && (
                      <a 
                        href={project.links.youtube}
                        className="flex items-center gap-1 text-purple-400 hover:text-purple-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="text-blue-300 hover:text-purple-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <div className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
            <p className="text-blue-200">© 2024 Arham Ansari. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;