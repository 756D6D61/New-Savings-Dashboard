import * as type from '../types'

const initialState = {
	category: [],
	budget: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case type.CATEGORY_DATA:
			return {
				...state,
				category: action.payload
			}
		case type.BUDGET_DATA:
			return {
				...state,
				budget: action.payload
			}
		default:
			return state
	}
}
