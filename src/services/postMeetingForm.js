import axios from "axios";

const baseUrl = "https://3.27.163.46";

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
    throw new Error("An error occurred. Please try again later.");
  }
};
