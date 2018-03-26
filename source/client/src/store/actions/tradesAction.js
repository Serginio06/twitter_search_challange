import {fetchData} from './../../utils/fetchHandler';

// export const ACTION_TRADES_GET_TIMESTAMP_EMPTY = 'ACTION_TRADES_GET_TIMESTAMP_EMPTY';
export const ACTION_TRADES_GET_DATA = 'ACTION_TRADES_GET_DATA';
export const ACTION_APP_SPINNER_START = 'ACTION_APP_SPINNER_START';
export const ACTION_APP_SERVER_ERROR = 'ACTION_APP_SERVER_ERROR';
export const ACTION_APP_DATA_ERROR = 'ACTION_APP_DATA_ERROR';
export const ACTION_HASHTAGS_CHANGE = 'ACTION_HASHTAGS_CHANGE';
export const ACTION_GET_TWEETS = 'ACTION_GET_TWEETS';


export function getDataAction(data) {

    return (dispatch) => {
        dispatch({
            type: ACTION_APP_SPINNER_START,
        });

        const promise = fetchData(dispatch, `/get-tweets`, data);

        promise
            .then(res => res.json())
            .then((tweets) => {

                console.log('tweets=', tweets);

                if (tweets && tweets.success) {

                    dispatch({
                        type: ACTION_GET_TWEETS,
                        payload: {
                            tweets: tweets.payload
                        },
                    });
                }
            })
            .catch((err) => {

                console.log("errror1111 1=",);

                dispatch({
                    type: ACTION_APP_DATA_ERROR,
                    payload: {
                        errMsg: err,
                    },
                });
            });
    };
}


export const hashtagChangedAction = hashtags => ({
    type: ACTION_HASHTAGS_CHANGE,
    payload: {
        hashtags,
        tweets:[]
    },
});

