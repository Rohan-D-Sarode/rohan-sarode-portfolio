// src/app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "../../data/projects.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string;
  github?: string;
  live?: string;
  technologies?: string[];
  features?: string[];
};

async function getProjectBySlug(slug: string): Promise<Project | null> {
  return projects.find((project: Project) => project.slug === slug) || null;
}

export default async function ProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{project.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>

      <div className="relative w-full h-150 mb-8">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className=" rounded-lg shadow-lg"
        />
      </div>

      <article className="prose prose-lg mx-auto text-gray-800 mb-8">
        <p>{project.content}</p>
      </article>

      {/* Technologies Used */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Technologies Used</h2>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaGithub size={20} />
            <span>View on GitHub</span>
          </Link>
        )}
        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
          >
            <FaExternalLinkAlt size={20} />
            <span>Live Demo</span>
          </Link>
        )}
      </div>

      <div className="mt-12 text-center">
        <Link href="/projects" className="text-blue-600 hover:underline">
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
