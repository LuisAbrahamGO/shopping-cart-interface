import {
    PRODUCTLS, 
    LOAD_STATE,
    DELETE, 
    CLEAN
} from '../../types/index';

export default (state, action) => {
    switch(action.type) {
        case PRODUCTLS:
            return state.concat(action.payload);
        case LOAD_STATE:
            return action.payload;
        case DELETE:
            return  [    
                        ...state.slice(0, action.payload),
                        ...state.slice(action.payload + 1)
                    ]
        case CLEAN:
            return state = []
        default:
            return state;
    }
}