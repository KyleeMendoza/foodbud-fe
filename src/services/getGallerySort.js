import axios from "axios";

const baseUrl = "https://3.27.163.46";

export const getGallerySort = async (
  galleryType,
  celebrantGender,
  eventType,
  search
) => {
  const params = {
    limit: 98,
    galleryType,
    celebrantGender,
    eventType,
    search,
  };
  try {
    const response = await axios.get(`${baseUrl}/api/sort/gallery`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred. Please try again later.");
  }
};
