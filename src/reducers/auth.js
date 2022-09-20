import {
    CHANGE_ISLOADING,
    CLEAR_FORM,
    CHANGE_FORM,
    LOGIN_REQUEST,
    CHANGE_SESSION_LOGIN,
    LOGOUT,
    CHANGE_ERROR,
    CLEAR_ERROR,
    VALIDATE,
    SUBMIT,
} from "./../lib/auth.js";

const authInitialState = {
    isLoading: false,
    loginState: false,
    form: {
        username: "",
        password: "",
    },
    username: "",
    sessionLogin: "",
    formErrors: {
        username: "",
        password: "",
        login: "",
    },
    submit: false,
};

const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case CHANGE_ISLOADING:
            return {
                ...state,
                isLoading: action.value,
            };
        case SUBMIT:
            return {
                ...state,
                submit: action.value,
            };
        case CHANGE_FORM:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.inputType]: action.inputValue,
                },
            };
        case CLEAR_FORM:
            return {
                ...state,
                form: {
                    ...state.form,
                    username: "",
                    password: "",
                },
                formErrors: {
                    ...state.formErrors,
                    username: "",
                    password: "",
                    login: "",
                },
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                sessionLogin: action.valueSession,
                username: action.valueUsername,
            };
        case CHANGE_SESSION_LOGIN:
            return {
                ...state,
                sessionLogin: action.value,
                username: action.value.user.email,
            };
        case LOGOUT:
            return {
                ...state,
                sessionLogin: "",
                username: "",
            };
        case VALIDATE:
            return {
                ...state,
                formErrors: {
                    ...state.formErrors,
                    [action.inputType]: action.inputValue,
                },
            };
        case CLEAR_ERROR:
            return {
                ...state,
                formErrors: {
                    ...state.formErrors,
                    username: "",
                    password: "",
                },
            };
        default:
            return state;
    }
};

export { authReducer as default, authInitialState };
