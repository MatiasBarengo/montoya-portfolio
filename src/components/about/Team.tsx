import Image from "next/image";

const teamMembers = [
  {
    name: "Tom Harrison",
    position: "Web Designer",
    year: "Since 2010",
    image: "https://ext.same-assets.com/1358765270/913215846.jpeg"
  },
  {
    name: "Ricky Romano",
    position: "UX Designer",
    year: "Since 2012",
    image: "https://ext.same-assets.com/1438930234/159585448.jpeg"
  },
  {
    name: "Jane Reeves",
    position: "Art Director",
    year: "Since 2014",
    image: "https://ext.same-assets.com/4154363187/2722245232.jpeg"
  },
  {
    name: "Billy Craft",
    position: "Developer",
    year: "Since 2016",
    image: "https://ext.same-assets.com/1361953195/3726153944.jpeg"
  },
  {
    name: "Cheryl Mezines",
    position: "Support Guy",
    year: "Since 2018",
    image: "https://ext.same-assets.com/2100752945/3858228359.jpeg"
  }
];

const TeamMember = ({ member }: { member: typeof teamMembers[0] }) => {
  return (
    <div className="relative">
      <div className="relative aspect-[3/4] overflow-hidden mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <span className="subtitle block mb-1">{member.year}</span>
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-muted-foreground">{member.position}</p>
    </div>
  );
};

const Team = () => {
  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
