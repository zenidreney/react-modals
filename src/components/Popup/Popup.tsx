import { useState, useEffect, cloneElement } from "react"
import { createPortal } from "react-dom"
import Banner from "./Banner/Banner"
import type { BannerProps } from "./Banner/Banner"

import "./Popup.css"

type PopupProps = BannerProps & { children?: React.ReactElement<{ onClick?: () => void }> }

function Popup({
    children = <button className="popup-btn">Click Me</button>,
    text,
    heading,
    variant }: PopupProps) {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => { setIsOpen(false) }, 3000)
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    const modalTrigger = cloneElement(children, {
        onClick: () => setIsOpen(true)
    })

    return (

        <>
            {
            createPortal(isOpen && 
            <div className="popup-container">
                <Banner
                    text={text}
                    heading={heading}
                    variant={variant}
                />
            </div>,
        document.body)
            }
            {modalTrigger}
        </>

    )
}

export default Popup