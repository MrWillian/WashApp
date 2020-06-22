import api from '../services/api';

module.exports = {
  async login(email, password) {
    try {
      return await api.post('/login', { email, password });
    } catch(error) {
      return;
    }
  },
};
