import axios from "axios";

const baseUrl = "http://3.27.163.46:9001";

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
    throw new Error(
      "An error occurred while creating a bet. Please try again later."
    );
  }
};
