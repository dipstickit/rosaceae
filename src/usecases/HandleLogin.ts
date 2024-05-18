import { UserApi } from "../api/Api"

export const userHandler = {

    Login: async (numberOfError: number, data: LoginInfo): Promise<any> => {
        if (numberOfError !== 0) {
            return undefined
        }

        try {
            console.log(`${data.email} ${data.password}`)
            const res = await UserApi.Login(data);
            console.log(res.data);
            return res;
        } catch (e) {
            alert(e);
            return null;
        }
    },
    Register: async (numberOfError: number, data: RegisterInfo): Promise<any> => {
        if (numberOfError !== 0) {
            return undefined
        }

        try {
            console.log(`${data.email} ${data.password}`)
            const res = await UserApi.Register(data);
            console.log(res.data);
            return res;
        } catch (e) {
            alert(e);
            return null;
        }
    }
}