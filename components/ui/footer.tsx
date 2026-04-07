"use client";

import { useIcon } from "@/hooks/use-icon";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

const USEFUL_LINKS = [
  { label: "Questions fréquentes", href: "#faq" },
  { label: "Bénévoles", href: "#benevoles" },
  { label: "Devenir sponsor", href: "#sponsors" },
];

export const Footer = () => {
  const { dynamic } = useIcon();

  return (
    <footer className="border-t transition-all">
      <div className="px-8 py-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src={dynamic} alt="US Meeting Oron" className="size-10" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold">US Meeting</span>
                <span className="text-sm text-muted-foreground">
                  Oron-La-Ville
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Le grand rassemblement de véhicules américains de Suisse romande.
              Chaque année à Oron-La-Ville, venez célébrer la culture et la
              passion automobile américaine.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base">Liens utiles</h3>
            <ul className="flex flex-col gap-2">
              {USEFUL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>
                  Oron-La-Ville
                  <br />
                  1608 Oron-la-Ville, Suisse
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0" />
                <a
                  href="mailto:contact@usmeeting.ch"
                  className="hover:text-foreground transition-colors"
                >
                  contact@usmeeting.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} US Meeting Oron. Tous droits réservés.
          </span>
          <span>Oron-La-Ville, Suisse</span>
        </div>
      </div>
    </footer>
  );
};
