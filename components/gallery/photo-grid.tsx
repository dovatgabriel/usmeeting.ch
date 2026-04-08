"use client";

import { useState, useCallback } from "react";
import { Lightbox } from "./lightbox";
import type { GalleryPhoto } from "@/lib/gallery";
import { motion } from "motion/react";

export function PhotoGrid({
  photos,
  year,
}: {
  photos: GalleryPhoto[];
  year?: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  const onClose = useCallback(() => setSelected(null), []);
  const onPrev = useCallback(
    () => setSelected((i) => (i !== null && i > 0 ? i - 1 : i)),
    [],
  );
  const onNext = useCallback(
    () => setSelected((i) => (i !== null && i < photos.length - 1 ? i + 1 : i)),
    [photos.length],
  );

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
            onClick={() => setSelected(i)}
            className="block w-full overflow-hidden rounded-lg break-inside-avoid group cursor-zoom-in"
          >
            <img
              src={photo.url}
              alt={
                year
                  ? `Photo de l'édition ${year} du US Meeting Oron`
                  : "Photo US Meeting Oron"
              }
              loading="lazy"
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </motion.button>
        ))}
      </div>

      <Lightbox
        photos={photos}
        index={selected}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}
