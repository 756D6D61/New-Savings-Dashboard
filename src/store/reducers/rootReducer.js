import { combineReducers } from 'redux'
import simpleReducer from './simpleReducer'
import dataReducer from './data.reducer'

export default combineReducers({
	simpleReducer,
	dataReducer
})
