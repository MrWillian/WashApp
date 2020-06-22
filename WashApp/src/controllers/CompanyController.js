import api from '../services/api';

module.exports = {
  async allCompanies() {
    try {
      const companies = await api.get('/companies');
      return companies.data;
    } catch(error) {
      return;
    }
  },
};
