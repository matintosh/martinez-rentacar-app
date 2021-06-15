import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  container: {
    width: '100%',
    backgroundColor: constants.colors.primary,
    paddingVertical: 0,
  },
});
