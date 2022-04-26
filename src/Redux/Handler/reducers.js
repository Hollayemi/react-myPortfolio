import * as Actions from '../types'
const initialState = {
    products:[],
    Login: []
}
const Reducer = (state=initialState, {type,payload}) =>{
    
    switch (type) {
        case Actions.SET_PRODUCTS:
            return {...state, products:payload};

        case Actions.LOGIN:
            return {...state, Login:payload}
    
        default:
            return state;
    }
}

export default Reducer