import instance from "./axiosCustomize";

export const UserApi = {
    Login: (data: LoginInfo) => {
        return instance.post("auth/login", data, {
            headers: {
                crossDomain: true,
                'Content-Type': 'application/json'
            }
        })
    },

    Register: (data: RegisterInfo) => {
        return instance.post('auth/register', data, {
            headers: {
                crossDomain: true,
                'Content-Type': 'application/json'
            }
        })
    },

    ForgotPassword: (e: string) => {
        return instance.post('auth/forgot-password', { email: e }, {
            headers: {
                crossDomain: true,
                'Content-Type': 'application/json'
            }
        })
    },

    EmailVerify: (token: string) => {
        return instance.post('auth/email-verify', { token: token }, {
            headers: {
                crossDomain: true,
                'Content-Type': 'application/json'
            }
        })
    },

    GetUserByEmail: (email: string, token: string) => {
        return instance.get(`user?email=${email}`, {
            headers: {
                crossDomain: true,
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }

        })
    },

    EditProfile: (token: string, data: UserInfo) => {
        return instance.post(`user/edit-profile`, data, {
            headers: {
                crossDomain: true,
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }

        })
    }
}