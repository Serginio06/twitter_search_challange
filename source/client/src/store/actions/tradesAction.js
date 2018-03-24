//====== Uncomment as needed foloowing imports
// import * as constants from './../../constants';
// import fetchData from './../../utils/fetchHandler';

// export const ACTION_TRADES_GET_TIMESTAMP_EMPTY = 'ACTION_TRADES_GET_TIMESTAMP_EMPTY';
export const ACTION_TRADES_GET_DATA = 'ACTION_TRADES_GET_DATA';
export const ACTION_APP_SPINNER_START = 'ACTION_APP_SPINNER_START';
export const ACTION_APP_SERVER_ERROR = 'ACTION_APP_SERVER_ERROR';
export const ACTION_APP_DATA_ERROR = 'ACTION_APP_DATA_ERROR';


export function getDataAction(data) {

    console.log("'data before dispatch=",data);

    return (dispatch) => {
        dispatch({
            type: ACTION_TRADES_GET_DATA,
            payload: {
                tradesPage: {
                    longName: "Sucess tradesPage"
                },
            },
        });
    };

}

// export const longNameChangedAction = longName => ({
//   type: ACTION_TRADES_LONGNAME_CHANGE,
//   payload: { longName },
// });

