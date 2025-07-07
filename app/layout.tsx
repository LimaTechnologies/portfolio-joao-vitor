import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "João Vitor Ribeiro de Lima | Desenvolvedor & Cinegrafista",
    template: "%s | João Vitor Ribeiro de Lima",
  },
  description:
    "Desenvolvedor Full Stack e aspirante a cinegrafista apaixonado por criar experiências que conectam tecnologia e arte visual. Especialista em React, Next.js, TypeScript, Node.js, MongoDB e Docker.",
  keywords: [
    "João Vitor Ribeiro de Lima",
    "Desenvolvedor Full Stack",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Docker",
    "Cinegrafista",
    "Fotógrafo",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps",
    "Automação",
    "Telegram Bots",
    "Blockchain",
    "Web3",
    "Solana",
    "Ethereum",
    "Portfolio",
    "Brasil",
    "Desenvolvedor Brasil",
  ],
  authors: [{ name: "João Vitor Ribeiro de Lima" }],
  creator: "João Vitor Ribeiro de Lima",
  publisher: "João Vitor Ribeiro de Lima",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jlsite.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jlsite.com",
    title: "João Vitor Ribeiro de Lima | Desenvolvedor & Cinegrafista",
    description:
      "Desenvolvedor Full Stack e aspirante a cinegrafista apaixonado por criar experiências que conectam tecnologia e arte visual.",
    siteName: "João Vitor Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "João Vitor Ribeiro de Lima - Desenvolvedor & Cinegrafista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Vitor Ribeiro de Lima | Desenvolvedor & Cinegrafista",
    description:
      "Desenvolvedor Full Stack e aspirante a cinegrafista apaixonado por criar experiências que conectam tecnologia e arte visual.",
    images: ["/og-image.jpg"],
    creator: "@jao.lima15",
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
  verification: {
    google: "pegar dps",
  },
  category: "technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="Brasil" />
        <meta name="language" content="Portuguese" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="João Vitor Portfolio" />
        <meta name="application-name" content="João Vitor Portfolio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "João Vitor Ribeiro de Lima",
              jobTitle: ["Desenvolvedor Full Stack", "Aspirante a Cinegrafista"],
              description:
                "Desenvolvedor Full Stack e aspirante a cinegrafista apaixonado por criar experiências que conectam tecnologia e arte visual.",
              url: "https://jlsite.com",
              sameAs: ["https://github.com/LimaTechnologies", "https://www.instagram.com/jao.lima15/"],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "MongoDB",
                "Docker",
                "Linux Server",
                "Nginx",
                "Git",
                "Telegram Bots",
                "Automação",
                "Blockchain",
                "Web3",
                "Solana",
                "Ethereum",
                "Fotografia",
                "Cinematografia",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "joaovitor_rlima@hotmail.com",
                contactType: "professional",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
