export default (state = {}, action) => {
	switch (action.type) {
		case 'CATEGORY_DATA':
			return {
				...state,
				categoryData: action.payload
			}
		case 'BUDGET_DATA':
		return {
			...state,
			budgetData: action.payload
		}
		default:
			return state
	}
}
