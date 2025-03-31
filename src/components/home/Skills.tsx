"use client";

import Link from "next/link";
import { useInView } from "@/lib/animation";

const skills = [
  "Web Design",
  "Mobile App Development",
  "UI/UX Design",
  "SEO Optimization",
  "Social Media Management",
  "Data Analytics",
  "Content Creation"
];

const Skills = () => {
  const [skillsRef, isSkillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, isContactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, isCtaInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 md:px-10">
        <div
          className="flex flex-col md:flex-row"
          ref={skillsRef}
        >
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h3
              className={`text-2xl font-semibold mb-8 transition-all duration-700 ${
                isSkillsInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              OUR SKILLS COVER
            </h3>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className={`flex items-center space-x-4 transition-all duration-700 ${
                    isSkillsInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="block w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-lg">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`w-full md:w-1/2 flex flex-col md:items-end transition-all duration-700 ${
              isSkillsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            ref={contactRef}
          >
            <div
              className="mb-8"
              style={{ transitionDelay: "200ms" }}
            >
              <h6 className="subtitle mb-2">Email</h6>
              <p className="text-xl">office@montoya.com</p>
            </div>

            <div
              className="mb-8"
              style={{ transitionDelay: "400ms" }}
            >
              <h6 className="subtitle mb-2">Address</h6>
              <p className="text-xl">35 M Str, New York, USA</p>
            </div>

            <div
              style={{ transitionDelay: "600ms" }}
            >
              <h6 className="subtitle mb-2">Phone</h6>
              <p className="text-xl">0040 (7763) 574-8901</p>
            </div>
          </div>
        </div>

        <div
          className={`mt-24 text-center transition-all duration-1000 ease-out ${
            isCtaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          ref={ctaRef}
        >
          <p className="subtitle mb-8">EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN</p>
          <Link href="/about" className="inline-block border border-white px-10 py-4 text-lg hover:bg-white hover:text-black transition-colors">
            <span className="mr-2">Our</span>
            Studio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
