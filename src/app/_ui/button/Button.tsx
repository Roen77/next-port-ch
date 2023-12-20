import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
    base: 'focus:ring-4 focus:outline-none border  font-medium  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ',
    variants: {
        type: {
            default: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 dark:border-blue-500',
            dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
            green: 'text-green-700 hover:text-white border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
            red: 'text-red-700 hover:text-white border-red-700 hover:bg-red-800  focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
            yellow: 'text-yellow-400 hover:text-white  border-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
            purple: 'text-purple-700 hover:text-white border-purple-700 hover:bg-purple-800  focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
        }
    }
})

interface Props extends VariantProps<typeof button> {
    title: string
}

function Button({ title, type = "default" }: Props) {
    return (
        <button type="button" className={button({ type })}>{title}</button>
    )
}

export default Button