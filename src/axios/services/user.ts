import axiosInstance from "../axiosInstance";
import { USER_ENDPOINTS } from "../endpoints";

interface User {
    email:string,
    password:string,
}

export const getAllUser = async () => {
    try {
        const response = await axiosInstance.get(USER_ENDPOINTS.GET);
        console.log('Line 12:', response);
        return response?.data;
    } catch (error) {
        throw error;
    }
};

export const addUser = async (userData:User) => {
    try {
        const response = await axiosInstance.post(USER_ENDPOINTS.POST, userData);
        return response;
    } catch (error) {
        throw error;
    }
};
