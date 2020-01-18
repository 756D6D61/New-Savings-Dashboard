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
					category: action.payload,
					loading: true
				}
			}
		case types.BUDGET_DATA:
		return {
			budget: {
				...state.budget,
				bduget: action.payload,
				loading: true
			}
		}
		default:
			return state
	}
}
