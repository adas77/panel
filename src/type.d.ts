type AuthDispatchType = (args: Action) => Action

type LangDispatchType = (args: Action) => Action

type AuthState = {
    isAuth: boolean
}
type Action = {
    type: string
    username?: string
    pass?: string
}

type LangState = {
    isPolish: boolean
}

type GlobalState = {
    isAuth: boolean,
    isPolish: boolean
}


