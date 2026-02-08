import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faCalendarAlt,
  faBuilding,
  faExternalLinkAlt,
  faChalkboardTeacher,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SpeakingItem {
  title: string;
  organizer: string;
  period: string;
  description: string;
  type: "webinar" | "training" | "studium-generale" | "mentoring";
  link?: string;
  icon?: IconDefinition;
}

const speakingEvents: SpeakingItem[] = [
  {
    title: "Mentor SIB Kampus Merdeka - Batch 7",
    organizer: "CELERATES x Kemendikbud",
    period: "Aug - Dec 2024",
    description:
      "Continued mentoring journey in Batch 7 for Data Analytics & Business Intelligence track. Guided participants through real-world BI projects, Power BI development, and data analysis best practices.",
    type: "mentoring",
    icon: faUsers,
  },
  {
    title: "Data Analytics untuk Efisiensi dan Inovasi Bisnis",
    organizer: "Studium Generale - Fisika ITERA",
    period: "Sep 2024",
    description:
      "Presented at Studium Generale Series ke-4 on 'Uncovering the Potential of Data Analytics to Drive Efficiency and Innovation in Business Development'. Emphasized that the more information we possess, the faster business acceleration occurs.",
    type: "studium-generale",
    link: "https://fs.itera.ac.id/studium-generale-fisika-kebumian-itera-dorong-inovasi-sains-untuk-pembangunan-berkelanjutan/",
    icon: faMicrophone,
  },
  {
    title: "Building Captivating Interactive Reports with Power BI",
    organizer: "Celerates School",
    period: "Jul 2023",
    description:
      "Delivered a comprehensive training session on creating engaging and interactive Power BI reports. Covered best practices for data visualization, storytelling with data, and advanced DAX techniques for dynamic reporting.",
    type: "training",
    icon: faChalkboardTeacher,
  },
  {
    title: "Future Business Intelligence for Mining Industry",
    organizer: "Sains Data - ITERA",
    period: "May 2023",
    description:
      "Presented insights on the future of Business Intelligence in the mining sector. Discussed how modern BI tools and data analytics can transform operational efficiency, predictive maintenance, and strategic decision-making in mining operations.",
    type: "webinar",
    link: "https://sd.itera.ac.id/future-business-intelligence-for-industry-mining/",
    icon: faMicrophone,
  },
  {
    title: "Mentor SIB Kampus Merdeka - Batch 4",
    organizer: "CELERATES x Kemendikbud",
    period: "Feb - Jun 2023",
    description:
      "Mentor for Studi Independen Bersertifikat program Batch 4 in Data Analytics & Business Intelligence track. Mentored 23 students across various universities, guiding them through industry-standard BI tools and methodologies.",
    type: "mentoring",
    icon: faUsers,
  },
];

const typeColors = {
  webinar: "text-purple-400 bg-purple-400/20",
  training: "text-accent-green bg-accent-green/20",
  "studium-generale": "text-amber-400 bg-amber-400/20",
  mentoring: "text-cyan-400 bg-cyan-400/20",
};

const typeLabels = {
  webinar: "Webinar",
  training: "Training",
  "studium-generale": "Studium Generale",
  mentoring: "Mentoring",
};

export default function Speaking() {
  return (
    <section id="speaking" className="container mx-auto px-4 mb-16 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 inline-block border-b-2 border-gray-600 pb-2 w-full">
        <span className="border-b-2 border-gray-600 pb-2">
          Speaking, Training & Mentoring
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakingEvents.map((event, index) => (
          <div
            key={`${event.title}-${index}`}
            className="group bg-bg-card border border-border-color rounded-xl overflow-hidden hover:border-accent-blue transition-all duration-300 flex flex-col"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-accent-blue/20 to-accent-green/20 p-4 border-b border-border-color">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={event.icon || faMicrophone}
                    className="text-accent-blue text-xl"
                  />
                </div>
                <div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${typeColors[event.type]}`}
                  >
                    {typeLabels[event.type]}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-semibold text-white text-lg mb-3 group-hover:text-accent-blue transition-colors leading-tight">
                {event.title}
              </h3>

              <p className="text-sm text-text-main leading-relaxed mb-4 flex-grow">
                {event.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-4">
                <div className="flex items-center gap-1.5">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="text-accent-blue"
                  />
                  <span>{event.organizer}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="text-accent-blue"
                  />
                  <span>{event.period}</span>
                </div>
              </div>

              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent-blue hover:text-white hover:bg-accent-blue/20 px-3 py-2 rounded-lg transition-colors border border-accent-blue/30 hover:border-accent-blue"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  Read Article
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
