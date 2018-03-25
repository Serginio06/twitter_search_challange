import { ACTION_APP_SERVER_ERROR, ACTION_APP_DATA_ERROR } from '../store/actions/tradesAction';

export function fetchData(dispatch, url) {
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      // if res is not ok then handler error
      res.text().then((errData) => {
        const { status, statusText } = res;
        const message = `getTimestampAction():  HTTP status ${status} (${statusText}): ${errData}`;
        throw new Error(message);
      }).catch((err) => {
        dispatch({
          type: ACTION_APP_DATA_ERROR,
          payload: {
            errMsg: err,
          },
        });
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_APP_SERVER_ERROR,
        payload: {
          errMsg: err,
        },
      });
      // console.error(err);
    });
}

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

// export default fetchData;
