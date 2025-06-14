"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { projectcategories } from '@/public/assets/Data';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function ProjectDetail() {
  const params = useParams();
  const projectSlug = params.slug;

  // Find the project in the data
  let project = null;
  let category = null;

  for (const cat of projectcategories) {
    if (cat.projectDetail) {
      const foundProject = cat.projectDetail.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === projectSlug);
      if (foundProject) {
        project = foundProject;
        category = cat.category;
        break;
      }
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline flex items-center justify-center gap-2">
            <FiArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors">
          <FiArrowLeft className="mr-2" /> Back to Portfolio
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Project Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src={project.src}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Content */}
          <div className="p-8">
            {/* Project Title */}
            <h1 className="text-3xl font-bold mb-4 font-jost text-gray-800" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              {project.name}
            </h1>

            {/* Project Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-jost text-gray-800" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed font-jost">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Contact Button */}
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-jost font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 