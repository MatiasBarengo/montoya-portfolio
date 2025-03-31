import Image from "next/image";

type ProjectHeroProps = {
  title: string;
  year: string;
  category: string;
  image: string;
};

const ProjectHero = ({ title, year, category, image }: ProjectHeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10 text-center">
        <h1 className="hero-title">{title}</h1>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <span className="subtitle">{year}</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span className="subtitle">{category}</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-between items-center px-10">
        <div className="flex items-center space-x-2">
          <span className="subtitle">Scroll to Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted"
          >
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </div>

        <div className="subtitle">Project Details</div>
      </div>
    </section>
  );
};

export default ProjectHero;
