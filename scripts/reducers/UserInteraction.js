import { MODAL_TRIGGER } from '../actions/types'

const initialState = {
  trigger: false
}

const UserInteraction = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_TRIGGER:
      console.warn('trigger', action.trigger);
      return { ...state, trigger: action.trigger }
    default:
      return state
  }
}

export default UserInteraction
