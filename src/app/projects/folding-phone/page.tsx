import Header from "@/components/layout/Header";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetails from "@/components/projects/ProjectDetails";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

export const metadata = {
  title: "Folding Phone - Montoya Portfolio",
  description: "Folding Phone project - A concept design for a next generation foldable smartphone with innovative UI/UX."
};

const projectData = {
  title: "Folding Phone",
  year: "2024",
  category: "Design",
  image: "https://ext.same-assets.com/1194773562/3824707122.jpeg",
  description: "Folding Phone is a concept design project exploring the future of smartphone technology. We created an innovative foldable device design with a seamless user experience that adapts to both folded and unfolded states. The project involved extensive research on user behavior, ergonomics, and material properties to create a design that is both practical and visually appealing.",
  client: "TechVision Labs",
  services: [
    "Product Design",
    "UI/UX Design",
    "Concept Development",
    "3D Modeling"
  ],
  images: [
    "https://ext.same-assets.com/1194773562/3824707122.jpeg",
    "https://ext.same-assets.com/2111196888/3925729226.jpeg",
    "https://ext.same-assets.com/372895625/1061872183.jpeg"
  ],
  nextProject: {
    title: "Enclosure",
    path: "/projects/enclosure"
  }
};

export default function FoldingPhoneProject() {
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
