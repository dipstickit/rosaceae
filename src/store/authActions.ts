export const setAccessToken = (token: string) => ({
    type: 'SET_ACCESS_TOKEN',
    payload: token,
});

export const clearAccessToken = () => ({
    type: 'SET_ACCESS_TOKEN',
    payload: null,
});
