import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    notCount: 2,
}

const anotherReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.OKUNDUYAP:
            return {
                ...state,
                notCount: 0
            }
            default:
                return state
    }
}


export default anotherReducer;