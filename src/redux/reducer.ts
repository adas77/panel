import user1 from '../data/auth'
import * as ActionType from '../types/StoreActionType'

const initialState: GlobalState = {
  isAuth: false,
  isPolish: true,
  acc1: true,
}

const reducer = (state: GlobalState = initialState, action: Action): GlobalState => {
  switch (action.type) {

    case ActionType.LANG_SWITCH:
      let switchLang: GlobalState = {
        ...state,
        isPolish: state.isPolish ? false : true,
      }
      return switchLang

    case ActionType.AUTH_LOGIN:
      if (action.username !== user1.username || action.pass !== user1.pass) {
        return state
      }
      let authLogin: GlobalState = {
        ...state,
        isAuth: true,
      }
      return authLogin

    case ActionType.AUTH_LOGOUT:
      let authLoout: GlobalState = {
        ...state,
        isAuth: false,
      }
      return authLoout

    case ActionType.ACC_SWITCH:
      let switchAcc: GlobalState = {
        ...state,
        acc1: state.acc1 ? false : true,
      }
      return switchAcc

  }
  return state
}

export default reducer