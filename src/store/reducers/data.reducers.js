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
export default (state = initialState, action, payload) => {
	switch (action.type) {
		case types.CATEGORY_DATA:
			return {
				category: {
					...state.category,
					loading: true,
					payload
				}
			}
		case types.BUDGET_DATA:
			return {
				budget: {
					...state.budget,
					loading: true,
					payload
				}
			}
		default:
			return state
	}
}
