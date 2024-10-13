import axiosInstance from "../axiosInstance";
import { TRANSACTION_ENDPOINTS } from "../endpoints";

interface Transaction {
    flock_id: string;
    purpose: string; 
    quantity: number; 
    sale_ammount: number; 
    payment_method: string; 
    payment_status: string;
    sold_to:string;
    created_date:Date;
    type:string;
    notes?: string; 
}

export const getTransationData = async (flockId:any) => {
    try {
        const response = await axiosInstance.get(`${TRANSACTION_ENDPOINTS.GET}?flock_id=${flockId}`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const addTransationData = async (transactionData: Transaction) => {
    try {
        const response = await axiosInstance.post(TRANSACTION_ENDPOINTS.POST, transactionData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getTransationDelete = async (id:any) => {
    try {
        const response = await axiosInstance.delete(`${TRANSACTION_ENDPOINTS.DELETE}/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
};