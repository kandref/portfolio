import Image from "next/image";
import TopBar from "@/components/TopBar";
import Section from "@/components/Section";
import {
  profile,
  intro,
  spec,
  now,
  jobs,
  workProjects,
  projects,
  talks,
  tools,
  education,
  certificates,
} from "@/data/content";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <TopBar />
      <main id="top" className="mx-auto max-w-sheet px-4 md:px-8">
        {/* Header */}
        <header className="grid grid-cols-1 gap-y-8 pb-12 pt-10 md:grid-cols-12 md:gap-x-6 md:pb-16 md:pt-16">
          <div className="md:col-span-9">
            <p className="font-mono text-sm text-muted">
              {profile.role} · {profile.location}
            </p>
            <h1 className="mt-4 text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
              Kurnia Andre
              <br />
              Febrian
            </h1>
          </div>
          <div className="md:col-span-3 md:flex md:items-end md:justify-end">
            <Image
              src="/foto-kurnia-andre-f.jpg"
              alt="Portrait of Kurnia Andre Febrian"
              width={176}
              height={176}
              priority
              className="aspect-square w-32 object-cover md:w-44"
            />
          </div>

          <p className="max-w-[44ch] text-xl leading-snug md:col-span-9 md:col-start-4 md:text-2xl">
            {intro}
          </p>

          <dl className="grid grid-cols-2 border-t border-rule md:col-span-9 md:col-start-4 md:grid-cols-4">
            {spec.map((item) => (
              <div key={item.label} className="border-b border-rule py-3 pr-4 md:border-b-0">
                <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:col-span-9 md:col-start-4">
            <li>
              <a href={`mailto:${profile.email}`} className="underline hover:text-signal">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} {...external} className="underline hover:text-signal">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} {...external} className="underline hover:text-signal">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.cv} download className="underline hover:text-signal">
                CV (PDF)
              </a>
            </li>
          </ul>
        </header>

        <Section id="now" index="01" title="Now">
          <p className="mb-8 max-w-[60ch] text-muted">
            What I work on at Eigerindo. Internal names and numbers are left
            out on purpose.
          </p>
          <ol className="divide-y divide-rule border-y border-rule">
            {now.map((item, i) => (
              <li key={item.title} className="grid grid-cols-1 gap-y-2 py-6 md:grid-cols-9 md:gap-x-6">
                <h3 className="font-semibold md:col-span-3">
                  <span className="mr-2 font-mono text-sm font-normal text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </h3>
                <div className="md:col-span-6">
                  <p className="leading-relaxed">{item.body}</p>
                  <p className="mt-2 font-mono text-xs text-muted">{item.stack}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="experience" index="02" title="Experience">
          <ol className="divide-y divide-rule border-y border-rule">
            {jobs.map((job) => (
              <li key={job.company} className="grid grid-cols-1 gap-y-2 py-6 md:grid-cols-9 md:gap-x-6">
                <p className="font-mono text-sm tabular-nums text-muted md:col-span-2">
                  {job.current && (
                    <span aria-hidden className="mr-2 inline-block h-2 w-2 bg-signal align-middle" />
                  )}
                  {job.period}
                  {job.current && <span className="sr-only"> present</span>}
                </p>
                <div className="md:col-span-3">
                  <h3 className="font-semibold">{job.company}</h3>
                  <p className="text-muted">{job.role}</p>
                </div>
                <ul className="space-y-2 leading-relaxed md:col-span-4">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" index="03" title="Projects">
          {workProjects.map((group) => (
            <div key={group.label} className="mb-10">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
                {group.label}
              </h3>
              <ol className="divide-y divide-rule border-y border-rule">
                {group.items.map((item) => (
                  <li key={item.name} className="grid grid-cols-1 gap-y-1 py-3 md:grid-cols-9 md:gap-x-6">
                    {item.period && (
                      <span className="font-mono text-sm tabular-nums text-muted md:col-span-2">
                        {item.period}
                      </span>
                    )}
                    <span className={`font-semibold ${item.period ? "md:col-span-3" : "md:col-span-4"}`}>
                      {item.name}
                    </span>
                    <span className={`text-muted ${item.period ? "md:col-span-4" : "md:col-span-5"}`}>
                      {item.note}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
          <h3 className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">
            Personal · GitHub
          </h3>
          <p className="mb-3 max-w-[60ch] text-muted">
            The physics ones come from my thesis and the problems I still find
            interesting.
          </p>
          <ol className="divide-y divide-rule border-y border-rule">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.url}
                  {...external}
                  className="group grid grid-cols-1 gap-y-1 py-5 no-underline md:grid-cols-9 md:gap-x-6"
                >
                  <span className="font-mono text-sm tabular-nums text-muted md:col-span-1">
                    {project.year}
                  </span>
                  <span className="break-words font-mono text-sm font-medium group-hover:text-signal group-hover:underline md:col-span-3">
                    {project.name}
                  </span>
                  <span className="md:col-span-5">
                    <span className="block leading-relaxed">{project.what}</span>
                    <span className="mt-1 block font-mono text-xs text-muted">{project.stack}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="teaching" index="04" title="Teaching">
          <ol className="divide-y divide-rule border-y border-rule">
            {talks.map((talk) => (
              <li key={talk.title + talk.date} className="grid grid-cols-1 gap-y-1 py-5 md:grid-cols-9 md:gap-x-6">
                <p className="font-mono text-sm tabular-nums text-muted md:col-span-2">{talk.date}</p>
                <div className="md:col-span-5">
                  <h3 className="font-semibold leading-snug">
                    {talk.url ? (
                      <a href={talk.url} {...external} className="underline hover:text-signal">
                        {talk.title}
                      </a>
                    ) : (
                      talk.title
                    )}
                  </h3>
                  <p className="text-muted">{talk.host}</p>
                </div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted md:col-span-2 md:text-right">
                  {talk.kind}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="tools" index="05" title="Tools">
          <dl className="divide-y divide-rule border-y border-rule">
            {tools.map((tool) => (
              <div key={tool.group} className="grid grid-cols-1 gap-y-1 py-4 md:grid-cols-9 md:gap-x-6">
                <dt className="font-mono text-sm text-muted md:col-span-2">{tool.group}</dt>
                <dd className="md:col-span-7">{tool.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" index="06" title="Education">
          <div className="grid grid-cols-1 gap-y-1 border-y border-rule py-5 md:grid-cols-9 md:gap-x-6">
            <p className="font-mono text-sm tabular-nums text-muted md:col-span-2">{education.period}</p>
            <div className="md:col-span-7">
              <h3 className="font-semibold">{education.school}</h3>
              <p>{education.degree}</p>
              <p className="mt-1 text-muted">{education.thesis}</p>
            </div>
          </div>
          <h3 className="mb-3 mt-10 font-mono text-xs uppercase tracking-wide text-muted">
            Courses &amp; certificates
          </h3>
          <ol className="divide-y divide-rule border-y border-rule">
            {certificates.map((cert) => (
              <li key={cert.name} className="grid grid-cols-1 gap-y-1 py-3 md:grid-cols-9 md:gap-x-6">
                <span className="font-mono text-sm tabular-nums text-muted md:col-span-2">{cert.year}</span>
                <span className="md:col-span-4">{cert.name}</span>
                <span className="text-muted md:col-span-3">{cert.by}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" index="07" title="Contact">
          <a
            href={`mailto:${profile.email}`}
            className="block break-words text-[clamp(1.5rem,4.5vw,3rem)] font-semibold leading-tight tracking-tight underline decoration-2 hover:text-signal"
          >
            {profile.email}
          </a>
          <p className="mt-3 text-muted">Email is the quickest way to reach me.</p>
          <dl className="mt-10 grid grid-cols-1 border-t border-rule sm:grid-cols-3">
            {[
              { label: "LinkedIn", value: "kurniaandref6", href: profile.linkedin },
              { label: "GitHub", value: "kandref", href: profile.github },
              { label: "WhatsApp", value: profile.whatsappLabel, href: profile.whatsapp },
            ].map((item) => (
              <div key={item.label} className="border-b border-rule py-3 sm:border-b-0">
                <dt className="font-mono text-xs uppercase tracking-wide text-muted">{item.label}</dt>
                <dd className="mt-1">
                  <a href={item.href} {...external} className="underline hover:text-signal">
                    {item.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </main>

      <footer className="mx-auto max-w-sheet border-t border-rule px-4 py-6 md:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Kurnia Andre Febrian ·{" "}
          <a href="https://github.com/kandref/portfolio" {...external} className="underline hover:text-ink">
            source
          </a>
        </p>
      </footer>
    </>
  );
}
