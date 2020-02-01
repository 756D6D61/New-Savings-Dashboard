import * as types from '../types'

const initialState = {
	category: {
		data: []
	},
	budget: {
		data: []
	}
}

export default (state = initialState, action) => {
	switch (action.types) {
		case types.CATEGORY_DATA:
			return {
				...state,
				category: {
					...state,
					data: action.data
				}
			}
		case types.BUDGET_DATA:
			return {
				...state,
				budget: {
					...state,
					data: action.data
				}
			}
		default:
			return state
	}
}
