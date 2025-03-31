"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useInView } from "@/lib/animation";
import PortfolioFilters from "./PortfolioFilters";

type CategoryType = "all" | "photo" | "video" | "design";

type PortfolioGridProps = {
  activeFilter: CategoryType;
  setActiveFilter: (filter: CategoryType) => void;
};

type ProjectType = {
  id: number;
  title: string;
  year: string;
  category: string;
  image: string;
  type: CategoryType;
  path: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: "White Liners",
    year: "2024",
    category: "Photo",
    image: "https://ext.same-assets.com/3384771792/3500426209.jpeg",
    type: "photo",
    path: "/projects/white-liners"
  },
  {
    id: 2,
    title: "Green Audio",
    year: "2024",
    category: "Photo",
    image: "https://ext.same-assets.com/805643981/1724895126.jpeg",
    type: "photo",
    path: "/projects/green-audio"
  },
  {
    id: 3,
    title: "Nanotech",
    year: "2024",
    category: "Photo",
    image: "https://ext.same-assets.com/1555098367/2188609399.jpeg",
    type: "photo",
    path: "/projects/nanotech"
  },
  {
    id: 4,
    title: "Cool Dude",
    year: "2024",
    category: "Video",
    image: "https://ext.same-assets.com/3293675346/1725407748.jpeg",
    type: "video",
    path: "/projects/cool-dude"
  },
  {
    id: 5,
    title: "Sphere Digital",
    year: "2024",
    category: "Photo",
    image: "https://ext.same-assets.com/3589355785/1274767921.jpeg",
    type: "photo",
    path: "/projects/sphere-digital"
  },
  {
    id: 6,
    title: "Leather Chair",
    year: "2024",
    category: "Photo",
    image: "https://ext.same-assets.com/372895625/1061872183.jpeg",
    type: "photo",
    path: "/projects/leather-chair"
  },
  {
    id: 7,
    title: "Folding Phone",
    year: "2024",
    category: "Design",
    image: "https://ext.same-assets.com/1194773562/3824707122.jpeg",
    type: "design",
    path: "/projects/folding-phone"
  },
  {
    id: 8,
    title: "Enclosure",
    year: "2024",
    category: "Design",
    image: "https://ext.same-assets.com/2111196888/3925729226.jpeg",
    type: "design",
    path: "/projects/enclosure"
  }
];

const ProjectItem = ({ project, index }: { project: ProjectType; index: number }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById(`project-${project.id}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [project.id]);

  return (
    <Link
      href={project.path}
      className="portfolio-item block"
    >
      <div
        id={`project-${project.id}`}
        className={`relative overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px] transition-all duration-1000 ease-out ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
        style={{
          transitionDelay: `${index * 150}ms`
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="project-overlay"></div>
        <div className="portfolio-item-caption">
          <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
          <div className="flex items-center space-x-4">
            <span className="subtitle">{project.year}</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span className="subtitle">{project.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const PortfolioGrid = ({ activeFilter, setActiveFilter }: PortfolioGridProps) => {
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

  // Apply filter effect
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.type === activeFilter);
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  const [sectionInView, setSectionInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          sectionObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaInView(true);
          ctaObserver.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const sectionElement = document.getElementById('portfolio-section');
    const ctaElement = document.getElementById('portfolio-cta');

    if (sectionElement) {
      sectionObserver.observe(sectionElement);
    }

    if (ctaElement) {
      ctaObserver.observe(ctaElement);
    }

    return () => {
      sectionObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <section id="portfolio-section" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <PortfolioFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl">No projects found in this category.</p>
          </div>
        )}

        <div
          id="portfolio-cta"
          className={`mt-20 text-center transition-all duration-1000 ease-out ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="subtitle mb-8">EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN</p>
          <Link href="/archive-gallery" className="inline-block border border-white px-10 py-4 text-lg hover:bg-white hover:text-black transition-colors">
            <span className="mr-2">The</span>
            Archive
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
