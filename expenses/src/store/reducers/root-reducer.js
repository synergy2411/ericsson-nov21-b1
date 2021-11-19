import * as fromActions from '../actions/root-actions';

const initialState = {
    counter : 0
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case fromActions.INCREMENT:{
            return {
                counter : state.counter + 1
            }
        }
        case fromActions.DECREMENT:{
            return {
                counter : state.counter - 1
            }
        }
        default:
            return state;
    }
}

export default rootReducer;