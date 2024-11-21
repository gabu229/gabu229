import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/misc/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gabriel Orie - Fullstack Web Developer",
  description: "Full stack web developer, WEB3 Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar />
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
