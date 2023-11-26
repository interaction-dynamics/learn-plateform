'use client'

import { usePathname } from 'next/navigation'

import { navigation } from '@/lib/navigation'

const findSection = (pathname: string) =>
  navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  )

export interface Props {
  title?: string
}

export default function DocsHeader({ title }: Props) {
  const pathname = usePathname()
  const section = findSection(pathname)

  if (!title && !section) {
    return null
  }

  return (
    <header className="mb-9 space-y-1">
      {section && (
        <p className="font-sans text-sm font-medium text-sky-500">
          {section.title}
        </p>
      )}
      {title && (
        <h1 className="font-sans text-3xl tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
      )}
    </header>
  )
}
