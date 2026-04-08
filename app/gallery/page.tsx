import { getGalleryYears } from "@/lib/gallery";
import { Images } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galerie photos",
  description:
    "Revivez les meilleures éditions du US Meeting Oron en photos. Des centaines de clichés des plus beaux véhicules américains réunis à Oron-La-Ville.",
  alternates: { canonical: "https://usmeeting.ch/gallery" },
  openGraph: {
    title: "Galerie photos — US Meeting Oron",
    description:
      "Revivez les meilleures éditions du US Meeting Oron en photos.",
    url: "https://usmeeting.ch/gallery",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default async function GalleryPage() {
  const years = await getGalleryYears();

  return (
    <main className="min-h-screen pt-24 pb-32 px-8 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col gap-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-lg font-medium text-muted-foreground">
            Les souvenirs en images
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold">Galerie photos</h1>
        </div>
        {years.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-muted-foreground">
            <Images className="size-12 opacity-30" />
            <p>Aucune photo disponible pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {years.map((y) => (
              <Link
                key={y.year}
                href={`/gallery/${y.year}`}
                className="group relative overflow-hidden rounded-2xl border bg-accent/50 aspect-video flex items-end transition-colors duration-300 hover:border-foreground/20"
              >
                {y.preview && (
                  <Image
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={`Galerie ${y.year}`}
                    src={y.preview}
                    fill
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative p-5 flex items-end justify-between w-full">
                  <span className="text-4xl font-bold text-white">
                    {y.year}
                  </span>
                  <span className="text-sm text-white/70">
                    {y.count} photos
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
