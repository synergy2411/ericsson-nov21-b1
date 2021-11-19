export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_COUNTER = "ADD_COUNTER"
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER"
export const STORE_RESULT = "STORE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT"

// Action Creator

export const onDeleteResult = index => {
    return {
        type : DELETE_RESULT,
        index
    }
}

export const onStoreResult = () => {
    return {
        type : STORE_RESULT
    }
}

export const onSubtractCounter = value => {
    return {
        type : SUBTRACT_COUNTER,
        value
    }
}

export const onAddCounter = value => {
    // Can perform more action
    return {
        type : ADD_COUNTER,
        value   
    }
}