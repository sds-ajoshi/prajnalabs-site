import React from 'react'
export function Card({ className = '', ...props }) {
  return <div className={`rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm ${className}`} {...props} />
}
export function CardHeader({ className = '', ...props }) {
  return <div className={`p-4 border-b border-neutral-200 dark:border-neutral-800 ${className}`} {...props} />
}
export function CardTitle({ className = '', ...props }) {
  return <h3 className={`font-semibold ${className}`} {...props} />
}
export function CardContent({ className = '', ...props }) {
  return <div className={`p-4 ${className}`} {...props} />
}