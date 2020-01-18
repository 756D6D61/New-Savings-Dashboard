import * as types from '../types'

const URL_CATEGORY = '//bejicmji8c.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=cateogry'
const URL_BUDGET = '//bejicmji8c.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=budget'

export const budgetData = () => dispatch => {
	dispatch({
		type: types.BUDGET_DATA,
		paylod: Promise.all(
			fetch(URL_BUDGET).then(res => res.json())
		)
	})
}

export const categoryData = () => dispatch => {
	dispatch({
		type: types.CATEGORY_DATA,
		payload: Promise.all(
			fetch(URL_CATEGORY).then(res => res.json())

		)
	})
}
