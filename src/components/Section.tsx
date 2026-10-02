// One row of the sheet: numbered label on the left, content on the right.
export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid grid-cols-1 gap-y-6 border-t border-ink py-12 md:grid-cols-12 md:gap-x-6 md:py-16"
    >
      <h2 className="md:col-span-3">
        <span className="block font-mono text-sm text-signal">{index}</span>
        <span className="mt-1 block text-2xl font-semibold tracking-tight">
          {title}
        </span>
      </h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  );
}
