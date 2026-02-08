import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faFlask,
  faBook,
  faAtom,
  faAward,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const highlights = [
  {
    icon: faAtom,
    title: "Theoretical Physics",
    description: "Expertise group focusing on Mathematical and Computational Physics",
  },
  {
    icon: faCode,
    title: "Numerical Methods",
    description: "Programming simulations using statistical and nonlinear analysis approaches",
  },
  {
    icon: faBook,
    title: "Thesis Research",
    description: "Traffic Dynamics Interaction Analysis using computational modeling",
  },
  {
    icon: faFlask,
    title: "Laboratory Assistant",
    description: "3 years assisting physics practicum and mentoring students (2016-2019)",
  },
];

export default function Education() {
  return (
    <section id="education" className="container mx-auto px-4 mb-16 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 inline-block border-b-2 border-gray-600 pb-2 w-full">
        <span className="border-b-2 border-gray-600 pb-2">Education</span>
      </h2>

      <div className="bg-bg-card border border-border-color rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent-blue/10 via-accent-green/10 to-accent-blue/10 p-6 border-b border-border-color">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-3xl text-accent-blue"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                Institut Teknologi Sumatera (ITERA)
              </h3>
              <p className="text-accent-blue font-medium">
                Bachelor of Science (B.Sc.) in Physics
              </p>
              <p className="text-text-muted text-sm mt-1">Aug 2015 - Mar 2020</p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-2 text-sm text-accent-green bg-accent-green/10 px-4 py-2 rounded-full">
                <FontAwesomeIcon icon={faAward} />
                <span>Graduated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="px-6 pt-6">
          <p className="text-text-main text-sm leading-relaxed bg-bg-dark border border-border-color rounded-xl p-4">
            My academic journey began with <span className="text-accent-blue font-medium">theoretical analytics</span> —
            exploring the mathematical foundations of physics. From there, I progressed into{" "}
            <span className="text-accent-blue font-medium">numerical methods</span>, learning to solve complex problems
            through computational approaches. This path naturally led me to{" "}
            <span className="text-accent-blue font-medium">programming</span>, where I applied these analytical skills
            to build simulations and data-driven solutions — ultimately shaping my career in data analytics today.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-4 rounded-xl bg-bg-dark border border-border-color hover:border-accent-blue transition-colors"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-accent-blue text-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
