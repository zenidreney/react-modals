import { FcOk } from "react-icons/fc";
import { IoIosWarning } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { FcInfo } from "react-icons/fc";
import classnames from "classnames"
import "./Banner.css"

export type BannerProps = {
    text?: string;
    heading?: string;
    variant?: "success" | "warning" | "error" | "neutral"

}

export default function Banner({

    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.",
    heading = "Success!!",
    variant = "success"
    }: BannerProps) {

    const variantClass = variant && `banner-${variant}`
    const classNames = classnames("banner-container", variantClass)

    const icon = (variant === "success") ? <FcOk /> :
        (variant === "warning") ? <IoIosWarning className="warning-icon" /> :
            (variant === "error") ? <IoIosCloseCircle className="error-icon" /> :
                (variant === "neutral") ? <FcInfo /> : ""


    const bannerText = heading ? heading :
        (variant === "success") ? "Congratulations!" :
            (variant === "warning") ? "Attention" :
                (variant === "error") ? "There is a problem with your application" :
                    (variant === "neutral") ? "Update available" : ""

    const infoText = <p>{text}</p>

    return (

        <div className={classNames}>

            <div className="banner-header-row">
                {icon}
                <h2 className="banner-header">{bannerText}</h2>
            </div>

            {heading ? <div className="banner-header-row">
                {icon}
                {infoText}
            </div> : ""}

        </div>
    )
}