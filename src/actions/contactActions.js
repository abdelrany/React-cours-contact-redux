import Axios from "axios"
// getting the data users
export const getContacts = () => async dispatch => {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch
        ({
            type: 'GET_CONTACTS',
            payload: res.data // thsi is the payload 
        })
}
//getting the data in the update form 
export const getContact = (id) => async dispatch => {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch
        ({
            type: 'GET_CONTACT',
            payload: res.data // this is the payload 
        })
}
// deleting the data
export const deleteContact = (id) =>async dispatch => {
    const res = await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch ({
        type: 'DELETE_CONTACT',
        payload: id
    })
}
//adding the data 
export const addContact = (contact) => async dispatch =>{
    const res = await Axios.post(`https://jsonplaceholder.typicode.com/users`,contact);
    dispatch ({
        type: 'ADD_CONTACT',
        payload: res.data
    })
}
// edting the data 
export const updateContact = (contact) => async dispatch => {
    const res = await Axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact);
    dispatch
        ({
            type: 'UPDATE_CONTACT',
            payload: res.data // this is the payload 
        })
}