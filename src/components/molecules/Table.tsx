import React from 'react'

type Props = {
  cols: string[]
  rows: RowData[]
}

type RowData = {
  items: string[]
}

// const Row = (rowData: RowData) => {
//   return (
//     <>
//       {
//         rowData.items.map((rd) => <td className="px-6 py-4">
//           {rd}
//         </td>)
//       }
//     </>
//   )
// }

const Table = (props: Props) => {
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



    //   <div className="relative overflow-x-auto">
    //     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    //       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //         <tr>
    //           {props.cols.map((c) => {
    //             return (<th scope="col" className="px-6 py-3">
    //               {c}
    //             </th>)
    //           })}
    //         </tr>
    //       </thead>
    //       <tbody>




    //         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    //           {props.rows.map((r) => <Row items={r.items} />)}
    //         </tr>

    //       </tbody>
    //     </table>
    //   </div>
  )
}

export default Table
// import React from 'react'

// type Props = {
//     cols: string[]
//     rows: Row[]
// }

// type Row = {
//     items: string[]
// }

// const Table = (props: Props) => {
//     return (
//         <div className="relative overflow-x-auto">
//             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                     <tr>
//                         {props.cols.map((c) => {
//                             return (<th scope="col" className="px-6 py-3">
//                                 {c}
//                             </th>)
//                         })}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                             Apple MacBook Pro 17"
//                         </th>
//                         <td className="px-6 py-4">
//                             Sliver
//                         </td>
//                         <td className="px-6 py-4">
//                             Laptop
//                         </td>
//                         <td className="px-6 py-4">
//                             $2999
//                         </td>
//                     </tr> */}

//                     {props.rows.map((r) => {
//                         // return (
//                         r.items.map((i) => {
//                             return (
//                                 <td className="px-6 py-4">
//                                     {i}
//                                 </td>
//                             );
//                         })
//                         // )
//                     })}

//                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                             Apple MacBook Pro 17"
//                         </th>
//                         <td className="px-6 py-4">
//                             Sliver
//                         </td>
//                         <td className="px-6 py-4">
//                             Laptop
//                         </td>
//                         <td className="px-6 py-4">
//                             $2999
//                         </td>
//                     </tr>

//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Table