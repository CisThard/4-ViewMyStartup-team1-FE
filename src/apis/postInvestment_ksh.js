// 김세환

import axios from '../lib/axios';

export const postInvestment = async ({
  name,
  amount,
  comment,
  password,
  passwordConfirmation,
  user,
  company,
}) => {
  try {
    const response = await axios.post(`/api/ksh/investments`, {
      name,
      amount,
      comment,
      password,
      passwordConfirmation,
      user, // user 객체 추가
      company, // company 객체 추가
    });
    return response.data;
  } catch (error) {
    console.error('Failed to post investment:', error);
    throw new Error(
      error.response?.data?.message || 'Failed to post investment'
    );
  }
};
