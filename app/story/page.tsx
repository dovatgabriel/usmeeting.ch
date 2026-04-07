import { Committee } from "@/components/sections/story/committee";
import { StoryHero } from "@/components/sections/story/hero";
import { Timeline } from "@/components/sections/story/timeline";

export const metadata = {
  title: "Notre histoire — US Meeting Oron",
  description:
    "Découvrez l'histoire du US Meeting Oron, de sa création en 2021 par l'Amicale Live to Ride jusqu'à aujourd'hui.",
};

export default function StoryPage() {
  return (
    <main className="flex flex-col items-stretch overflow-x-hidden pt-0">
      <StoryHero />
      <Committee />
      <Timeline />
    </main>
  );
}
