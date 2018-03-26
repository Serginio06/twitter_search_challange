import { ACTION_APP_SERVER_ERROR, ACTION_APP_DATA_ERROR } from '../store/actions/tradesAction';

export const fetchData = (dispatch, url, data) => (
    fetch(url, getFetchInitProps(JSON.stringify(data)))
);

export function getFetchInitProps(body) {
    let res = {
        method: "POST",
        mode: "same-origin",
        credentials: "include",
        headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        }),
    };

    if (body) {
        res.body = body;
    }
    return res;
}
