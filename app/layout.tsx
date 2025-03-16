import Image from "next/image"
import type { Metadata } from "next"
import { EB_Garamond, Montserrat } from "next/font/google"
import "./globals.css"
import Logo from "@/components/svg/rig-logo.svg"
import ThemeSwitch from "@/components/ThemeSwitch"

const garamondSerif = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
})

const montserratSans = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Robust Incentives Group",
  description: "Robust Incentives Group", // TODO: Add description
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${garamondSerif.variable} ${montserratSans.variable} grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center p-8 font-serif antialiased sm:px-18 sm:py-10`}
      >
        <header className="flex w-full justify-between">
          <Image
            src={Logo}
            className="text-foreground text-7xl dark:invert"
            alt="Robust Incentives Group RIG logo"
            priority
            width={150}
            height={144}
          />
          <nav className="flex items-center gap-4">
            <ThemeSwitch />
          </nav>
        </header>
        {children}
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
      </body>
    </html>
  )
}
