import clsx from "clsx";

type warn = "positive" | "neutral" | "bad"

type Props = {
    name: string,
    comment: string,
    msg: string,
    more?: string,
    w: warn,
}

const Alert = ({ w = "neutral", ...props }: Props) => {

    return (
        <div className={clsx(
            "flex p-4 mb-4 text-sm  border rounded-lg bg-red-50 dark:bg-gray-800",
            w === "bad" && "text-red-700 border-red-300 dark:text-red-400 dark:border-red-800",
            w === "neutral" && "text-blue-700 border-blue-300 dark:text-blue-400 dark:border-blue-800",
            w === "positive" && "text-green-700 border-green-300 dark:text-green-400 dark:border-green-800",
        )}>

            {w === "bad" && <svg aria-hidden="true" className="flex-shrink-0 inline h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>}
            {w === "neutral" && <svg aria-hidden="true" className="flex-shrink-0 inline w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>}
            {w === "positive" && <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>}

            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">{props.name}</span>
                <h1>{props.comment}</h1>
                <p>{props.msg}</p>
                <p>
                    <i>{props.more}</i>
                </p>
            </div>
        </div>
    )
}

export default Alert