import axios from "axios";

const baseUrl = "http://3.27.163.46:9001";

export const postMeetingForm = async (eventId) => {
  const params = {
    event_id: eventId,
  };

  try {
    const response = await axios.post(`${baseUrl}/api/edit/meeting`, {
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
