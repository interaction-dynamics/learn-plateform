import { type Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s - Learn_Frontend',
    default: 'Learn_Frontend - Render prices',
  },
  description: `This platform is not like other programming courses. It won't teach you how to code, but it will teach you how to code better. It gathers the best practices in front-end development to help you become a better developer. Hope it will be useful to you!`,
}

export default function Layout({ children }: PropsWithChildren) {
  return <> {children}</>
}
