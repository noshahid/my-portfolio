import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata, siteConfig } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={defaultMetadata.openGraph.url} />
        <meta name="theme-color" content="#ffd60a" />
        <meta name="google-site-verification" content="googlecf1e47c80a57ab84" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffd60a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={defaultMetadata.title.default} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mnnan",
              "url": defaultMetadata.openGraph.url,
              "image": defaultMetadata.openGraph.images[0].url,
              "sameAs": [
                defaultMetadata.links.github,
                defaultMetadata.links.linkedin,
                `https://twitter.com/${siteConfig.twitter.replace('@', '')}`
              ],
              "jobTitle": "Frontend Developer & WordPress Specialist",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
