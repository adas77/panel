import { type } from "@testing-library/user-event/dist/type"
import clsx from "clsx"
import { type ButtonHTMLAttributes, type ReactNode } from "react"
import { Link } from "react-router-dom"

type buttonVariant = "regular" | "outline" | "ghost" | "link"
type buttonSize = "regular" | "large" | "small"
type buttonTheme = "light" | "dark"

type Data = {
    label: string,
    path: string,
}

interface Props {
    data: Data[]
}

const Button = ({
    data,
    ...props }: Props) => {

        const renderedLinks = data.map((d) => {
            return (
              <Link
                key={d.label}
                to={d.path}
                className="mb-3"
                // activeClassName="font-bold border-l-4 border-blue-500 pl-2"
              >
                {d.label}
              </Link>
            );
          });
        
          return (
            <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
              {renderedLinks}
            </div>
          );
}

export default Button