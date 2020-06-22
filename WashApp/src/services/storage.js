import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage({
  size: 1000,

  storageBackend: AsyncStorage,

  defaultExpires: 1000 * 3600 * 24,

  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    
  }
});

export default storage;
