import Header from '@/components/Header'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s - Learn_Frontend',
    default: 'Learn_Frontend - Become a better front-end developer',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <div className="relative mx-auto w-full max-w-8xl px-2 lg:px-8 xl:px-12">
        {children}
      </div>
    </div>
  )
}
