import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'A smart task management system that uses AI to prioritize and categorize tasks. Built with React, Node.js, and OpenAI API.',
    image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'Real-time Collaboration Platform',
    description: 'A collaborative workspace with real-time document editing, video calls, and team chat. Uses WebRTC and WebSocket.',
    image: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'WebRTC', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'Blockchain NFT Marketplace',
    description: 'A decentralized marketplace for NFTs with wallet integration and smart contract interaction.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Solidity', 'Web3.js', 'IPFS', 'Ethereum'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false
  },
  {
    title: 'AI Image Generation App',
    description: 'An application that generates unique images using DALL-E API with advanced prompt engineering.',
    image: 'https://images.unsplash.com/photo-1686191128892-3b37813f0e78?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'DALL-E API', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${Math.random() * 3}deg) rotateY(${Math.random() * 3}deg)`
              }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1 bg-indigo-600 text-white text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}