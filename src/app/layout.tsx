import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      </body>
    </html>
  )
}
