const links = [
  { href: "#now", index: "01", label: "Now" },
  { href: "#experience", index: "02", label: "Experience" },
  { href: "#projects", index: "03", label: "Projects" },
  { href: "#teaching", index: "04", label: "Teaching" },
  { href: "#tools", index: "05", label: "Tools" },
  { href: "#education", index: "06", label: "Education" },
  { href: "#contact", index: "07", label: "Contact" },
];

export default function TopBar() {
  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-10 border-b border-rule bg-paper"
    >
      <div className="mx-auto flex h-12 max-w-sheet items-center justify-between px-4 md:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Kurnia Andre Febrian
        </a>
        <ul className="hidden gap-5 text-sm lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted no-underline transition-colors hover:text-ink"
              >
                <span className="mr-1 font-mono text-xs">{link.index}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="text-sm underline hover:text-signal lg:hidden">
          Contact
        </a>
      </div>
    </nav>
  );
}
