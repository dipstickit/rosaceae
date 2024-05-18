const initialState = {
    accessToken: null,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return { ...state, accessToken: action.payload };
        default:
            return state;
    }
};

export default authReducer;