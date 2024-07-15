import { UserApi } from "../api/Api";
import { toast } from "react-toastify";
export const userHandler = {
  Login: async (numberOfError: number, data: LoginInfo): Promise<any> => {
    if (numberOfError !== 0) {
      return undefined;
    }
    try {
      console.log(`${data.email} ${data.password}`);
      const res = await UserApi.Login(data);
      if (
        !res.data ||
        !res.data.userInfo ||
        res.data.userInfo.role !== "CUSTOMER"
      ) {
        console.error(
          "Vai trò của người dùng không phải là CUSTOMER hoặc thông tin vai trò không tìm thấy:",
          res.data
        );
        toast.error("Chỉ khách hàng mới được phép đăng nhập.");
        return null;
      }

      console.log(res.data);
      return res;
    } catch (e) {
      console.error("Lỗi đăng nhập:", e);
      toast.error("Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại.");
      return null;
    }
  },
  Register: async (numberOfError: number, data: RegisterInfo): Promise<any> => {
    if (numberOfError !== 0) {
      return undefined;
    }
    try {
      console.log(`${data.email} ${data.password}`);
      const res = await UserApi.Register(data);
      console.log(res.data);
      return res;
    } catch (e: any) {
      if (e.response && e.response.status === 409) {
        toast.error("Email đã tồn tại. Vui lòng sử dụng email khác.");
      } else {
        toast.error("Đã xảy ra lỗi trong quá trình đăng ký. Vui lòng thử lại.");
      }
      return null;
    }
  },
};
