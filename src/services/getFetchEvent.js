import axios from "axios";

const baseUrl = "http://3.27.163.46:9001";

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
    const response = await axios.get(`${baseUrl}:9001/api/get/FT`, {
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


