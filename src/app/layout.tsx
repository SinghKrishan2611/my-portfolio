import type { Metadata } from 'next'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import MouseGlow from '@/components/ui/MouseGlow'
import Meteors from '@/components/ui/Meteors'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { personalInfo } from '@/data/content'

const SITE_URL = 'https://krishan-portfolio.pages.dev'
const TITLE = 'Krishan Singh — Mobile Application Developer'
const DESCRIPTION =
  'Krishan Singh is a Mobile Application Developer with 7+ years of experience scaling Flutter and native Android (Kotlin, Jetpack Compose) apps to over 10 Lakh concurrent users.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Krishan Singh',
  },
  description: DESCRIPTION,
  applicationName: 'Krishan Singh — Portfolio',
  authors: [{ name: `${personalInfo.name} (@${personalInfo.handle})`, url: SITE_URL }],
  creator: 'SinghKrishan2611',
  publisher: 'Krishan Singh',
  keywords: [
    'Krishan Singh',
    'Krishan Singh Mobile Architect',
    'Krishan Singh Android',
    'Krishan Singh Flutter',
    'Senior Mobile Software Engineer',
    'Android Architect',
    'Flutter Architect',
    'Jetpack Compose',
    'Kotlin',
    'Dart',
    'BLoC Pattern',
    'Clean Architecture',
    'Offline-First Mobile Architecture',
    'Dagger Hilt',
    'Firebase Crashlytics',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Krishan Singh — Portfolio',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/profile_pic.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Krishan Singh — Senior Mobile Software Engineer & Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@SinghKrishan2611',
    images: ['/profile_pic.jpeg'],
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  category: 'technology',
}

// Explicit viewport config to ensure pinch-to-zoom works on mobile/touch devices
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// Structured data: identifies the person + site for search engines and AI engines.
const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: personalInfo.name,
  alternateName: ['Krishan Singh', 'SinghKrishan2611'],
  url: SITE_URL,
  image: `${SITE_URL}/profile_pic.jpeg`,
  email: `mailto:${personalInfo.email}`,
  jobTitle: personalInfo.role,
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Flutter',
    'Dart',
    'Kotlin',
    'Jetpack Compose',
    'Android SDK',
    'Clean Architecture',
    'BLoC Pattern',
    'MVVM',
    'Offline-First Mobile Architecture',
    'Dagger Hilt',
    'Room DB',
    'Sqflite',
    'Platform Channels',
  ],
  sameAs: personalInfo.socials
    .filter((s) => s.label !== 'Website')
    .map((s) => s.href),
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Krishan Singh Portfolio',
  alternateName: 'Krishan Singh',
  description: DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@id': `${SITE_URL}/#person` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        {/* Icon fonts are decorative, not render-critical. Load them non-render-blocking
            via an inline loader (media=print flips to all on load) so they don't delay
            first paint / LCP on mobile. <noscript> keeps them working when JS is off. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=['https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/devicon.min.css','https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.45.0/dist/tabler-icons.min.css'];h.forEach(function(u){var l=document.createElement('link');l.rel='stylesheet';l.href=u;l.media='print';l.onload=function(){l.media='all'};document.head.appendChild(l)})})();`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/devicon.min.css"
          />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.45.0/dist/tabler-icons.min.css"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {/* No-JS resilience: reveal animated content and hide the JS loader overlay
            when JavaScript is disabled or not executed (e.g. some AI crawlers). */}
        <noscript>
          <style>{`
            .js-loader-overlay { display: none !important; }
            [data-animate], [data-animate] * { opacity: 1 !important; transform: none !important; }
          `}</style>
        </noscript>
      </head>
      <body className="bg-bg text-fg font-body antialiased cursor-none overflow-x-hidden relative">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('krishan-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}})();`,
          }}
        />
        <ThemeProvider>
          <CustomCursor />
          <MouseGlow />
          <Meteors number={12} />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
