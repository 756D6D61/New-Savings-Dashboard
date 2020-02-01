import { combineReducers } from 'redux'

import data from './data.reducers'

/*export default function createReducer() {
	const rootReducer = combineReducers({
		data,
	})
	return rootReducer
}*/

export default combineReducers({
	data
})
