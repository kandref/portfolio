import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const valueProps = [
  {
    icon: faLightbulb,
    title: "Physics-Trained Mindset",
    description: "Analytical thinking from theoretical physics background",
  },
  {
    icon: faChartLine,
    title: "End-to-End BI Solutions",
    description: "From data pipelines to executive dashboards",
  },
  {
    icon: faUsers,
    title: "Knowledge Sharer",
    description: "Speaker & mentor with passion for teaching",
  },
];

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 mb-16 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 inline-block border-b-2 border-gray-600 pb-2 w-full">
          <span className="border-b-2 border-gray-600 pb-2">About Me</span>
        </h2>

        {/* Main Statement */}
        <div className="text-center mb-10">
          <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
            I transform <span className="text-accent-blue font-semibold">complex data</span> into{" "}
            <span className="text-accent-green font-semibold">clear business decisions</span>.
          </p>
          <p className="text-text-main leading-relaxed max-w-3xl mx-auto">
            With a unique background in <span className="text-accent-blue">Theoretical Physics</span> and{" "}
            <span className="text-accent-blue">3+ years in Business Intelligence</span>, I bring a
            rigorous analytical approach to data challenges. I don&apos;t just build dashboards —
            I design data solutions that tell stories and drive action. From Microsoft Fabric
            implementations to mentoring the next generation of data professionals, I&apos;m passionate
            about making data accessible and impactful.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="group p-5 bg-bg-card border border-border-color rounded-xl hover:border-accent-blue transition-colors text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                <FontAwesomeIcon
                  icon={prop.icon}
                  className="text-xl text-accent-blue"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">{prop.title}</h3>
              <p className="text-sm text-text-muted">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
