export const setUserInfo = (userInfo: UserInfo) => ({
    type: 'SET_USER_INFO',
    payload: userInfo,
})

export const clearUserInfo = () => ({
    type: 'SET_USER_INFO',
    payload: null,
});