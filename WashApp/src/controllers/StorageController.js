module.exports = {
  async save(key, data) {
    try {
      await storage.save({ key, data });
    } catch(error) {
      return;
    }
  },

  async load(key) {
    try {
      return await storage.load({ key });
    } catch(error) {
      return;
    }
  }
};
