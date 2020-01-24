import * as types from '../types'
import { budgetData, categoryData } from '../actions/data.actions'

const initialState = {}

export default (state = initialState, action, payload) => {
	switch (action.type) {
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
