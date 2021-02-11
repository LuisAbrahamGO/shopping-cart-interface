import { PRODUCTLS, LOAD_STATE, DELETE } from "../../types";

export default (state, action) => {
    console.log(state);
    switch(action.type) {
        case PRODUCTLS:
            return state.concat(action.payload);
        case LOAD_STATE:
            return state = action.payload;
        case DELETE:
            return 
        default:
            return state;
    }
}