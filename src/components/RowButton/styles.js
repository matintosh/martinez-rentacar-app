import {StyleSheet} from 'react-native';
import {constants, baseStyles} from '../../styles/base';

export const styles = StyleSheet.create({
  ...baseStyles,
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
    marginVertical: constants.spacing.md,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#fff',
  },
  icon: {
    color: constants.colors.black,
  },
  title: {
    fontWeight: 'bold',
    color: constants.colors.black,
    marginLeft: constants.spacing.md,
  },
});
