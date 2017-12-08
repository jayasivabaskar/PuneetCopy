import {createStore} from 'redux';

const reducer = (state=[], action) => {
    console.log(action);
    if(action.type == "SPLIT_STRING"){
        return action.payload.split('')
    }
    if(action.type == "ADD_CHAR"){
        return [...state, action.payload]
    }
    return state
}

var store = createStore(reducer)

var action = {
    type: 'SPLIT_STRING',
    payload: 'abcd'
}
store.dispatch(action);

console.log(store.getState())

var action2 = {
    type: 'ADD_CHAR',
    payload: 'e'
}
store.dispatch(action2);

console.log(store.getState())

