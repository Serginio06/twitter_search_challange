import * as tradesAction from './../actions/tradesAction';
// import * as constants from './../../constants';

export default (state, action) => {
    const {
        formAlert = {
            style: '',
            msg: '',
        },
        hashtags,
        tweets
    } = action.payload;

    switch (action.type) {


        case tradesAction.ACTION_GET_TWEETS:
            return {
                ...state,
                tweets,
                formAlert,
                isSpinner: false,
            };
        case tradesAction.ACTION_APP_SPINNER_START:
            return {
                ...state,
                isSpinner: true,
            };
        case tradesAction.ACTION_HASHTAGS_CHANGE:
            return {
                ...state,
                hashtags,
                tweets,
                formAlert: {
                    style: '',
                    msg: '',
                },
            };
        case tradesAction.ACTION_APP_DATA_ERROR:
            return {
                ...state,
                isSpinner: false,
                formAlert: {
                    style: 'alert-info',
                    msg: 'Error during receiving data from server',
                },
            };
        case tradesAction.ACTION_APP_SERVER_ERROR:
            return {
                ...state,
                isSpinner: false,
                formAlert: {
                    style: 'alert-info',
                    msg: 'Cannot connect to the server. Please try again later',
                },
            };
        case tradesAction.ACTION_GET_TWEETS_RETURN_EMPTY:
            return {
                ...state,
                isSpinner: false,
                formAlert: {
                    style: 'alert-info',
                    msg: 'No tweets with these hashtags',
                },
            };

        default:
            return state;
    }
};
