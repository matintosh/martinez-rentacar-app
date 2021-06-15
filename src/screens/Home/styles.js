import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  safeAreaTop: {flex: 0, backgroundColor: constants.colors.primary},
  safeAreaBottom: {flex: 1, backgroundColor: constants.colors.background},
  header: {backgroundColor: constants.colors.primary, height: '100%'},
  content: {
    width: '100%',
    backgroundColor: constants.colors.background,
    paddingVertical: constants.spacing.lg,
  },
});
