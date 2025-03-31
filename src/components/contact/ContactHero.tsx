const ContactHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h1 className="hero-title">CONTACT</h1>
        <p className="subtitle max-w-3xl mx-auto mt-4 text-center">
          WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND DEVELOPMENT.
          OUR WORK IS ALWAYS AT THE INTERSECTION OF DESIGN AND TECHNOLOGY.
        </p>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-between items-center px-10">
        <div className="flex items-center space-x-2">
          <span className="subtitle">Scroll to Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted"
          >
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </div>

        <div className="subtitle">Let's Connect</div>
      </div>
    </section>
  );
};

export default ContactHero;
