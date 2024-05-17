import instance from "./axiosCustomize";

export const UserApi = {
    Login: (data: LoginInfo) => {
        return instance.post('/api/v1/auth/login', data, {
            headers: {
                crossDomain: true,
                'Content-Type': 'application/json'
            }
        })
    },

    Register: (data: RegisterInfo) => {
        return instance.post('/api/v1/auth/register', data, {
            headers: {
                crossDomain: true,
                'Content-Type': 'application/json'
            }
        })
    }
}