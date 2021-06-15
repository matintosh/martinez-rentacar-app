import * as Keychain from 'react-native-keychain';

export const setKey = async (username, key) => {
  await Keychain.setGenericPassword(username, key);
};

export const getKey = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log(
        'Credentials successfully loaded for user ' + credentials.username,
      );

      return credentials
    } else {
      console.log('No credentials stored');
      return null
    }
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
    return null
  }
};
