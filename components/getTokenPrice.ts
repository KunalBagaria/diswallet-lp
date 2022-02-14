import axios from 'axios';

export const getTokenPrice = async (token: string): Promise <string | undefined> => {
  try {
    const response = await axios.get(`https://pricing.wagmi.bio/${token}`);
    const data = await response.data;
    return data.price;
  } catch (e) {
    console.log('Error getting token price');
    return undefined;
  }
};
