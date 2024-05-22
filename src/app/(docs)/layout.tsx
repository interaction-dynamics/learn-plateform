import { type Metadata } from 'next'

import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s - Learn_Frontend',
    default: 'Learn_Frontend - Become a better front-end developer',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>
}
