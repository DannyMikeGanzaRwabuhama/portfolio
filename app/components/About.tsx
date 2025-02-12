import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div>
            <p className="text-lg text-gray-600 mb-8">
              I'm a passionate full-stack developer with 5 years of experience in creating modern web applications. 
              I specialize in React, Node.js, and cloud technologies, always staying up-to-date with the latest industry trends.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Code className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Clean Code</h3>
                  <p className="mt-1 text-gray-600">Writing maintainable, scalable, and efficient code is my priority.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Palette className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Modern Design</h3>
                  <p className="mt-1 text-gray-600">Creating beautiful, intuitive user interfaces that users love.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Responsive</h3>
                  <p className="mt-1 text-gray-600">Building applications that work flawlessly across all devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}