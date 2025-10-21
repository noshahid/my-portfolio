import localFont from "next/font/local";
import { Poppins, Jost } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const jostFont = Jost({ subsets: ['latin'] });

export const metadata = {
  title: "Noshahaid Nasir - Senior WordPress Developer Team Lead & Project Manager",
  description: "Portfolio of Noshahaid Nasir - Senior WordPress Developer and Team Lead specializing in WordPress development, web development, website development, and project management",
  keywords: "Noshahid, Noshahid Nasir, senior wordpress developer, web developer, website development, wordpress development, team lead, project manager, wordpress expert, custom wordpress themes, woocommerce development",
  author: "Noshahaid Nasir",
  robots: "index, follow",
  openGraph: {
    title: "Noshahaid Nasir - Senior WordPress Developer",
    description: "Senior WordPress Developer and Team Lead specializing in custom WordPress development, WooCommerce, and web solutions",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${jostFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
