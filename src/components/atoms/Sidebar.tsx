import { Link } from "react-router-dom"

type buttonVariant = "regular" | "outline" | "ghost" | "link"
type buttonSize = "regular" | "large" | "small"
type buttonTheme = "light" | "dark"

type Data = {
  quantity?: number,
  label: string,
  path: string,
}

interface Props {
  data: Data[]
}

const Sidebar = ({
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

  const rLinks = data.map((d) => {
    return (
      <li>
        <a href={d.path} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
          <span className="flex-1 ml-3 whitespace-nowrap">{d.label}</span>
          {d.quantity && <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{d.quantity}</span>}
        </a>
      </li>
    );
  });

  // return (
  //   <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
  //     {renderedLinks}
  //   </div>
  // );

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-4" >
          {rLinks}
        </ul></div></aside>
  );

}

export default Sidebar