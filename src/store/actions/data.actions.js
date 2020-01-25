import * as types from '../types'

const URL_CATEGORY =
	'https://cors-anywhere.herokuapp.com/https://nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=cateogry'
const URL_BUDGET =
	'https://cors-anywhere.herokuapp.com/https://nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=budget'

export const budgetData = () => dispatch => {
	dispatch({
		type: types.BUDGET_DATA,
		payload: fetch(URL_BUDGET)
			.then(res => res.json())
			.catch(err => err)
	})
}
export const categoryData = {
	type: types.CATEGORY_DATA,
	payload: fetch(URL_CATEGORY)
		.then(res => {
			return console.log(res.json())
		})

		.catch(err => {
			console.log(err)
		})
}

/**
 * export const getBudget = payload => {
	return {
		type: types.BUDGET_DATA,
		payload
	}
}
export const budgetDetails = () => {
	return function(dispatch) {
		const url = `${URL_BUDGET}`
		axios.get(url).then(function(response) {
			dispatch(getBudget(response.data))
		})
	}
}
 */
