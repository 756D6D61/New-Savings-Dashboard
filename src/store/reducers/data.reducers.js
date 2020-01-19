import * as types from '../types'
import { budgetData, categoryData } from '../actions/data.actions'

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
					payload: categoryData
				}
			}
		case types.BUDGET_DATA:
			return {
				budget: {
					...state.budget,
					loading: true,
					payload: budgetData
				}
			}
		default:
			return state
	}
}
