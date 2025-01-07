import axios from '../lib/axios';

export const getInvestments = async () => {
  try {
    const response = await axios.get(`/api/ksh/investments`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch investments:', error);
    throw new Error(
      error.response?.data?.message || 'Failed to fetch investments'
    );
  }
};
