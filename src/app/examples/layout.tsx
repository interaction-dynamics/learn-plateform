import Header from '@/components/Header'
import { PropsWithChildren } from 'react'

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
