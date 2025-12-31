
import axios from "axios";

const BASE_URL = "https://your-backend-api.com"; 
export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const bookSeats = async (bookingData) => {
  try {
    const response = await axios.post(`${BASE_URL}/book`, bookingData);
    return response.data;
  } catch (error) {
    console.error("Error booking seats:", error);
    return { success: false, message: error.message };
  }
};
