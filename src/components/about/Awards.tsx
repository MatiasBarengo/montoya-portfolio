import Image from "next/image";

const awardImages = [
  "https://ext.same-assets.com/681467530/2772692066.jpeg",
  "https://ext.same-assets.com/570952691/1669825272.jpeg",
  "https://ext.same-assets.com/2388926031/2022442950.jpeg"
];

const awardsList = [
  {
    name: "Awwwards",
    description: "Developer Award, Site of the Day, Honorable Mention",
    count: "x08 Awards"
  },
  {
    name: "CSS Design Awards",
    description: "Website of the Day, Special Kudos",
    count: "x06 Awards"
  },
  {
    name: "Behance",
    description: "Featured UX/UI and XD Design",
    count: "x04 Awards"
  },
  {
    name: "CSS Light",
    description: "Featured Website, Featured Design",
    count: "x12 Awards"
  },
  {
    name: "FWA Awards",
    description: "FWA of the day, FWA of the month",
    count: "x04 Awards"
  },
  {
    name: "One Page Love",
    description: "Site of the Day",
    count: "x10 Awards"
  },
  {
    name: "SiteInspire",
    description: "Featured Website",
    count: "x08 Awards"
  },
  {
    name: "CSS Winner",
    description: "Site of the Day, Special Mention",
    count: "x12 Awards"
  }
];

const Awards = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold mb-16">Recognitions</h2>
        <p className="subtitle mb-14">OUR PRESTIGIOUS DESIGN AWARDS</p>

        {/* Award Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {awardImages.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image}
                alt={`Award ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* More Awards List */}
        <h2 className="text-4xl font-bold mb-12">More Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {awardsList.map((award, index) => (
            <div key={index} className="flex border-b border-border pb-4">
              <div className="w-1/2">
                <h3 className="text-xl font-semibold">{award.name}</h3>
              </div>
              <div className="w-1/2">
                <p>{award.description}</p>
                <p className="text-muted-foreground">{award.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
