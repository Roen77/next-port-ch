import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const badge = tv({
    base: 'font-medium me-2  my-1 px-2.5 py-0.5 rounded',
    variants: {
        type: {
            default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            dark: 'bg-gray-100 text-gray-800 text-sm dark:bg-gray-700 dark:text-gray-300',
            red: 'bg-red-100 text-red-800 text-sm dark:bg-red-900 dark:text-red-300',
            green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            yellow: 'bg-yellow-100 text-yellow-800 tdark:bg-yellow-900 dark:text-yellow-300',
            Indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
            purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
            pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
            gray: 'bg-slate-100 text-black dark:bg-slate-900 dark:text-white'
        },
        size: {
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg'
        }
    },
    defaultVariants: {
        type: 'default',
        size: 'sm'
    }
})

interface Props extends VariantProps<typeof badge> {
    title: string
}
function Badge({ title, type, size }: Props) {
    return (
        <span className={badge({ type, size })}>{title}</span>
    )
}

export default Badge