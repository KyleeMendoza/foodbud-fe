import axios from "axios";

const baseUrl = "https://3.27.163.46";

export const getInvoice = async (eventId) => {
  const params = {
    event_id: eventId,
  };

  try {
    const response = await axios.get(`${baseUrl}/api/invoice/receipt`, {
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
