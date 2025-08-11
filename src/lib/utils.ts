import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'
export function formatDate(date: Date){
    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date)
}


export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}