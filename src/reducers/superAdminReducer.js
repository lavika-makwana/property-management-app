 const initailState = {
	data: [],
};

const superAdminCrud = (state= initailState, action) => {
	switch(action.type){
		case 'ADD_USER':
			return{
				...state,
				data: [...state.data, action.messsage],
			}
		case 'SHOW_USER':
			return{}
		case 'EDIT_USER':
			return{}
		case 'UPDATE_USER':
			return{}
		case 'DELETE_USER':
			return{}
		default:
			return state;
	}
}

export default superAdminCrud;