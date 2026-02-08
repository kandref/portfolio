import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

interface Certification {
  name: string;
  organizer: string;
  period: string;
  color: string;
}

const certifications: Certification[] = [
  {
    name: "PROA - Business Intelligence Analyst",
    organizer: "Kemenkominfo & Binar Academy",
    period: "Apr - May 2023",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "SQL Certification",
    organizer: "Progate",
    period: "Mar 2022",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Machine Learning & Data Visualization",
    organizer: "Dicoding",
    period: "May 2021",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "FGA - Data Science",
    organizer: "Kemenkominfo & STEI ITB",
    period: "Sep - Oct 2020",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Data Analyst Track",
    organizer: "DQLab",
    period: "Apr 2020 - May 2021",
    color: "from-red-500 to-orange-500",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="container mx-auto px-4 mb-16 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 inline-block border-b-2 border-gray-600 pb-2 w-full">
        <span className="border-b-2 border-gray-600 pb-2">
          Professional Certifications
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={cert.name}
            className="group bg-bg-card border border-border-color rounded-xl p-5 hover:border-accent-blue transition-all duration-300 hover:translate-y-[-2px]"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center`}
              >
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="text-white text-xl"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm leading-tight mb-1 group-hover:text-accent-blue transition-colors">
                  {cert.name}
                </h4>
                <p className="text-text-muted text-xs mb-2">{cert.organizer}</p>
                <span className="inline-block text-xs text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded">
                  {cert.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
