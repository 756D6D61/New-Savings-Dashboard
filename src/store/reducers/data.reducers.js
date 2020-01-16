import * as types from '../types'

const initialState = {
	budget: {
		data: [],
		loading: false
	},
	category: {
		data: [],
		loading: false
	}
}
export default (state = initialState, action) => {
	switch (action.type) {
		case types.CATEGORY_DATA:
			return {
				category: {
					...state.category,
					loading: true
				}
			}
		case types.BUDGET_DATA:
		return {
			budget: {
				...state.budget,
				loading: true
			}
		}
		default:
			return state
	}
}
