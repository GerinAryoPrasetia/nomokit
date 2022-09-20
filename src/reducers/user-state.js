const SET_RUNNING_STATE = "scratch-gui/vm-status/SET_RUNNING_STATE";
const SET_TURBO_STATE = "scratch-gui/vm-status/SET_TURBO_STATE";
const SET_STARTED_STATE = "scratch-gui/vm-status/SET_STARTED_STATE";
const CLEAR_FORM = "CLEAR_FORM";
const CHANGE_FORM = "CHANGE_FORM";

const keyMirror = (list) => {
    let newList = {};
    Object.keys(list).map((element) => {
        var key = String(element);
        newList[key] = element;
    });
    return newList;
};
const UserState = keyMirror({
    NOT_LOGINED: null,
    LOGINED: null,
});

const UserStates = Object.keys(UserState);

const initialState = {
    running: false,
    started: false,
    turbo: false,
    error: null,
    userData: null,
    loginState: UserState.NOT_LOGINED,
    isLoading: false,
    form: {
        email: "ddffgg",
        password: "",
    },
};

const reducer = function (state, action) {
    if (typeof state === "undefined") state = initialState;
    switch (action.type) {
        case SET_STARTED_STATE:
            return Object.assign({}, state, {
                started: action.started,
            });
        case SET_RUNNING_STATE:
            return Object.assign({}, state, {
                running: action.running,
            });
        case SET_TURBO_STATE:
            return Object.assign({}, state, {
                turbo: action.turbo,
            });
        case CHANGE_FORM:
            return Object.assign({}, state, {
                form: {
                    ...state.form,
                    [action.inputType]: action.inputValue,
                },
            });
        default:
            return state;
    }
};

const setStartedState = function (started) {
    return {
        type: SET_STARTED_STATE,
        started: started,
    };
};

const setRunningState = function (running) {
    return {
        type: SET_RUNNING_STATE,
        running: running,
    };
};

const setTurboState = function (turbo) {
    return {
        type: SET_TURBO_STATE,
        turbo: turbo,
    };
};
const getIsLogined = (loginState) => loginState === UserState.LOGINED;

export {
    reducer as default,
    initialState as userStateInitialState,
    UserState,
    setRunningState,
    setStartedState,
    setTurboState,
    getIsLogined,
};
