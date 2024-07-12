import * as Yup from "yup";

export const loginValidateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Vui lòng nhập email hợp lệ")
    .required("Trường này là bắt buộc"),
  password: Yup.string().required("Trường này là bắt buộc"),
});

export const registerValidateSchema = Yup.object().shape({
  name: Yup.string()
    .required("Trường này là bắt buộc")
    .min(5, "Tên phải có ít nhất 5 ký tự"),
  email: Yup.string()
    .email("Vui lòng nhập email hợp lệ")
    .required("Trường này là bắt buộc"),
  password: Yup.string()
    .required("Trường này là bắt buộc")
    .matches(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ hoa")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .matches(/[a-z]/, "Mật khẩu phải chứa ít nhất một chữ thường")
    .matches(/\d/, "Mật khẩu phải chứa ít nhất một số"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Mật khẩu và Xác nhận mật khẩu phải giống nhau"
    )
    .required("Trường này là bắt buộc"),
  address: Yup.string().required("Trường này là bắt buộc"),
  phone: Yup.string()
    .required("Trường này là bắt buộc")
    .matches(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ"),
});

export const profileEditValidateSchema = Yup.object().shape({
  name: Yup.string()
    .required("Trường này là bắt buộc")
    .min(5, "Tên phải có ít nhất 5 ký tự"),
  email: Yup.string()
    .email("Vui lòng nhập email hợp lệ")
    .required("Trường này là bắt buộc"),
  address: Yup.string().required("Trường này là bắt buộc"),
  phone: Yup.string()
    .required("Trường này là bắt buộc")
    .matches(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ"),
});

export const forgotPasswordValidateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Vui lòng nhập email hợp lệ")
    .required("Trường này là bắt buộc"),
});

export const UpdatePasswordValidateSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Mật khẩu hiện tại là bắt buộc"),
  newPassword: Yup.string()
    .required("Mật khẩu mới là bắt buộc")
    .min(8, "Mật khẩu mới phải có ít nhất 8 ký tự")
    .matches(/[a-z]+/, "Mật khẩu mới phải chứa ít nhất một chữ cái viết thường")
    .matches(/[A-Z]+/, "Mật khẩu mới phải chứa ít nhất một chữ cái viết hoa")
    .matches(/\d+/, "Mật khẩu mới phải chứa ít nhất một số"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("newPassword")],
    "Mật khẩu xác nhận phải trùng với mật khẩu mới"
  ),
});

export const FormContactValidateSchema = Yup.object().shape({
  name: Yup.string().required("Tên của bạn là bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  service: Yup.string().required("Vui lòng chọn dịch vụ"),
  phone: Yup.string()
    .required("Số điện thoại là bắt buộc")
    .matches(/^\d{10}$/, "Số điện thoại phải có đúng 10 chữ số và chỉ chứa số"),
  message: Yup.string().required("Nội dung là bắt buộc"),
});
