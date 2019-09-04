import notificationReducer from './notification'
import anotherReducer from './another'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    notification_reducer: notificationReducer,
    another_reducer: anotherReducer,
})

export default rootReducer;