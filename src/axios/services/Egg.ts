import axiosInstance from "../axiosInstance";
import {  EGG_ENDPOINTS } from "../endpoints";

interface Egg {
    flock_id: string;
    good_eggs: number; 
    spoil_eggs: number; 
    total_eggs: number;
    collection_date: Date;
    reduction_reason?:string;
    notes?: string; 
    type:string;
}

export const getEggsData = async (flockId:any) => {
    try {
        const response = await axiosInstance.get(`${EGG_ENDPOINTS.GET}?flock_id=${flockId}`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const addEggsData = async (EggData: Egg) => {
    try {
        const response = await axiosInstance.post(EGG_ENDPOINTS.POST, EggData);
        return response;
    } catch (error) {
        throw error;
    }
};