import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Learn_Frontend',
    default: 'Learn_Frontend - Become a better front-end developer',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', GeistSans.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <Analytics />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.GOOGLE_TAG_ID}}');
        `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG_ID}`}
        />
        <Script>
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.HOTJAR_SITE_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </body>
    </html>
  )
}
