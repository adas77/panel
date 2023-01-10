
import { useDispatch } from "react-redux";
import * as ActionType from '../types/StoreActionType'


const useGlobalDispatch = () => {
    const dispatch = useDispatch()

    const cmdLogin = (username: string, pass: string) => {
        dispatch({
            type: ActionType.AUTH_LOGIN,
            username: username,
            pass: pass
        })
    }

    const cmdLogout = () => {
        dispatch({
            type: ActionType.AUTH_LOGOUT,
        })
    }

    const cmdSwitchLang = () => {
        dispatch({
            type: ActionType.LANG_SWITCH,
        })
    }

    return { cmdLogin, cmdLogout, cmdSwitchLang }

}

export default useGlobalDispatch