interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionHeading = ({ title, subtitle, light = true }: Props) => (
  <div className="text-center mb-10">
    <h2
      className={`font-stopbuck text-3xl md:text-5xl leading-tight ${
        light ? "text-white" : "text-stone-800"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`font-myriad mt-3 text-base md:text-lg max-w-2xl mx-auto ${
          light ? "text-white/90" : "text-stone-600"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);
