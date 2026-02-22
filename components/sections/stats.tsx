import CountingNumber from "../ui/counting-number";

export const Stats = () => {
  return (
    <div className="flex flex-col items-center gap-5 px-5 xl:px-50 py-20 lg:py-50">
      <h1 className="font-sans text-2xl text-muted-foreground text-center">
        L&apos;US Meeting en quelques chiffres...
      </h1>
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-evenly w-full">
        <Stat label="Visiteurs passionnés" value={3500} />
        <Stat label="Véhicules américains" value={250} />
        <Stat label="D’exposition & animations" value={1500} suffix="m²" />
      </div>
    </div>
  );
};

const Stat = ({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix?: string;
}) => (
  <div className="flex flex-col items-center gap-5">
    <div className="flex items-center gap-1">
      <CountingNumber
        number={value}
        className="text-5xl md:text-8xl font-semibold"
        inView
      />
      <span className="text-3xl md:text-6xl font-medium">{suffix || "+"}</span>
    </div>
    <span className="text-xl md:text-2xl text-center">{label}</span>
  </div>
);
