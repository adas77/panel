export type OpinionType = {
    widget?: boolean,
    src?: string,
    id: number,
    alt: string,
    rate: number,
    name: string,
    surname: string,
    date: Date,
    description: string,
}

export enum OpinionFetchState {
    POSITIVE = 4,
    NEGATIVE = 3,
    ALL = 5,
    WIDGET = 3,
}

export type FetchState = "POSITIVE" | "NEGATIVE" | "NEWEST" | "OLDEST" | "ALL" | "SEARCH"
