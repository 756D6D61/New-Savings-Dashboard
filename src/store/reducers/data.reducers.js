import * as types from '../types'

const initialState = {
	category: [],
	budget: []
}

export default (state = initialState, action) => {
	switch (action.types) {
		case types.CATEGORY_DATA:
			return {
				...state,
				category: action.payload
			}
		case types.BUDGET_DATA:
			return {
				...state,
				budget: action.payload
			}
		default:
			return state
	}
}
