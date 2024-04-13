import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export interface CardProps extends PropsWithChildren {
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'flex  rounded-xl border border-slate-100 px-4 py-10 text-lg dark:border-slate-800 lg:text-sm',
        className,
      )}
    >
      {children}
    </div>
  )
}
