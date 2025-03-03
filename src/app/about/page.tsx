
export default function AboutPage() {
    return (
      <main>
        
        {/* About Me Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              About Me
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Hi! I’m <span className="font-semibold text-green-600">Rohan Deepak Sarode</span>, a dedicated <strong>Full Stack Developer</strong> with experience in <strong>Next.js, React, Spring Boot, and Node.js</strong>.  
                I specialize in building <strong>scalable web applications</strong>, optimizing performance, and enhancing user experience. My expertise spans <strong>MySQL, AWS, Cloudflare, REST APIs, and webhooks</strong>.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                I have a <strong>B.Tech in Computer Science and Technology</strong> and a <strong>PG Diploma in Advanced Computing (PG-DAC)</strong>.  
                My journey includes working on <strong>SkillGati, MotoSquare, AMG Bangles</strong>, focusing on <strong>front-end and full-stack development</strong> .
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                When I’m not coding, I enjoy playing <strong>video games (Dark Souls, Elden Ring, Silent Hill, and more)</strong>, exploring new technologies, and reading tech blogs.  
                Feel free to <strong> browse my portfolio</strong> or reach out for collaboration!
              </p>
            </div>
          </div>
        </section>
  
        {/* Skills Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              My Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'JavaScript',
                'React',
                'Next.js',
                'Tailwind CSS',
                'Node.js',
                'Express.js',
                'Spring Boot',
                'Java',
                'MongoDB',
                'MySQL',
                'Postman',
                'AWS',
                'Cloudflare',
                'Webhooks',
                'REST APIs',
                'Git',
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-lg font-medium text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Experience Section */}
        <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
      My Experience
    </h2>
    <div className="max-w-3xl mx-auto space-y-8">
      {[
        {
          role: 'Full Stack Developer',
          company: 'SkillGati',
          duration: 'Jan 2024 - Oct 2024',
          description:
            'Designed and optimized landing pages and blog sections for the SkillGati educational platform using Next.js. Integrated APIs, webhooks, and automated processes for SkillGati Ops, improving platform efficiency.',
        },
        {
          role: 'Full Stack Developer',
          company: 'MotoSquare',
          duration: '2024 - Present',
          description:
            'Developing a full-stack vehicle consultancy platform using Next.js and Spring Boot. Features include YouTube integration, user reviews, and automotive consultancy services.',
        },
        
        {
          role: 'Full Stack Developer',
          company: 'AMG Bangles',
          duration: '2025 - Present',
          description:
            'Building an elegant e-commerce platform for a jewelry business using Next.js, focusing on user experience, responsiveness, and secure transactions.',
        },
      ].map((exp, idx) => (
        <div
          key={idx}
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors">
            {exp.role}
          </h3>
          <p className="text-lg text-gray-600 mb-2">{exp.company}</p>
          <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
          <p className="text-gray-700">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  
        {/* Call-to-Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let’s Build Something Amazing
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind or want to discuss web development,  
              feel free to <strong>reach out</strong>. Let's collaborate and bring ideas to life!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
    );
  }
  