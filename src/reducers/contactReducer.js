const initialState = {
    contacts: [],
    contact:{}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_CONTACTS':
            return {
                ...state,
                contacts: action.payload//get the data from payload in contctactions
            }
        case 'GET_CONTACT':
            return {
                ...state,
                contact: action.payload //get the data from payload in contctactions
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
            case 'UPDATE_CONTACT':
                return{
                    ...state,
                    contacts:state.contacts.map(contact => contact.id === action.payload.id ?(contact=action.payload): contact )
                }
        default: {

            return state;
        }
    }

}