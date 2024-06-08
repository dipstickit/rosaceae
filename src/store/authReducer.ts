const initialState = {
    accessToken: null,
    userInfo: null,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return { ...state, accessToken: action.payload };
        case 'SET_USER_INFO':
            return { ...state, userInfo: action.payload };
        case 'LOGOUT_USER':
            return {
                ...state,
                accessToken: null,
                userInfo: null,
            };
        default:
            return state;
    }
};

export default authReducer;