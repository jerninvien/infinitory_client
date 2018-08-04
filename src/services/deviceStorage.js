import { AsyncStorage } from 'react-native';

export const deviceStorage = {
  async saveItem(key, value) {
    console.log('deviceStorage saveItem', key, value);
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      console.log('AsyncStorage Error saveItem: ' + err.message);
    }
  },

  // async saveMultiItems(key, values) {
  //   console.log('deviceStorage saveMultiItems', key, values);
  //   try {
  //     await AsyncStorage.multiSet(key, values);
  //   } catch (err) {
  //     console.log('AsyncStorage Error saveMultiItems: ' + err.message);
  //   }
  // },

  async loadItem(key) {
    console.log('deviceStorage loadItem', key);
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('valus is:', value);
        return value;
      } else {
        console.log('no value for that');
        return value;
      }
      return value;
    } catch (err) {
      console.log('AsyncStorage Error loadItem: ' + err.message);
    }
  },

  // async loadMultiItems(keys) {
  //   console.log('deviceStorage loadMultiItems', keys);
  //   try {
  //     const values = await AsyncStorage.multiGet(keys);
  //     console.log('multi valuz', values);
  //     }
  //   } catch (err) {
  //     console.log('AsyncStorage Error loadMultiItems: ' + err.message);
  //   }
  // },

  async deleteItem(key, value) {
    console.log('deviceStorage deleteItem', key, value);
    try{
      await AsyncStorage.removeItem(key, value);
    } catch (err) {
      console.log('AsyncStorage Error deleteItem: ' + err.message);
    }
  }
};

// export default deviceStorage;
