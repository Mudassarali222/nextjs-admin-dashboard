import axiosInstance from "../axiosInstance";
import { BIRD_ENDPOINTS } from "../endpoints";

interface Bird {
    flock_id: string;
    bird_count?: number; // Optional with a default value of 0
    addition_reduction_type: string;
    created_date: Date;
    notes?: string; // Optional
    type:string;
}

export const getBirdsData = async (flockId:any) => {
    try {
        const response = await axiosInstance.get(`${BIRD_ENDPOINTS.GET}?flock_id=${flockId}`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const addBirdData = async (birdData: Bird) => {
    try {
        const response = await axiosInstance.post(BIRD_ENDPOINTS.POST, birdData);
        return response;
    } catch (error) {
        throw error;
    }
};