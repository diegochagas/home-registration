import { FETCH_HOME, FETCH_HOME_FAILURE, POST_HOME, POST_HOME_FAILURE } from './actions';

export const homeReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_HOME:
            return action.payload;
        case FETCH_HOME_FAILURE:
            return action.payload;
        default:
            return state;
    }
};

export const postHomeReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_HOME:
            return action.payload;
        case POST_HOME_FAILURE:
            return action.payload;
        default:
            return state;
    }
}