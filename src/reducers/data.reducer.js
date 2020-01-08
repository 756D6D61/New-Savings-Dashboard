const initalState = {}

export default (state = initalState, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return {
				...state,
				getSavingsData: action.payload
			}
		default:
			return state
	}
}
