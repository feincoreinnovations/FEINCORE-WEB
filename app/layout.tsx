import type { Metadata } from "next";
import "./globals.css";
import settings from "@/data/site-settings.json";
import { SiteShell } from "@/components/site-shell";
export const metadata: Metadata = { metadataBase: new URL(settings.officialWebsiteUrl), title: { default: settings.defaultSeoTitle, template: `%s | ${settings.companyName}` }, description: settings.defaultSeoDescription, icons: { icon: settings.faviconPath }, openGraph: { title: settings.defaultSeoTitle, description: settings.defaultSeoDescription, images: [settings.defaultOgImage], type: "website" }, alternates: { canonical: "/" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>; }
