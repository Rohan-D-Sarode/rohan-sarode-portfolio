import Link from 'next/link';
import Card from '@/components/Card';

export default function Home() {
  const featuredProjects = [
    {
      title: 'SkillGati',
      description: 'A Next.js-based educational platform that offers agriculture-related courses. Developed landing pages and blog pages for an optimized user experience.',
      image: 'https://res.cloudinary.com/djy3sowmo/image/upload/v1741020450/test/i1uxkce96crrvbjsog6n.png',
      link: '/projects/skillgati',
    },
    {
      title: 'SkillGati Operations',
      description: 'Worked on webhooks, APIs, and various application integrations. Built a static Next.js-based website for company introduction and optimized home page visuals.',
      image: 'https://res.cloudinary.com/djy3sowmo/image/upload/v1741021327/test/g56hlnle7ob2mzriikgr.jpg',
      link: '/projects/skillgati-operations',
    },
    {
      title: 'AMG-Bangles',
      description: 'An e-commerce website for a jewelry shop, built using Next.js for an elegant and seamless online shopping experience.',
      image: 'https://res.cloudinary.com/djy3sowmo/image/upload/v1741021185/test/afcf9grodywkij0c8mu4.webp',
      link: '/projects/amg-bangles',
    }
  ];

  const skills = [
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
  ];
  

 

  return (
    <main>
      
      {/* HERO SECTION */}
<section className="relative flex items-center justify-center w-full h-[70vh] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="relative z-10 container mx-auto px-6 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
      Elevate Your Digital Experience
    </h1>
    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 opacity-90">
      Crafting innovative solutions with cutting-edge technologies. Explore my journey.
    </p>
    <Link
      href="/projects"
      className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
      aria-label="View all projects"
    >
      View My Work
    </Link>
  </div>
</section>

  

      {/* FEATURED PROJECTS SECTION (White Background) */}
      <section id="featured-projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <Card key={idx} {...project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="View all projects"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION (Light Gray Background) */}
<section id="about" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      About Me
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
      I&aposm a <strong>Full Stack Developer</strong> passionate about crafting seamless and efficient web applications.  
      I specialize in <strong> Next.js, React, Spring Boot, and Node.js </strong>, creating dynamic and scalable platforms.  
      My experience includes working with <strong>Next.js, MySQL, AWS, Cloudflare, and REST APIs</strong>, allowing me to build robust backend solutions.  
      With a strong foundation in webhooks and integrations, I enjoy optimizing performance and user experience for modern applications.
    </p>
    <Link
      href="/about"
      className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      aria-label="Learn more about me"
    >
      Learn More
    </Link>
  </div>
</section>


      {/* SKILLS SECTION (White Background) */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, idx) => (
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

     {/* Call-to-Action Section */}
     <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let’s Build Something Amazing
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind or want to discuss web development,  
              feel free to <strong>reach out</strong>. Let&aposs collaborate and bring ideas to life!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </section>

      {/* INSPIRATIONAL QUOTE SECTION (White Background) */}
      <section
  id="inspiration"
  className="py-16 bg-black [margin-top:calc(var(--spacing)*16)]"
>
  <div className="container mx-auto px-4 text-center">
    <blockquote className="max-w-3xl mx-auto italic text-2xl md:text-3xl text-white">
    &aposDesign is not just what it looks like and feels like. Design is how it works.&apos
    </blockquote>
    <p className="mt-4 text-lg text-gray-500">– Steve Jobs</p>
  </div>
</section>

    </main>
  );
}
