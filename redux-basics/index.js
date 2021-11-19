// import redux
// import {  } from "redux";
const redux = require("redux");

// Create Reducer
const initialState ={
    counter : 0
}

function rootReducer(state = initialState, action){
    if(action.type === "INCREMENT"){
        return {
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    }else if(action.type === "ADD_COUNTER"){
        console.log("PAYLOAD : ", action.payload)
        return {
            counter : state.counter + action.value
        }
    }else if(action.type === "SUBTRACT_COUNTER"){
        return {
            counter : state.counter - action.value
        }
    }
    return state;
}

// Create Store
const store = redux.createStore(rootReducer)
console.log("INITIAL STATE - ", store.getState())

// Subscribe Store
store.subscribe(() => {
    console.log("[SUBSCRIBING]", store.getState())
})

// Dispatch Action
store.dispatch({type : "INCREMENT"})

store.dispatch({type : "DECREMENT"})

store.dispatch({type : "ADD_COUNTER", value : 10, payload : "Some Value", data : ""})

store.dispatch({type : "SUBTRACT_COUNTER", value : 8})