export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-color py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-text-muted text-sm">
          &copy; {currentYear} Kurnia Andre Febrian. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
