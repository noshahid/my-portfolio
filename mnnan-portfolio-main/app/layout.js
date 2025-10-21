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
  title: "Noshahaid Nasir - Senior WordPress Developer & Team Lead",
  description: "Portfolio of Noshahaid Nasir - Senior WordPress Developer and Team Lead specializing in WordPress, WooCommerce, and frontend development",
  verification: {
    google: "q3hgj97vC5UNZQmMIiF-pzfL8uuQpgXL89YiP48h2Kg"
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
