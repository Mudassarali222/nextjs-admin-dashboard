import axiosInstance from "../axiosInstance";
import { FEED_ENDPOINTS, HEALTH_ENDPOINTS } from "../endpoints";

interface Health {
    flock_id: string;
    disease_name: string; 
    medicine_name: string; 
    doctor_name: string; 
    bird_count: number; 
    created_date: Date;
    type:string;
    notes?: string; 
}

export const getHealthData = async (flockId:any) => {
    try {
        const response = await axiosInstance.get(`${HEALTH_ENDPOINTS.GET}?flock_id=${flockId}`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const addHealthData = async (HealthData: Health) => {
    try {
        const response = await axiosInstance.post(HEALTH_ENDPOINTS.POST, HealthData);
        return response;
    } catch (error) {
        throw error;
    }
};