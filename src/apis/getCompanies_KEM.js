//구은모

import axios from '../lib/axios';

const getCompaniesKem = async () => {
  const response = await axios.get(`/api/kem/companies`);
  return response.data;
};

export default getCompaniesKem;
