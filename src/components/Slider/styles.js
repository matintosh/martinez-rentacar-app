import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});
