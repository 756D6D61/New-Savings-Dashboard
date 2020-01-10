const initalState = {}

export default (state = initalState, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return {
				...state,
				getData: action.payload
			}
		default:
			return state
	}
}
