import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faDownload,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const contactLinks = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "kurniaandre39@gmail.com",
    href: "mailto:kurniaandre39@gmail.com",
    color: "hover:text-red-400",
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    value: "kurniaandref6",
    href: "https://www.linkedin.com/in/kurniaandref6/",
    color: "hover:text-blue-400",
  },
  {
    icon: faGithub,
    label: "GitHub",
    value: "kandref",
    href: "https://github.com/kandref",
    color: "hover:text-gray-300",
  },
  {
    icon: faWhatsapp,
    label: "WhatsApp",
    value: "+62 812 7813 9229",
    href: "https://wa.me/6281278139229",
    color: "hover:text-green-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 mb-16">
      <div className="bg-gradient-to-br from-accent-blue/10 via-bg-card to-accent-green/10 border border-border-color rounded-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-text-main max-w-2xl mx-auto">
              I&apos;m currently open for new opportunities in{" "}
              <span className="text-accent-blue font-medium">Data Analytics</span>,{" "}
              <span className="text-accent-blue font-medium">Business Intelligence</span>, and{" "}
              <span className="text-accent-blue font-medium">Data Engineering</span> roles.
              Let&apos;s discuss how I can help transform your data into actionable insights.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 bg-bg-dark border border-border-color rounded-xl hover:border-accent-blue transition-all duration-300 ${contact.color}`}
              >
                <div className="w-12 h-12 rounded-lg bg-bg-card flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                  <FontAwesomeIcon
                    icon={contact.icon}
                    className="text-xl text-text-muted group-hover:text-accent-blue transition-colors"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-text-muted">{contact.label}</p>
                  <p className="text-sm text-white font-medium truncate">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Location & CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-border-color">
            <div className="flex items-center gap-3 text-text-muted">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent-blue" />
              <span>Based in Indonesia · Open to Remote Work</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/cv-kurnia-andre-febrian.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-dark border border-border-color text-text-main hover:border-accent-blue hover:text-accent-blue rounded-xl transition-colors"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </a>
              <a
                href="mailto:kurniaandre39@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-green hover:bg-[#2ea043] text-white font-medium rounded-xl transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
