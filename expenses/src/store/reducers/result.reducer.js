import * as fromActions from '../actions/root-actions';

const initialState = {
    result : []
}

function resultReducer(state = initialState, action){
    switch (action.type) {
        case fromActions.STORE_RESULT : {
            return {
                ...state,
                result : [action.counter, ...state.result]
            }
        }
        case fromActions.DELETE_RESULT :{
            const filteredResult = state.result.filter((val, idx) => idx !== action.index)
            return {
                ...state,
                result : filteredResult
            }
        }
        default:
            return state;
    }
}

export default resultReducer;