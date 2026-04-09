import Image from "next/image";

const BUCKET = "usmeeting-ch.firebasestorage.app";
const API_KEY = "AIzaSyB_iV7z-2Q5KZCK4hF684OFAoZCeSoa_Jw";
const BASE = `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o`;

type StorageItem = { name: string; downloadTokens: string };

async function listLogos(): Promise<StorageItem[]> {
  const url = `${BASE}?prefix=${encodeURIComponent("story/logos/")}&key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.items ?? [];
}

function getDownloadUrl(name: string, token: string) {
  return `${BASE}/${encodeURIComponent(name)}?alt=media&token=${token}`;
}

function extractYear(name: string): string {
  return `20${name.split(".")[0].split("/").at(-1) || name}`;
}

export async function Timeline() {
  const items = await listLogos();

  const logos = items
    .map((item) => ({
      year: extractYear(item.name),
      url: getDownloadUrl(item.name, item.downloadTokens),
    }))
    .reverse();

  if (logos.length === 0) return null;

  return (
    <section className="py-32 px-8 flex flex-col items-center bg-accent/50 transition-colors duration-300">
      <div className="w-full max-w-5xl flex flex-col gap-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-lg font-medium text-muted-foreground">
            Année par année
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold">Les éditions</h2>
        </div>
        <div className="flex items-center gap-5 flex-wrap justify-evenly">
          {logos.map(({ year, url }) => (
            <div key={year} className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                <Image
                  src={url}
                  alt={`Logo édition ${year}`}
                  fill
                  sizes="(max-width: 640px) 128px, 144px"
                />
              </div>
              <span className="text-lg font-semibold text-muted-foreground">
                {year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
