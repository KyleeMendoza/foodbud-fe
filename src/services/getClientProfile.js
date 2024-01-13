import axios from "axios";

const baseUrl = "https://3.27.163.46";

export const getClientProfile = async (email) => {
  const params = {
    email,
  };

  try {
    const response = await axios.get(`${baseUrl}/api/get/profile`, {
      params,
    });
    // console.log('Response api:', response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while getting client events.");
  }
};
