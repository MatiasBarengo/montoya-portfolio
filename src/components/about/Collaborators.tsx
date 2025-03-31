const collaborators = [
  "Karioka Studio",
  "Andre",
  "Mattey Webber",
  "Clapat Themes",
  "California",
  "Rare View",
  "Karioka Studio",
  "Tetris",
  "Harington",
  "Rare View"
];

const Collaborators = () => {
  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold mb-16">Collaborators</h2>
        <p className="subtitle mb-14">WE DEVELOP GORGEOUS AND MEMORABLE PROJECTS FOR OUR CLIENTS.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="border-t border-border pt-4">
              <p className="text-xl">{collaborator}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="subtitle mb-8">CONTACT US AND LET'S BRING YOUR VISION TO LIFE</p>
          <a href="/contact" className="inline-block border border-white px-10 py-4 text-lg hover:bg-white hover:text-black transition-colors">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
