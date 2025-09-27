import { useState, useEffect, cloneElement } from "react"
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
            const timer = setTimeout(() => { setIsOpen(false) }, 4000)
            console.log("clicked")
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    const modalTrigger = cloneElement(children, {
        onClick: () => setIsOpen(true)
    })

    return (

        <>
            {isOpen && <Banner
                text={text}
                heading={heading}
                variant={variant}
            />}
            {modalTrigger}
        </>

    )
}

export default Popup