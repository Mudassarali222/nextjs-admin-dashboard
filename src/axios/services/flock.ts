import axiosInstance from "../axiosInstance";
import { FLOCK_ENDPOINTS } from "../endpoints";

interface Flock {
    f_name: string;
    bird_type: string;
    bird_count?: number; // Optional with a default value of 0
    purpose: string;
    acquisition_type: string;
    acquisition_date: Date;
    notes?: string; // Optional
    icon?: string; // Optional
    active_bird_count?: number; // Optional with a default value of 0
    active?: number; // Optional with a default value of 0
}

export const getFlock = async () => {
    try {
        const response = await axiosInstance.get(FLOCK_ENDPOINTS.GET);
        return response;
    } catch (error) {
        throw error;
    }
};

export const addflock = async (flockData: Flock) => {
    try {
        const response = await axiosInstance.post(FLOCK_ENDPOINTS.POST, flockData);
        return response;
    } catch (error) {
        throw error;
    }
};


