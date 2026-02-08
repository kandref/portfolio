import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Image
            src="/foto-kurnia-andre-f.jpg"
            alt="Kurnia Andre Febrian"
            width={180}
            height={180}
            className="rounded-full border-4 border-accent-blue mx-auto mb-5 object-cover shadow-[0_0_20px_rgba(88,166,255,0.2)]"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Kurnia Andre Febrian
          </h1>
          <h3 className="text-xl text-accent-blue mb-6">
            Data Analyst & Microsoft Fabric Enthusiast
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/kandref"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-green hover:bg-[#2ea043] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              Visit My GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kurniaandref6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#006097] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="/cv-kurnia-andre-febrian.pdf"
              download
              className="inline-flex items-center gap-2 border border-border-color text-text-main hover:bg-border-color hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
