import clsx from "clsx"
import { ImgHTMLAttributes } from "react"
import image from "./img/default.jpg"

type imageVariant = "regular" | "circle"
type imageSize = "regular" | "large" | "small"

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    variant?: imageVariant
    size?: imageSize
    alt?: string
    src?: string
}

const Image = ({
    variant = "regular",
    size = "regular",
    alt = "image",
    src = image,
    ...props }: Props) => {

    return (
        <img src={src} alt={alt} className={clsx(
            "rounded-full  cursor-pointer hover:grayscale",
            size === "large" && "w-56 h-56",
            size === "regular" && "w-36 h-36",
            size === "small" && "w-12 h-12",
        )} {...props} ></img>
    )
}

export default Image