import { getGalleryYears, getYearPhotos } from "@/lib/gallery";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { ArrowLeft, Images } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type Props = { params: Promise<{ year: string }> };

// Pré-génère toutes les pages au build — aucun fetch au runtime
export async function generateStaticParams() {
  const years = await getGalleryYears();
  return years.map((y) => ({ year: y.year }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `Galerie ${year} — US Meeting Oron`,
    description: `Photos de l'édition ${year} du US Meeting Oron à Oron-La-Ville.`,
  };
}

export default async function YearGalleryPage({ params }: Props) {
  const { year } = await params;
  // getGalleryYears() est déjà mis en cache par Next.js (même URL = même fetch dédupliqué)
  const photos = await getYearPhotos(year);

  return (
    <main className="min-h-screen pt-24 pb-32 px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <Link
            href="/gallery"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            <ArrowLeft className="size-4" />
            Toutes les années
          </Link>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Édition{" "}
              <span className="bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
                {year}
              </span>
            </h1>
            <span className="text-muted-foreground">{photos.length} photos</span>
          </div>
        </div>

        {photos.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-muted-foreground">
            <Images className="size-12 opacity-30" />
            <p>Aucune photo disponible pour cette édition.</p>
          </div>
        ) : (
          <PhotoGrid photos={photos} />
        )}
      </div>
    </main>
  );
}
