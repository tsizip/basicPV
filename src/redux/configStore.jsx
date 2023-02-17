import {combineReducers , legacy_createStore as createStore, legacy_createStore} from 'redux'
import DateTimeReducer from './reducers/DateTimeReducer'

const rootReducer = combineReducers({
     DateTimeReducer

})

const store = legacy_createStore(rootReducer)
export default store