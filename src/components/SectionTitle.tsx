export default function SectionTitle({
  subtitle,
  title,
  description,
  center = true,
}: {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {subtitle && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-dark">{title}</h2>
      {description && (
        <p className="mt-4 text-gray max-w-2xl leading-relaxed mx-auto">{description}</p>
      )}
    </div>
  );
}
