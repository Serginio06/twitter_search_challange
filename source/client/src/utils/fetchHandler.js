import { ACTION_APP_SERVER_ERROR, ACTION_APP_DATA_ERROR } from '../store/actions/tradesAction';

export function fetchData(dispatch, url, data) {

    // fetch(url, getFetchInitProps(JSON.stringify({email: email, password: password})))

  return fetch(url, getFetchInitProps(JSON.stringify(data)))


    // .then((res) => {
    //   if (res.ok) {
    //     return res.json();
    //   }
    //
    //   // if res is not ok then handler error
    //   res.text().then((errData) => {
    //     const { status } = res;
    //     const message = `getTimestampAction():  HTTP status ${status}: ${errData}`;
    //     throw new Error(message);
    //   }).catch((err) => {
    //
    //       console.log("errror1111 1=",);
    //
    //
    //     dispatch({
    //       type: ACTION_APP_DATA_ERROR,
    //       payload: {
    //         errMsg: err,
    //       },
    //     });
    //   });
    // })
    // .catch((err) => {
    //   dispatch({
    //     type: ACTION_APP_SERVER_ERROR,
    //     payload: {
    //       errMsg: err,
    //     },
    //   });
    //   // console.error(err);
    // });
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
