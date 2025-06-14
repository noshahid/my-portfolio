export const siteConfig = {
  name: "Mnnan - Portfolio",
  description: "Frontend Developer & WordPress Specialist with expertise in React, Next.js, and modern web technologies.",
  url: "https://mnnan.vercel.app", // Replace with your actual domain
  ogImage: "/assets/images/profile-image-mnnan.jpg",
  links: {
    github: "https://github.com/yourusername", // Replace with your GitHub
    linkedin: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn
  },
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Web Developer",
    "UI/UX Developer",
    "JavaScript Developer",
    "Portfolio",
    "Mnnan",
  ],
  author: "Mnnan",
  twitter: "@yourusername", // Replace with your Twitter handle
};

export const defaultMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}; 