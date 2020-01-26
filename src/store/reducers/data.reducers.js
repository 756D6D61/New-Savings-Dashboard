import * as types from '../types'

const initialState = {
	category: {
		data: [],
		loading: true
	},
	budget: {
		data: [],
		loading: true
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
					loading: false
				}
			}
		case types.BUDGET_DATA:
			return {
				...state,
				budget: {
					...state.budget,
					data: action.payload,
					loading: false
				}
			}
		default:
			return state
	}
}
