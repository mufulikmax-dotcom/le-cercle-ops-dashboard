export function PageHeader({
  description,
  eyebrow,
  title,
}: {
  description?: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <section className="pb-2">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.22em] text-brass">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-5 font-display text-4xl leading-tight text-parchment sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-7 text-pewter">
          {description}
        </p>
      ) : null}
    </section>
  );
}
