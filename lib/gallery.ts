const BUCKET = "usmeeting-ch.firebasestorage.app";
const API_KEY = "AIzaSyB_iV7z-2Q5KZCK4hF684OFAoZCeSoa_Jw";
const BASE = `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o`;

const IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function isImage(name: string) {
  return IMAGE_EXTS.some((ext) => name.toLowerCase().endsWith(ext));
}

export function getDownloadUrl(name: string, token: string) {
  return `${BASE}/${encodeURIComponent(name)}?alt=media&token=${token}`;
}

type StorageItem = { name: string; downloadTokens: string };

async function listObjects(prefix: string, delimiter?: string): Promise<{ items: StorageItem[]; prefixes: string[] }> {
  let url = `${BASE}?prefix=${encodeURIComponent(prefix)}&key=${API_KEY}`;
  if (delimiter) url += `&delimiter=${encodeURIComponent(delimiter)}`;

  const items: StorageItem[] = [];
  const prefixes: string[] = [];
  let pageToken: string | undefined;

  do {
    const pageUrl = pageToken ? `${url}&pageToken=${pageToken}` : url;
    const res = await fetch(pageUrl, { cache: "force-cache" });
    if (!res.ok) break;
    const data = await res.json();
    if (data.items) items.push(...data.items);
    if (data.prefixes) prefixes.push(...data.prefixes);
    pageToken = data.nextPageToken;
  } while (pageToken);

  return { items, prefixes };
}

export type GalleryPhoto = { url: string; name: string };
export type GalleryYear = { year: string; count: number; preview: string | null };

export async function getGalleryYears(): Promise<GalleryYear[]> {
  const { prefixes } = await listObjects("gallery/", "/");

  const years = await Promise.all(
    prefixes.map(async (prefix) => {
      const year = prefix.replace("gallery/", "").replace("/", "");
      const { items } = await listObjects(prefix);
      const images = items.filter((i) => isImage(i.name));
      const first = images[0];
      return {
        year,
        count: images.length,
        preview: first ? getDownloadUrl(first.name, first.downloadTokens) : null,
      };
    })
  );

  return years
    .filter((y) => y.count > 0)
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

export async function getYearPhotos(year: string): Promise<GalleryPhoto[]> {
  const { items } = await listObjects(`gallery/${year}/`);
  return items
    .filter((i) => isImage(i.name))
    .map((i) => ({ url: getDownloadUrl(i.name, i.downloadTokens), name: i.name }));
}

export type GallerySection = { year: string; photos: GalleryPhoto[] };

export async function getAllGalleryPhotos(): Promise<GallerySection[]> {
  const years = await getGalleryYears();
  const sections = await Promise.all(
    years.map(async (y) => ({
      year: y.year,
      photos: await getYearPhotos(y.year),
    }))
  );
  return sections.filter((s) => s.photos.length > 0);
}
