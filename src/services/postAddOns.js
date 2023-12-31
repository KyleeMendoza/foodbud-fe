import axios from "axios";

const baseUrl = "https://3.27.163.46";

export const postAddOns = async (eventId, addOns) => {
  const body = [
    {
      event_id: eventId,
      addons: addOns,
    },
  ];
  try {
    const response = await axios.post(`${baseUrl}/api/additional/food`, body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred. Please try again later.");
  }
};
