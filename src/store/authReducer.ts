const initialState = {
    accessToken: null,
    userInfo: null,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            localStorage.setItem("access-token", action.payload.token)
            return {
                ...state,
                accessToken: action.payload.token,
                currentUser: action.payload.currentUser,
                role: action.payload.role
            };
        case 'CLEAR_ACCESS_TOKEN':
            localStorage.setItem("access-token", action.payload)
            return {
                ...state,
                accessToken: action.payload
            }
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