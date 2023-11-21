import axios from "axios";

const baseUrl = "https://3.27.163.46";

export const postEditEvent = async (key, formData) => {
  const params = {
    event_id: key,
  };

  try {
    const response = await axios.post(`${baseUrl}/api/edit/event`, formData, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while editing the event. Please try again later."
    );
  }
};

export const postEditFoodForm = async (key, foodFormData) => {
  const params = {
    event_id: key,
  };

  try {
    const response = await axios.post(`${baseUrl}/api/food/tasting`, foodFormData, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while editing the event. Please try again later."
    );
  }
};

export const postEditMeetingForm = async (key, meetingData) => {
  const params = {
    event_id: key,
  };

  try {
    const response = await axios.post(`${baseUrl}/api/edit/meeting`, meetingData, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while editing the event. Please try again later."
    );
  }
};



