import axiosInstance from "../axiosInstance";
import { FEED_ENDPOINTS } from "../endpoints";

interface Feed {
    flock_id: string;
    feed_name: string; 
    quantity: number; 
    collection_date: Date;
    notes?: string; 
}

export const getFeedsData = async (flockId:any) => {
    try {
        const response = await axiosInstance.get(`${FEED_ENDPOINTS.GET}?flock_id=${flockId}`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const addFeedsData = async (FeedData: Feed) => {
    try {
        const response = await axiosInstance.post(FEED_ENDPOINTS.POST, FeedData);
        return response;
    } catch (error) {
        throw error;
    }
};