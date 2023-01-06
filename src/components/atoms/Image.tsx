import clsx from "clsx"
import image from "./img/default.jpg"

type imageVariant = "regular" | "circle"
type imageSize = "regular" | "large" | "small"

interface Props {
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
        <img  className="rounded-full w-36 h-36 cursor-pointer hover:grayscale" src={src} alt="default"></img>
    )
}

export default Image