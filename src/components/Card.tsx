"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  alt?: string;
};

export default function Card({
  title,
  description,
  image,
  link,
  alt,
}: CardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      href={link}
      className="group relative block overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 flex justify-center items-center text-center"
      role="article"
      aria-label={`Learn more about ${title}`}
    >
      {/* Image Section */}
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={alt || title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover object-center transition-transform duration-300 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
          priority
        />
        {/* Gradient overlay for text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          aria-hidden="true"
        />
        {/* Always-visible heading */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>

      {/* Info Panel */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-300 ease-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <div className="bg-white bg-opacity-90 backdrop-blur-sm p-4">
          <p className="text-gray-800 mb-3">{description}</p>
          <span
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-white font-semibold shadow hover:shadow-lg hover:opacity-90 transition-colors duration-300 pointer-events-auto"
          >
            Learn More
          </span>
        </div>
      </div>
    </Link>
  );
}
