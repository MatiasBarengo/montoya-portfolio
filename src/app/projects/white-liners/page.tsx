import Header from "@/components/layout/Header";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetails from "@/components/projects/ProjectDetails";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

export const metadata = {
  title: "White Liners - Montoya Portfolio",
  description: "White Liners project - A photography project showcasing minimalist design and clean aesthetics."
};

const projectData = {
  title: "White Liners",
  year: "2024",
  category: "Photo",
  image: "https://ext.same-assets.com/3384771792/3500426209.jpeg",
  description: "White Liners is a photography project that explores the concept of minimalist design and clean aesthetics. The project aims to demonstrate how simple lines and shapes can create powerful visual statements. Through careful composition and lighting, we've created a series of images that convey elegance and sophistication with minimal elements.",
  client: "Fashion Brand Co.",
  services: [
    "Photography",
    "Art Direction",
    "Post Production",
    "Creative Concept"
  ],
  images: [
    "https://ext.same-assets.com/3384771792/3500426209.jpeg",
    "https://ext.same-assets.com/805643981/1724895126.jpeg",
    "https://ext.same-assets.com/1555098367/2188609399.jpeg"
  ],
  nextProject: {
    title: "Green Audio",
    path: "/projects/green-audio"
  }
};

export default function WhiteLinersProject() {
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
