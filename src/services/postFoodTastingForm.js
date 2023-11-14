import axios from "axios";

const baseUrl = "http://3.27.163.46:9001";

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
    throw new Error(
      "An error occurred while creating a bet. Please try again later."
    );
  }
};
