import React from 'react'
import { createPortal } from 'react-dom'

type Props = {
    children: React.ReactNode, container: Element | null
}
function Modal({ children, container }: Props) {
    if (!container) return null
    return createPortal(children, container)

}

export default Modal