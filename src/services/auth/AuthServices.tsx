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
   export const postNewsLetter = async (data:object) => {

    try {
       
      const response = await axiosInstance.post(`/v1/newsletter?ListAgentMlsId=${process.env.NEXT_PUBLIC_REALTY_PRO_AGENT_ID}`, data);
      // alert(response.data.message)
      return response.data;
    } catch (error) {
      throw error;
    }
  };
    export const postEnquiry = async (data:object) => {

    try {
       
      const response = await axiosInstance.post(`/v1/enquiry?ListAgentMlsId=${process.env.NEXT_PUBLIC_REALTY_PRO_AGENT_ID}`, data);
      // alert(response.data.message)
      return response.data;
    } catch (error) {
      throw error;
    }
  };