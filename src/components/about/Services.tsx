const servicesData = [
  {
    title: "Web Design",
    description: "We create stunning and user-friendly websites that make a lasting impression and drive conversions."
  },
  {
    title: "Mobile App Development",
    description: "Our team crafts innovative and feature-rich mobile applications that cater to the needs of modern users."
  },
  {
    title: "E-Commerce Solutions",
    description: "We build seamless online shopping experiences that empower businesses to reach customers globally."
  },
  {
    title: "Digital Marketing",
    description: "Our strategic digital marketing campaigns help businesses amplify their online presence and achieve their growth goals."
  },
  {
    title: "UI/UX Design",
    description: "We design intuitive and visually appealing user interfaces that enhance user experiences and streamline interactions."
  },
  {
    title: "Brand Strategy",
    description: "Our brand strategists develop strong and compelling brand identities that resonate with target audiences."
  },
  {
    title: "SEO Optimization",
    description: "We optimize websites to improve search engine visibility, driving organic traffic and increasing online visibility."
  },
  {
    title: "Social Media Management",
    description: "Our social media experts manage and curate engaging content, fostering meaningful connections with audiences."
  },
  {
    title: "Content Creation",
    description: "Our creative team produces compelling and impactful content that tells your brands story and captivates your audience."
  },
  {
    title: "Data Analytics",
    description: "We analyze data to uncover valuable insights and guide data-driven decision-making for business growth and success."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold mb-16">OUR SERVICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {servicesData.map((service, index) => (
            <div key={index} className="border-t border-border pt-6">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
