import axios from "axios";

const baseUrl = "https://3.27.163.46";

export const postFoodTastingForm = async (eventId) => {
  const params = {
    event_id: eventId,
  };

  try {
    const response = await axios.post(`${baseUrl}/api/food/tasting`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred. Please try again later.");
  }
};
