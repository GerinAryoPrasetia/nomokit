import firebase from "./config/firebase";

export const CHANGE_ISLOADING = "CHANGE_ISLOADING";
export const CLEAR_FORM = "CLEAR_FORM";
export const CHANGE_FORM = "CHANGE_FORM";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const CHANGE_SESSION_LOGIN = "CHANGE_SESSION_LOGIN";
export const LOGOUT = "LOGOUT";
export const CHANGE_ERROR = "CHANGE_ERRORS";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const VALIDATE = "VALIDATE";
export const SUBMIT = "SUBMIT";

export const changeForm = (value) => (dispatch) => {
    return dispatch({
        type: CHANGE_FORM,
        inputType: value.inputType,
        inputValue: value.value,
    });
};

export const clearFormError = () => (dispatch) => {
    return dispatch({ type: CLEAR_ERROR });
};

export const changeSessionLogin = (value) => (dispatch) => {
    return dispatch({ type: CHANGE_SESSION_LOGIN, value: value });
};

export const handleLogout = (value) => (dispatch) => {
    localStorage.removeItem("user");
    return dispatch({ type: LOGOUT });
};

export const loginRequest = (value) => (dispatch) => {
    //console.log('ok', value);
    dispatch({ type: CHANGE_ISLOADING, value: true });
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(value.username, value.password)
            .then((res) => {
                //console.log('user => ',res);
                dispatch({ type: CHANGE_ISLOADING, value: false });
                dispatch({
                    type: LOGIN_REQUEST,
                    valueSession: res,
                    valueUsername: value.username,
                });
                dispatch({ type: CLEAR_FORM });
                localStorage.setItem("user", JSON.stringify(res));
                resolve(true);
            })
            .catch((error) => {
                //console.log(error);
                dispatch({ type: CHANGE_ISLOADING, value: false });
                dispatch({
                    type: VALIDATE,
                    inputType: "login",
                    inputValue: "Username or Password Wrong",
                });
                reject(false);
            });
    });
};

export const validate = (form) => (dispatch) => {
    let error = false;
    if (!form.username) {
        dispatch({
            type: VALIDATE,
            inputType: "username",
            inputValue: "Username is required",
        });
        error = true;
    } else {
        dispatch({ type: VALIDATE, inputType: "username", inputValue: "" });
        error = false;
    }

    if (!form.password) {
        dispatch({
            type: VALIDATE,
            inputType: "password",
            inputValue: "Password is required",
        });
        error = true;
    } else if (form.password.length < 3) {
        dispatch({
            type: VALIDATE,
            inputType: "password",
            inputValue: "Password needs to be 3 characters or more",
        });
        error = true;
    } else {
        dispatch({ type: VALIDATE, inputType: "password", inputValue: "" });
        error = false;
    }

    if (!error) {
        dispatch({ type: SUBMIT, value: true });
    } else {
        dispatch({ type: SUBMIT, value: false });
    }
};
