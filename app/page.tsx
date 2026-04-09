import { Benevoles } from "@/components/sections/benevoles";
import { Contact } from "@/components/sections/contact";
import { Description } from "@/components/sections/description";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Sponsors } from "@/components/sections/sponsors";
import { Stats } from "@/components/sections/stats";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://usmeeting.ch" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      "@id": "https://usmeeting.ch/#event",
      name: "US Meeting Oron",
      description:
        "Le grand rassemblement de véhicules américains de Suisse romande. Chaque année à Oron-La-Ville, venez célébrer la passion automobile américaine.",
      url: "https://usmeeting.ch",
      image: "https://usmeeting.ch/opengraph-image.png",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      isAccessibleForFree: true,
      inLanguage: "fr-CH",
      location: {
        "@type": "Place",
        name: "Oron-La-Ville",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Oron-La-Ville",
          addressLocality: "Oron-la-Ville",
          postalCode: "1608",
          addressRegion: "VD",
          addressCountry: "CH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 46.5722,
          longitude: 6.8322,
        },
      },
      organizer: {
        "@type": "Organization",
        "@id": "https://usmeeting.ch/#organization",
        name: "Amicale Live to Ride",
        url: "https://usmeeting.ch",
        email: "u.s.meetingoron@gmail.com",
        sameAs: [
          "https://www.facebook.com/u.s.meetingoron",
          "https://www.instagram.com/u.s.meetingoron/",
        ],
      },
      audience: {
        "@type": "Audience",
        audienceType: "Passionnés de véhicules américains",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://usmeeting.ch/#organization",
      name: "Amicale Live to Ride",
      url: "https://usmeeting.ch",
      logo: "https://usmeeting.ch/opengraph-image.png",
      email: "u.s.meetingoron@gmail.com",
      foundingDate: "2021",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Oron-la-Ville",
          postalCode: "1608",
          addressCountry: "CH",
        },
      },
      sameAs: [
        "https://www.facebook.com/u.s.meetingoron",
        "https://www.instagram.com/u.s.meetingoron/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://usmeeting.ch/#website",
      url: "https://usmeeting.ch",
      name: "US Meeting Oron",
      inLanguage: "fr-CH",
      publisher: { "@id": "https://usmeeting.ch/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col items-stretch overflow-x-hidden">
        <Hero />
        <Description />
        <Stats />
        <Sponsors />
        <Benevoles />
        <Faq />
        <Contact />
      </div>
    </>
  );
}
