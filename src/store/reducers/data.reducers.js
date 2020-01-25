import * as types from '../types'

const initialState = {
	category: {
		data: [],
		loading: false
	},
	budget: {
		data: [],
		loading: false
	}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.CATEGORY_DATA:
			return {
				...state,
				category: {
					...state.category,
					data: action.payload,
					loading: true
				}
			}
		case types.BUDGET_DATA:
			return {
				...state,
				budget: {
					...state.budget,
					data: action.payload,
					loading: true
				}
			}
		default:
			return state
	}
}
