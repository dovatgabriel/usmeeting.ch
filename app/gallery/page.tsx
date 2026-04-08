import { getAllGalleryPhotos } from "@/lib/gallery";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { GalleryHeading } from "@/components/gallery/gallery-heading";
import { Images } from "lucide-react";
import { Metadata } from "next";

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
  const sections = await getAllGalleryPhotos();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galerie photos — US Meeting Oron",
    description:
      "Photos des éditions du US Meeting Oron à Oron-La-Ville, Suisse.",
    url: "https://usmeeting.ch/gallery",
    image: sections.flatMap((s) =>
      s.photos.slice(0, 10).map((p) => ({
        "@type": "ImageObject",
        contentUrl: p.url,
        name: `Photo de l'édition ${s.year} du US Meeting Oron`,
        description: `Rassemblement de véhicules américains à Oron-La-Ville, édition ${s.year}`,
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen pt-24 pb-32 px-8 flex flex-col items-center">
        <div className="w-full max-w-7xl flex flex-col gap-20">
          <GalleryHeading />

          {sections.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-20 text-muted-foreground">
              <Images className="size-12 opacity-30" />
              <p>Aucune photo disponible pour le moment.</p>
            </div>
          ) : (
            sections.map((section) => (
              <section key={section.year} id={`edition-${section.year}`} className="flex flex-col gap-8">
                <div className="flex items-end justify-between gap-4 flex-wrap border-b pb-4">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    Édition{" "}
                    <span className="bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
                      {section.year}
                    </span>
                  </h2>
                  <span className="text-muted-foreground text-sm">
                    {section.photos.length} photos
                  </span>
                </div>
                <PhotoGrid photos={section.photos} year={section.year} />
              </section>
            ))
          )}
        </div>
      </main>
    </>
  );
}
