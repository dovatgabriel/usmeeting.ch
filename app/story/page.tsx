import { Committee } from "@/components/sections/story/committee";
import { StoryHero } from "@/components/sections/story/hero";
import { Timeline } from "@/components/sections/story/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Découvrez l'histoire du US Meeting Oron, fondé en 2021 par l'Amicale Live to Ride — des motards passionnés d'Oron-La-Ville qui ont transformé leur amour des véhicules américains en un événement incontournable.",
  alternates: { canonical: "https://usmeeting.ch/story" },
  openGraph: {
    title: "Notre histoire — US Meeting Oron",
    description:
      "Fondé en 2021 par l'Amicale Live to Ride, le US Meeting Oron est devenu l'un des plus grands rassemblements de véhicules américains de Suisse.",
    url: "https://usmeeting.ch/story",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
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
