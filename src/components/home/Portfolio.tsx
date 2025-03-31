"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

type ProjectType = {
  id: number;
  title: string;
  year: string;
  category: string;
  image: string;
  type: "photo" | "video";
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
  }
];

const ProjectItem = ({ project, index }: { project: ProjectType; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current) return;

      const rect = itemRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const distanceFromTop = rect.top;
      const enterProgress = Math.min(Math.max((windowHeight - distanceFromTop) / (windowHeight * 0.5), 0), 1);
      const exitProgress = Math.min(Math.max(-distanceFromTop / (windowHeight * 0.5), 0), 1);
      
      const progress = Math.min(enterProgress, exitProgress);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const timer = setTimeout(() => {
      setScrollProgress(0);
      setIsVisible(true);
    }, index * 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const scale = isVisible ? (1 - (scrollProgress * scrollProgress * 0.4)) : (0.6 + (scrollProgress * scrollProgress * 0.4));
  const blur = scrollProgress * scrollProgress * 8;
  const opacity = isVisible ? (1 - (scrollProgress * scrollProgress * 0.6)) : (0.4 + (scrollProgress * scrollProgress * 0.6));

  return (
    <div
      id="portfolio"
      ref={itemRef}
      className="w-full transition-all duration-700 ease-out"
      style={{
        transform: `scale(${scale})`,
        filter: `blur(${blur}px)`,
        opacity: opacity,
        position: 'relative',
        zIndex: projects.length - index,
      }}
    >
      <Link href={project.path} className="block relative group">
        <div 
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-500 rounded-2xl ${
              isHovered ? "opacity-30" : "opacity-0"
            }`}
          />
          {/* Project info overlay */}
          <div 
            className={`absolute bottom-0 left-0 p-8 transition-all duration-500 transform ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex items-center space-x-4">
              <span className="text-white/80">{project.year}</span>
              <span className="w-1 h-1 bg-white/80 rounded-full"></span>
              <span className="text-white/80">{project.category}</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Custom cursor */}
      <div 
        className={`fixed pointer-events-none z-50 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        <div className="w-20 h-20 rounded-full border border-gray-300/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-sm text-white font-medium tracking-wider">OPEN</span>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [sectionInView, setSectionInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`mt-20 text-center transition-all duration-1000 ease-out ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="subtitle max-w-3xl mx-auto mb-8">
            CRAFTING WEBSITES WHERE THE ELEGANCE OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING PRODUCTS.
          </p>
          <Link 
            href="/portfolio-grid" 
            className="inline-block border border-white px-10 py-4 text-lg hover:bg-white hover:text-black transition-colors duration-300"
          >
            See All Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
