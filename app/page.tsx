import { Description } from "@/components/sections/description";
import { Hero } from "@/components/sections/hero";
import { Sponsors } from "@/components/sections/sponsors";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <div className="flex flex-col items-stretch overflow-x-hidden">
      <Hero />
      <Description />
      <Stats />
      <Sponsors />
    </div>
  );
}
