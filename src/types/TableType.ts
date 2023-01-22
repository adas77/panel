import { ReactNode } from "react"

export type TableType = {
    cols: string[]
    rows: RowData[]
}

export type RowData = {
    items: ReactNode[] | string[]
}