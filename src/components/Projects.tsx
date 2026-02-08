"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faCode,
  faChartBar,
  faFlask,
  faBook,
  faStar,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  size: number;
}

interface ProjectDisplay {
  name: string;
  displayName: string;
  description: string;
  icon: IconDefinition;
  color: string;
  language: string;
  url: string;
  stars: number;
  forks: number;
  size: number;
}

// Map repo names to better display info
const repoMetadata: Record<string, { displayName: string; description: string; icon: IconDefinition; color: string }> = {
  "Power-BI": {
    displayName: "Power BI Dashboards",
    description: "Collection of interactive Power BI dashboards showcasing data visualization, DAX calculations, and business intelligence reporting techniques.",
    icon: faChartBar,
    color: "from-yellow-500 to-orange-500",
  },
  "Training-Fundamental-Pyhton": {
    displayName: "Python Fundamentals Training",
    description: "Comprehensive Python training materials covering data types, control structures, functions, and data analysis fundamentals with hands-on exercises.",
    icon: faCode,
    color: "from-blue-500 to-cyan-500",
  },
  "Statistics-Test": {
    displayName: "Statistical Analysis",
    description: "Statistical testing and analysis notebooks including hypothesis testing, correlation analysis, and inferential statistics using Python.",
    icon: faFlask,
    color: "from-purple-500 to-pink-500",
  },
  "Introduction-to-Python": {
    displayName: "Introduction to Python",
    description: "Beginner-friendly Python introduction covering basic programming concepts, data structures, and simple data manipulation techniques.",
    icon: faBook,
    color: "from-green-500 to-emerald-500",
  },
  "R": {
    displayName: "R Programming",
    description: "R programming exercises and statistical computing projects for data analysis and visualization.",
    icon: faCode,
    color: "from-blue-600 to-indigo-500",
  },
};

const languageColors: Record<string, string> = {
  "Jupyter Notebook": "bg-orange-500",
  "Python": "bg-blue-500",
  "R": "bg-blue-400",
  "JavaScript": "bg-yellow-400",
  "TypeScript": "bg-blue-600",
};

function formatSize(kb: number): string {
  if (kb < 1024) return `${kb} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function Projects() {
  const [repos, setRepos] = useState<ProjectDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/kandref/repos?sort=updated&per_page=10"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data: Repository[] = await response.json();

        const projects: ProjectDisplay[] = data
          .filter((repo) => repo.name in repoMetadata)
          .map((repo) => ({
            name: repo.name,
            displayName: repoMetadata[repo.name]?.displayName || repo.name,
            description: repoMetadata[repo.name]?.description || repo.description || "No description",
            icon: repoMetadata[repo.name]?.icon || faCode,
            color: repoMetadata[repo.name]?.color || "from-gray-500 to-gray-600",
            language: repo.language || "Various",
            url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            size: repo.size,
          }));

        setRepos(projects);
      } catch (err) {
        setError("Could not load projects");
        // Fallback to static data
        setRepos(
          Object.entries(repoMetadata).map(([name, meta]) => ({
            name,
            displayName: meta.displayName,
            description: meta.description,
            icon: meta.icon,
            color: meta.color,
            language: name === "Power-BI" ? "Power BI" : "Jupyter Notebook",
            url: `https://github.com/kandref/${name}`,
            stars: 0,
            forks: 0,
            size: 0,
          }))
        );
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="container mx-auto px-4 mb-16 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-4 inline-block border-b-2 border-gray-600 pb-2 w-full">
        <span className="border-b-2 border-gray-600 pb-2">GitHub Projects</span>
      </h2>
      <p className="text-center text-text-main max-w-3xl mx-auto mb-10 leading-relaxed">
        Berakar dari latar belakang <span className="text-accent-blue font-medium">Fisika Teoretis</span> dan
        pengalaman <span className="text-accent-blue font-medium">3+ tahun di Business Intelligence</span>,
        repositori GitHub saya mencerminkan perjalanan saya dalam dunia data — mulai dari
        dasar-dasar <span className="text-accent-green font-medium">Python</span> &{" "}
        <span className="text-accent-green font-medium">R</span>, analisis statistik,
        hingga pembuatan dashboard interaktif dengan{" "}
        <span className="text-accent-green font-medium">Power BI</span>.
        Setiap proyek dibuat tidak hanya sebagai portofolio, tetapi juga sebagai materi
        pembelajaran yang bisa diakses siapa saja.
      </p>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-blue"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-bg-card border border-border-color rounded-xl overflow-hidden hover:border-accent-blue transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl flex flex-col"
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-r ${project.color} p-4 flex items-center gap-3`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={project.icon}
                      className="text-white text-xl"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white truncate">
                      {project.displayName}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          languageColors[project.language] || "bg-gray-400"
                        }`}
                      ></span>
                      <span>{project.language}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-sm text-text-main leading-relaxed flex-grow mb-4">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <div className="flex items-center gap-4">
                      {project.stars > 0 && (
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                          {project.stars}
                        </span>
                      )}
                      {project.forks > 0 && (
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faCodeBranch} />
                          {project.forks}
                        </span>
                      )}
                      {project.size > 0 && (
                        <span>{formatSize(project.size)}</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-accent-blue group-hover:underline">
                      View <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All on GitHub */}
          <div className="text-center mt-10">
            <a
              href="https://github.com/kandref"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-bg-card border border-border-color text-text-main hover:border-accent-blue hover:text-accent-blue rounded-xl transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
              View All Repositories on GitHub
            </a>
          </div>
        </>
      )}
    </section>
  );
}
