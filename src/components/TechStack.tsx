"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faDatabase,
  faProjectDiagram,
  faCloud,
  faFileExcel,
  faTimes,
  faBriefcase,
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { getProjectsByTech, Project } from "@/data/projects";

interface TechItem {
  icon: IconDefinition;
  label: string;
  tooltip: string;
}

const techItems: TechItem[] = [
  {
    icon: faChartBar,
    label: "Power BI",
    tooltip:
      "5+ dashboards developed with DAX, Power Query, and Dynamic RLS for enterprise-scale reporting",
  },
  {
    icon: faDatabase,
    label: "SQL",
    tooltip:
      "Experienced with PostgreSQL, SQL Server, and MySQL for database analytics and data warehousing",
  },
  {
    icon: faPython,
    label: "Python",
    tooltip:
      "Data cleansing, Machine Learning (Scikit-Learn), and NLP analysis including TF-IDF & LSTM",
  },
  {
    icon: faProjectDiagram,
    label: "Microsoft Fabric",
    tooltip:
      "Data ingestion, transformation, and semantic modeling for enterprise analytics",
  },
  {
    icon: faCloud,
    label: "Pentaho DI",
    tooltip:
      "Operating Data Warehouse batches and ETL processes using Pentaho Data Integration",
  },
  {
    icon: faFileExcel,
    label: "Excel",
    tooltip:
      "Advanced data analysis, pivot tables, and reporting for business insights",
  },
];

const typeIcons = {
  work: faBriefcase,
  training: faGraduationCap,
  self: faLaptopCode,
};

const typeLabels = {
  work: "Work Project",
  training: "Training Project",
  self: "Self Project",
};

export default function TechStack() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);

  const handleTechClick = (tech: string) => {
    const relatedProjects = getProjectsByTech(tech);
    setSelectedProjects(relatedProjects);
    setSelectedTech(tech);
  };

  const closeModal = () => {
    setSelectedTech(null);
    setSelectedProjects([]);
  };

  return (
    <>
      <section id="skills" className="container mx-auto px-4 mb-12 text-center scroll-mt-20">
        <h2 className="text-3xl font-bold mb-10 inline-block border-b-2 border-gray-600 pb-2">
          Tech Stack
        </h2>
        <p className="text-text-muted mb-8 text-sm">
          Click on any technology to see related projects
        </p>
        <div className="flex justify-center flex-wrap gap-8 md:gap-12">
          {techItems.map((item) => (
            <div
              key={item.label}
              className="text-center group cursor-pointer relative"
              onMouseEnter={() => setActiveTooltip(item.label)}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => handleTechClick(item.label)}
            >
              <div className="p-4 rounded-xl transition-all duration-200 hover:bg-bg-card hover:shadow-lg">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-5xl text-text-muted group-hover:text-accent-blue transition-colors"
                />
                <span className="block text-sm mt-2 text-text-muted group-hover:text-accent-blue transition-colors">
                  {item.label}
                </span>
              </div>

              {/* Tooltip */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-3 bg-bg-card border border-border-color rounded-lg shadow-lg text-left text-sm text-text-main z-10 transition-all duration-200 pointer-events-none ${
                  activeTooltip === item.label
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                }`}
              >
                <div className="font-semibold text-accent-blue mb-1">
                  {item.label}
                </div>
                <p className="text-text-muted text-xs leading-relaxed">
                  {item.tooltip}
                </p>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-border-color"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedTech && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-bg-dark border border-border-color rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border-color">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedTech} Projects
                </h3>
                <p className="text-text-muted text-sm mt-1">
                  {selectedProjects.length} project
                  {selectedProjects.length > 1 ? "s" : ""} related to{" "}
                  {selectedTech}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-bg-card rounded-lg transition-colors"
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-text-muted hover:text-white text-xl"
                />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)] space-y-4">
              {selectedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-bg-card border border-border-color rounded-xl p-5 hover:border-accent-blue transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-accent-blue">
                        {project.title}
                      </h4>
                      <p className="text-text-muted text-sm">{project.client}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-muted bg-bg-dark px-3 py-1 rounded-full">
                      <FontAwesomeIcon icon={typeIcons[project.type]} />
                      <span>{typeLabels[project.type]}</span>
                    </div>
                  </div>

                  <p className="text-sm text-text-main leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-2 py-1 rounded-md ${
                            tech === selectedTech
                              ? "bg-accent-blue/20 text-accent-blue"
                              : "bg-border-color text-text-muted"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-text-muted">
                      {project.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
