import axios from "axios";

const baseUrl = "https://3.27.163.46";

export const getFetchEvent = async (eventId) => {
  const params = {
    event_id: eventId,
  };

  try {
    const response = await axios.get(`${baseUrl}/api/get/event`, {
      params,
    });
    // console.log('Response api:', response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while creating a bet. Please try again later."
    );
  }
};

export const getFetchFT = async (eventId) => {
  const params = {
    event_id: eventId,
  };

  try {
    const response = await axios.get(`${baseUrl}/api/get/FT`, {
      params,
    });
    // console.log('Response api:', response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while creating a bet. Please try again later."
    );
  }
};


