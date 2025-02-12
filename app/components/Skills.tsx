import React from 'react';

const skills = [
  { name: 'React', percentage: 95 },
  { name: 'TypeScript', percentage: 90 },
  { name: 'Node.js', percentage: 85 },
  { name: 'Python', percentage: 80 },
  { name: 'AWS', percentage: 75 },
  { name: 'Docker', percentage: 85 }
];

export default function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transform-gpu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${Math.random() * 5}deg) rotateY(${Math.random() * 5}deg)`
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{skill.percentage}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}