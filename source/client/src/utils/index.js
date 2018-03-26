
import {getFetchInitProps} from "./fetchHandler"

export function logout() {
    const url = "/logout";
    // const email = document.getElementById('InputEmail').value;
    // const password = document.getElementById('InputPassword').value;

    fetch(url, getFetchInitProps(JSON.stringify({})))
        .then(res => res.json())
        .then(res => {

            // console.log("logout res=",res);

            if (res && res.success) {
                document.location.href = "/signin";
            } else {
                // console.log('loginAction unsuccessful !res=', res);
                showErrMes(res.errorCode);
            }
        })
        .catch(function (err) {
            console.error(`loginAction failed! ${err}`);
            showErrMes(err);
        });

}