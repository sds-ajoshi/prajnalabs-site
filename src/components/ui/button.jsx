import React from 'react'

const base =
  'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
const variants = {
  default: 'bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black',
  outline:
    'border border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800',
  ghost: 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
}

export function Button({ variant = 'default', className = '', asChild, ...props }) {
  const Comp = asChild ? 'a' : 'button'
  return <Comp className={`${base} ${variants[variant]} ${className}`} {...props} />
}