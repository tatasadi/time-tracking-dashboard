import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"

const rubik = Rubik({ subsets: ["latin"], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: "Time Tracking Dashboard",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${rubik.className} flex min-h-screen flex-col items-center justify-center`}
      >
        {children}
      </body>
    </html>
  )
}
