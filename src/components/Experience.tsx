"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFlask,
  faChartLine,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: IconDefinition;
  isCurrent: boolean;
}

const experiences: ExperienceItem[] = [
  {
    title: "Business Intelligence Developer",
    company: "PT. Eigerindo MPI",
    period: "Jun 2025 - Present",
    description: [
      "Implemented Microsoft Fabric for enterprise analytics including data ingestion, transformation, and semantic modeling",
      "Designed end-to-end Power BI dashboards for Regional and Branch Managers across Indonesia",
      "Built optimized data models with Power Query, DAX, and Dynamic RLS for secure reporting",
    ],
    icon: faChartLine,
    isCurrent: true,
  },
  {
    title: "Business Intelligence Developer",
    company: "PT. Mitra Talenta Group (CELERATES)",
    period: "Feb 2022 - Jun 2025",
    description: [
      "Created and developed 3 Power BI dashboards and managed 2 existing dashboards",
      "Operated Data Warehouse using Pentaho Data Integration for database batches",
      "Mentored 23 students in Studi Independen Bersertifikat - Kampus Merdeka",
    ],
    icon: faBriefcase,
    isCurrent: false,
  },
  {
    title: "Marketing Research & Development",
    company: "PT. Tunas Dwipa Matra",
    period: "Jan 2021 - Jul 2021",
    description: [
      "Conducted surveys on customer and competitor behavior analysis",
      "Analyzed customer databases (CDB) including SES, occupation, salary, and demographics",
      "Created dashboards using Power BI and Tableau for customer behavior patterns",
    ],
    icon: faChartLine,
    isCurrent: false,
  },
  {
    title: "Laboratory Assistant",
    company: "Sumatera Institute of Technology",
    period: "Sep 2016 - May 2019",
    description: [
      "Assisted lecturers in conducting practicum sessions for physics courses",
      "Helped students understand lessons through hands-on laboratory activities",
      "Maintained laboratory equipment and prepared progress reports",
    ],
    icon: faFlask,
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 mb-16 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-12 inline-block border-b-2 border-gray-600 pb-2 w-full">
        <span className="border-b-2 border-gray-600 pb-2">
          Experience Timeline
        </span>
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border-color" />

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.period}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-bg-dark border-2 border-accent-blue flex items-center justify-center z-10">
                {exp.isCurrent ? (
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-accent-green text-xs animate-pulse"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={exp.icon}
                    className="text-accent-blue text-xs"
                  />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="bg-bg-card border border-border-color rounded-xl p-5 hover:border-accent-blue transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-accent-blue transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-accent-blue text-sm">{exp.company}</p>
                    </div>
                    {exp.isCurrent && (
                      <span className="flex-shrink-0 text-xs bg-accent-green/20 text-accent-green px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Period */}
                  <p className="text-text-muted text-xs mb-3">{exp.period}</p>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-main flex items-start gap-2"
                      >
                        <span className="text-accent-blue mt-1.5 text-[6px]">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
