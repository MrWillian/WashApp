import api from '../services/api';

module.exports = {
  async registerUserClient(name, email, password, cellPhone) {
    try {
      const result = await api.post('/user', { name, email, password, cellPhone });
      await api.post('/client', { user_id: result.data.id });
      return result.data;
    } catch (error) {
      console.log('error', error);
      return;
    }
  },

  async registerUserCompany(name, email, password, cellPhone, tellPhone) {
    try {
      const result = await api.post('/user', {
        name, email, password, cellPhone, tellPhone 
      });
      await api.post('/company', { user_id: result.data.id });
      
      return result.data;
    } catch (error) {
      console.log('error', error);
      return;
    }
  },
};
