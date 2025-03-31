import Image from "next/image";
import Link from "next/link";

type ProjectDetailsProps = {
  description: string;
  client: string;
  services: string[];
  images: string[];
  nextProject: {
    title: string;
    path: string;
  };
};

const ProjectDetails = ({ description, client, services, images, nextProject }: ProjectDetailsProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        {/* Project Details */}
        <div className="flex flex-col md:flex-row justify-between mb-20">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <p className="text-xl leading-relaxed">{description}</p>
          </div>

          <div className="w-full md:w-1/3">
            <div className="mb-8">
              <h6 className="subtitle mb-4">Client</h6>
              <p className="text-xl">{client}</p>
            </div>

            <div>
              <h6 className="subtitle mb-4">Services</h6>
              <ul className="space-y-1">
                {services.map((service, index) => (
                  <li key={index} className="text-xl">{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="space-y-10">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[16/9] w-full">
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Next Project Link */}
        <div className="mt-24 text-center">
          <p className="subtitle mb-8">NEXT PROJECT</p>
          <Link href={nextProject.path} className="inline-block border border-white px-10 py-4 text-lg hover:bg-white hover:text-black transition-colors">
            {nextProject.title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
