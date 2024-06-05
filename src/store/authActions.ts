export const setAccessToken = (token: string, currentUser: UserInfo, role: string) => ({
    type: 'SET_ACCESS_TOKEN',
    payload: {
        token,
        currentUser,
        role
    },
});

export const clearAccessToken = () => ({
    type: 'SET_ACCESS_TOKEN',
    payload: null,
});
