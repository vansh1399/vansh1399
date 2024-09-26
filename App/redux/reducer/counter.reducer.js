import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionType";

const intialstate = {
    count: 0
}

export const counterReducer = (state = intialstate, action) => {
    console.log(action);

    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                count: state.count + 1
            }

        case DECREMENT_COUNTER:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}