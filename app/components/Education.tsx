import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Master's in Computer Science",
    school: "Stanford University",
    year: "2020 - 2022",
    description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
  },
  {
    degree: "Bachelor's in Software Engineering",
    school: "MIT",
    year: "2016 - 2020",
    description: "Focus on full-stack development and software architecture. Dean's List all semesters.",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Education</h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${Math.random() * 3}deg) rotateY(${Math.random() * 3}deg)`
              }}
            >
              <div className="relative h-48">
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.year}</span>
                </div>
                <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{edu.school}</h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}