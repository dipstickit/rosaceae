import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { AuthData } from "../types/authData.type";
import { ResponseData } from "../types/responseData.type";

const instance: AxiosInstance = axios.create({
  baseURL: "https://joint-socially-pipefish.ngrok-free.app/api/v1/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "ngrok-skip-browser-warning": "true",
  },
});

instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    // Do something before request is sent
    // Get the token from local storage
    const authDataString = localStorage.getItem("persist:root");
    if (authDataString) {
      const authData: AuthData = JSON.parse(authDataString).auth;
      const token = authData?.accessToken;

      // Set the token to the Authorization header if token exists
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error: AxiosError) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token"); // Hoặc lấy token từ bất kỳ nơi nào bạn lưu
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
instance.interceptors.response.use(
  function (
    response: AxiosResponse<ResponseData>
  ): AxiosResponse<ResponseData> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error.response?.status || 500;
    // we can handle global errors here
    switch (status) {
      // authentication (token related issues)
      case 401:
        console.error("Unauthorized access. Redirecting to login page...");
        break;
      // generic api error (server related) unexpected
      default:
        return error.response?.data ? error.response.data : error;
    }
  }
);

export default instance;
