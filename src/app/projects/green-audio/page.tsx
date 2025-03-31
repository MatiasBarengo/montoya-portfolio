import Header from "@/components/layout/Header";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetails from "@/components/projects/ProjectDetails";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

export const metadata = {
  title: "Green Audio - Montoya Portfolio",
  description: "Green Audio project - An environmentally conscious audio equipment brand with sustainable design."
};

const projectData = {
  title: "Green Audio",
  year: "2024",
  category: "Photo",
  image: "https://ext.same-assets.com/805643981/1724895126.jpeg",
  description: "Green Audio is a branding and product design project for an environmentally conscious audio equipment company. The project involved creating a visual identity that reflects the brand's commitment to sustainability while maintaining a premium feel. We developed a design system that uses eco-friendly materials and natural color palettes to convey the brand's values.",
  client: "Green Audio Technologies",
  services: [
    "Brand Strategy",
    "Product Photography",
    "Visual Identity",
    "Packaging Design"
  ],
  images: [
    "https://ext.same-assets.com/805643981/1724895126.jpeg",
    "https://ext.same-assets.com/1555098367/2188609399.jpeg",
    "https://ext.same-assets.com/3293675346/1725407748.jpeg"
  ],
  nextProject: {
    title: "Nanotech",
    path: "/projects/nanotech"
  }
};

export default function GreenAudioProject() {
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
