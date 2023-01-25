import clsx from "clsx"
import { type ButtonHTMLAttributes, type ReactNode } from "react"

export type buttonVariant = "regular" | "outline" | "ghost" | "link" | "inline" | "loud" | "dropdown" | "dropdownGhost"
type buttonSize = "regular" | "large" | "small" | "fullWidth"
type buttonTheme = "light" | "dark"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: buttonVariant
    size?: buttonSize
    theme?: buttonTheme
    children: ReactNode
}

const Button = ({
    variant = "regular",
    size = "regular",
    theme = "light",
    children,
    className,
    ...props }: Props) => {
    return (
        <button
            className={clsx(
                "h-fit w-fit rounded-lg text-xs font-medium transition-all items-center",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "text-gray-800 dark:text-white",
                size === "large" && "px-5 py-3 text-base",
                size === "regular" && "px-4 py-2 text-sm",
                size === "small" && "px-2 py-2",
                size === "fullWidth" && "w-full py-3",
                variant === "regular" &&
                "bg-brand text-white hover:bg-brand-dark disabled:hover:bg-brand",
                variant === "outline" &&
                "bg-blue-500 border border-brand text-brand hover:border-brand-dark hover:bg-brand-light disabled:border-brand disabled:bg-transparent",
                variant === "ghost" &&
                "text-brand hover:bg-brand-light disabled:hover:bg-transparent",
                variant === "link" && "text-brand hover:underline disabled:no-underline",
                variant === "loud" && "bg-blue-600 border border-brand text-brand hover:border-brand-dark hover:bg-brand-light disabled:border-brand disabled:bg-transparent",
                variant === "inline" && "text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-4 py-2.5 text-center inline-flex items-center ",
                variant === "dropdown" && "text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-4 py-2.5 text-center inline-flex items-center ",
                variant === "dropdownGhost" && "text-brand hover:bg-brand-light disabled:hover:bg-transparent px-4 py-2.5 text-center inline-flex items-center ",
            )}
            {...props}>
            {children}
        </button>
    )
}

export default Button