import { TableType } from '../../types/TableType'

const Table = (props: TableType) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {props.cols.map((c) => {
              return (<th scope="col" className="px-6 py-3">
                {c}
              </th>)
            })}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((r) => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{r.items.map((i) => <td className="px-6 py-4">{i}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Table
