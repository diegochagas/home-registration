import api from '../../../services/api';

export const FETCH_HOME = 'FETCH_HOME';
export const FETCH_HOME_FAILURE = 'FETCH_HOME_FAILURE';
export const POST_HOME = 'POST_HOME';
export const POST_HOME_FAILURE = 'POST_HOME_FAILURE';

export const fetchHome = () => async dispatch => {
    try {
        const response = await api.get(`/homes`);

        dispatch({ type: FETCH_HOME, payload: response.data });
    } catch(err) {
        dispatch({ type: FETCH_HOME_FAILURE, payload: { err, message: `Fail to get homes registers` }});
    }
};

export const postHome = home => async dispatch => {
    try {
        const response = await api.post(`/homes/`, home);

        dispatch({ type: POST_HOME, payload: { data: response.data, message: "Home registered with success!" } });
    } catch(err) {
        dispatch({ type: POST_HOME_FAILURE, payload: { err, message: "Fail to register home"} });
    }
};
