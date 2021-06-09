import * as actionTypes from './types';

export const addUser = (message, id) => {
	return {
      type: actionTypes.ADD_USER,
      message,
      id
    }
}

export const showUser = (id) => {
	return {
      type: actionTypes.SHOW_USER,
      id
    }
};

export const editUser = (id) => {
	return {
      type: actionTypes.EDIT_USER,
      id
    }
};

export const updateUser = (message, id) => {
	return {
      type: actionTypes.UPDATE_USER,
      message,
      id
    }
};

export const deleteUser = (id) => {
	return {
      type: actionTypes.DELETE_USER,
      id
    }
};