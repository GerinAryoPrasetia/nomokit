import { createStore } from "redux";

const initialStateLogin = {
    isLogin: false,
    form: {
        username: "yuda",
        password: "",
    },
};

const LoginReducer = (state = initialStateLogin, action) => {
    if (action.type === "SET_FORM") {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            },
        };
    }
    return state;
};
const reducer = createStore(LoginReducer);
export default reducer;
