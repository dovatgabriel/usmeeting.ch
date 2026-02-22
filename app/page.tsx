import { Description } from "@/components/sections/description";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <div className="flex flex-col items-stretch">
      <Hero />
      <Description />
      <Stats />
    </div>
  );
}
