import type { Metadata } from "next"
import { EB_Garamond, Montserrat } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/ModeToggle"
import { MobileMenu } from "@/components/MobileMenu"

import Link from "@/components/ui/link"

import Logo from "@/components/svg/rig-logo.svg"
import GitHub from "@/components/svg/github.svg"
import Twitter from "@/components/svg/twitter.svg"
import Email from "@/components/svg/email.svg"

import { cn } from "@/lib/utils"

import {
  NAV_ITEMS,
  SITE_NAME,
  URL_EMAIL,
  URL_GITHUB_REPO,
  URL_TWITTER,
} from "@/lib/constants"

import "./globals.css"
import { BracketLink } from "@/components/ui/bracket-link"

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(garamondSerif.variable, montserratSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto grid min-h-screen max-w-[96rem] grid-rows-[auto_1fr_auto] p-8 font-serif antialiased sm:px-18 sm:py-10">
            <header className="mx-auto flex w-full flex-wrap items-center justify-between gap-y-4">
              <Link href="/">
                <Logo
                  className="text-foreground text-7xl"
                  alt="Robust Incentives Group RIG logo"
                />
              </Link>

              <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {NAV_ITEMS.map(({ href, title }) => (
                  <div key={href} className="relative max-sm:hidden">
                    <BracketLink href={href} className="text-xl lowercase">
                      {title}
                    </BracketLink>
                  </div>
                ))}

                <ModeToggle />

                <MobileMenu className="sm:hidden" />
              </nav>
            </header>
            {children}
            <footer className="row-start-3 flex flex-col items-center gap-8 py-20">
              <div className="flex items-center gap-x-4 font-sans text-3xl font-bold">
                <span className="text-accent-foreground mb-[0.125em] text-5xl select-none">
                  &#91;
                </span>
                <Link
                  href={URL_GITHUB_REPO}
                  hideArrow
                  className="scale-100 transition-transform hover:scale-110 focus:scale-110"
                >
                  <GitHub />
                </Link>
                <Link
                  href={URL_TWITTER}
                  hideArrow
                  className="scale-100 transition-transform hover:scale-110 focus:scale-110"
                >
                  <Twitter />
                </Link>
                <Link
                  href={URL_EMAIL}
                  hideArrow
                  className="scale-100 transition-transform hover:scale-110 focus:scale-110"
                >
                  <Email />
                </Link>
                <span className="text-accent-foreground mb-[0.125em] text-5xl select-none">
                  &#93;
                </span>
              </div>
              <div className="text-secondary-foreground text-center font-sans text-sm">
                &copy; {new Date().getFullYear()} {SITE_NAME}
                <br />
                All rights reserved
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
