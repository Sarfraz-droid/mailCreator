export default function (data: object) {
	const state: { [key: string]: any } = data;

	const updateState = (newState: { [key: string]: any }) => {
		for (let key in newState) {
			state[key] = {
				...state[key],
				...newState[key],
			};
		}

		return state;
	};

	return updateState;
}
