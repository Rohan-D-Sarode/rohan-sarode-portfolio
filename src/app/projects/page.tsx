import Card from '@/components/Card'

export default function ProjectsPage() {
  const allProjects = [
    {
      title: 'SkillGati',
      description: 'A Next.js-based educational platform that offers agriculture-related courses. Developed landing pages and blog pages for an optimized user experience.',
      image: 'https://res.cloudinary.com/djy3sowmo/image/upload/v1741020450/test/i1uxkce96crrvbjsog6n.png',
      link: '/projects/skillgati',
    },
    {
      title: 'SkillGati Operations',
      description: 'Worked on webhooks, APIs, and various application integrations. Built a static Next.js-based website for company introduction and optimized home page visuals.',
      image: 'https://res.cloudinary.com/djy3sowmo/image/upload/v1741020413/test/q9n8ipdslyqtewrnu4ih.png',
      link: '/projects/skillgati-operations',
    },
    {
      title: 'MotoSquare',
      description: 'A full-stack vehicle consultancy platform built using Next.js and Spring Boot. Features a YouTube channel integration, user reviews, and car consultancy services.',
      image: 'https://res.cloudinary.com/djy3sowmo/image/upload/v1741020734/test/i0cgdim4zupfkrdibumz.webp',
      link: '/projects/motosquare',
    },
    {
      title: 'Krushna Career Academy',
      description: 'A static advertising website for a career academy in Ch Sambhajinagar, showcasing available courses and offerings.',
      image: 'https://res.cloudinary.com/djy3sowmo/image/upload/v1741020792/test/ndouut4xavevjxy46skp.jpg',
      link: '/projects/krushna-career-academy',
    },
    {
      title: 'AMG Bangles',
      description: 'An e-commerce website for a jewelry shop, built using Next.js for an elegant and seamless online shopping experience.',
      image: 'https://res.cloudinary.com/djy3sowmo/image/upload/v1741020889/test/dp4zbblnvqcdwuxatqtg.webp',
      link: '/projects/amg-bangles',
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          My Projects
        </h2>
        
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Explore some of my latest work, ranging from educational platforms to e-commerce solutions.  
          Each project showcases my expertise in <strong>Next.js, Spring Boot, AWS, and UI/UX design</strong> .
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {allProjects.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
