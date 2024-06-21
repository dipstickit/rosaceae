import axios from "axios";

export async function getListBank(){
    try {
        const res = await axios({
          method: "GET",
          url: `https://api.vietqr.io/v2/banks`,
          headers: {
            "Content-Type": "application/json",
          },
        });
        return res.data;
      } catch (error) {
        return error.response.data;
      }

}

export async function createPaymentLink(formData: any) {
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_ORDER_URL}/api/v1/payOS/createOrderQR`,
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }