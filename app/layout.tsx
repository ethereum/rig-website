import Image from "next/image";
import type { Metadata } from "next";
import { EB_Garamond, Montserrat } from "next/font/google"
import "./globals.css";
// import Logo from "@/public/rig-logo.svg"
import LogoPng from "@/public/rig-logo.png";
import { Sun } from "lucide-react"

const garamondSerif = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400","500","600"],
  subsets: ["latin"],
});

const montserratSans = Montserrat({
  variable: "--font-montserrat",
  weight: ["400","500","600"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Robust Incentives Group",
  description: "Robust Incentives Group", // TODO: Add description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${garamondSerif.variable} ${montserratSans.variable} antialiased grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:py-10 sm:px-18 font-serif`}
      >
        <header className="flex justify-between w-full">
          {/* <Logo className="text-7xl text-foreground" alt="Robust Incentives Group RIG logo" /> */}
          <Image
            className="dark:invert"
            src={LogoPng}
            alt="Robust Incentives Group RIG logo"
            priority
            width={75}
            height={72}
          />
          <nav className="flex gap-4 items-center">
            <button type="button" className="grid font-sans place-items-center grid-cols-3 text size-7 rotate-90">
              <p className="text-primary mb-[3px]">[</p>
              <div className=""><Sun className="size-4" /></div>
              <p className="text-primary mb-[3px]">]</p>
            </button>
          </nav>
        </header>
        {children}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </body>
    </html>
  );
}
