import axiosInstance from "../Api";

export const login = async (data:object) => {

    try {
       
      const response = await axiosInstance.post('/customer/login', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const register = async (data:object) => {

    try {
       
      const response = await axiosInstance.post('/customer/register', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
 export const forgetPassword = async (data:object) => {

    try {
       
      const response = await axiosInstance.post('customer/forgot-password', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };