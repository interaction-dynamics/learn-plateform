'use client'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import locales from './locales'

export interface LocaleSelectorProps
  extends React.ComponentPropsWithoutRef<typeof Listbox<'div'>> {
  locale: string
  onLocaleChange?: (locale: string) => void
}

export default function LocaleSelector({
  locale,
  onLocaleChange,
  ...props
}: LocaleSelectorProps) {
  return (
    <Listbox as="div" value={locale} onChange={onLocaleChange} {...props}>
      <Listbox.Button
        className="flex h-10 w-full items-center justify-center rounded-lg px-2 shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5 md:h-auto md:w-24"
        aria-label="Locale"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <span className="py-1 pl-1 text-sm font-semibold">{locale}</span>
      </Listbox.Button>
      <Listbox.Options className="absolute left-0 top-full mt-3 max-h-64 w-64 space-y-1 overflow-auto rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5">
        {Object.entries(locales).map(([value, labels]) => (
          <Listbox.Option
            key={value}
            value={value}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-sky-500': selected,
                  'text-slate-900 dark:text-white': active && !selected,
                  'text-slate-700 dark:text-slate-400': !active && !selected,
                  'bg-slate-100 dark:bg-slate-900/40': active,
                },
              )
            }
          >
            {({ selected }) => (
              <div className="ml-3">
                {labels[1]} ({value})
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
