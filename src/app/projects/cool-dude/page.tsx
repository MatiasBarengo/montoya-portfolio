import Header from "@/components/layout/Header";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetails from "@/components/projects/ProjectDetails";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

export const metadata = {
  title: "Cool Dude - Montoya Portfolio",
  description: "Cool Dude project - A vibrant video production for a youth fashion brand, showcasing contemporary streetwear in urban settings."
};

const projectData = {
  title: "Cool Dude",
  year: "2024",
  category: "Video",
  image: "https://ext.same-assets.com/3293675346/1725407748.jpeg",
  description: "Cool Dude is a high-energy video production for a youth fashion brand's summer collection. We created a dynamic visual narrative that captures the brand's playful and trendy aesthetic. The project involved location scouting, casting, cinematography, and sophisticated post-production techniques to create a compelling storytelling experience that resonates with the target audience.",
  client: "Urban Street Apparel",
  services: [
    "Video Production",
    "Cinematography",
    "Direction",
    "Post-Production",
    "Color Grading"
  ],
  images: [
    "https://ext.same-assets.com/3293675346/1725407748.jpeg",
    "https://ext.same-assets.com/3589355785/1274767921.jpeg",
    "https://ext.same-assets.com/372895625/1061872183.jpeg"
  ],
  nextProject: {
    title: "Sphere Digital",
    path: "/projects/sphere-digital"
  }
};

export default function CoolDudeProject() {
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
