import axios from 'axios';

const API_URL = 'https://api.mistral.ai/v1';

export const sendMessage = async (message: string) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, { message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
