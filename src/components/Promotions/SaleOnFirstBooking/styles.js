import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  title: {
    position: 'absolute',
    top: '10%',
    left: constants.spacing.md,
    fontWeight: '600',
  },
  subtitle: {
    position: 'absolute',
    top: '30%',
    left: constants.spacing.md,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginLeft: 160,
  },
});
