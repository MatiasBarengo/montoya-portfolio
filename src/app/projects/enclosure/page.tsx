import Header from "@/components/layout/Header";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetails from "@/components/projects/ProjectDetails";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

export const metadata = {
  title: "Enclosure - Montoya Portfolio",
  description: "Enclosure project - A minimalist architectural design concept focused on harmonizing indoor and outdoor spaces."
};

const projectData = {
  title: "Enclosure",
  year: "2024",
  category: "Design",
  image: "https://ext.same-assets.com/2111196888/3925729226.jpeg",
  description: "Enclosure is an architectural design concept that explores the relationship between built environments and natural surroundings. The project aims to create spaces that blur the boundaries between indoors and outdoors, using transparencies, natural materials, and strategic openings. We developed a complete design language that emphasizes sustainability, connection to nature, and human wellbeing.",
  client: "EcoArchitects",
  services: [
    "Architectural Design",
    "Space Planning",
    "3D Visualization",
    "Materials Research"
  ],
  images: [
    "https://ext.same-assets.com/2111196888/3925729226.jpeg",
    "https://ext.same-assets.com/3293675346/1725407748.jpeg",
    "https://ext.same-assets.com/3589355785/1274767921.jpeg"
  ],
  nextProject: {
    title: "White Liners",
    path: "/projects/white-liners"
  }
};

export default function EnclosureProject() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectHero
        title={projectData.title}
        year={projectData.year}
        category={projectData.category}
        image={projectData.image}
      />
      <ProjectDetails
        description={projectData.description}
        client={projectData.client}
        services={projectData.services}
        images={projectData.images}
        nextProject={projectData.nextProject}
      />
      <Footer />
      <BackToTop />
    </main>
  );
}
