import { Download, GraduationCap, Briefcase, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Technology',
    year: '2018 - 2020',
    description: 'Specialized in Software Engineering and Web Technologies',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'State University',
    year: '2014 - 2018',
    description: 'Graduated with honors, GPA: 3.8/4.0',
  },
];

const experience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description:
      'Led development of enterprise web applications using React, Node.js, and PostgreSQL. Mentored junior developers and implemented CI/CD pipelines.',
  },
  {
    title: 'Full Stack Developer',
    company: 'StartUp Innovations',
    period: '2019 - 2021',
    description:
      'Built scalable web applications from scratch, collaborated with cross-functional teams, and improved application performance by 40%.',
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 - 2019',
    description:
      'Developed responsive websites and web applications, worked with modern JavaScript frameworks, and maintained client relationships.',
  },
];

const certifications = [
  'AWS Certified Solutions Architect',
  'Google Cloud Professional',
  'Certified Kubernetes Administrator',
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A passionate developer with a love for creating elegant solutions to complex problems
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 hover:bg-white/50 dark:hover:bg-gray-600/50 p-3 rounded-r transition-colors duration-200"
                  >
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 hover:bg-white/50 dark:hover:bg-gray-600/50 p-3 rounded-r transition-colors duration-200"
                    >
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-cyan-600 dark:text-cyan-400 font-medium">{edu.school}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.year}</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  Certifications
                </h3>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}