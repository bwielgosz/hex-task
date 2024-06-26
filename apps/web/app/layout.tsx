import { buttonVariants } from "@repo/design-system/button.tsx"
import "./globals.css"
import "@repo/design-system/global.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hex task",
  description: "Just a fun task",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col h-full`}>
        <header className="flex justify-between px-8 h-16 text-lg items-center border-b-gray-200 border-2">
          <Link href="/">Home</Link>
          <Link href="/my-account" className={buttonVariants()}>
            My account
          </Link>
        </header>
        <main className="flex-1 flex flex-col items-center py-16 px-4 gap-12">
          {children}
        </main>
        <footer className="border-2 border-t-gray-200 h-24 flex items-center justify-center">
          <p className="text-lg">Footer 2024</p>
        </footer>
      </body>
    </html>
  )
}
