import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  container: {
    width: '100%',
    padding: constants.spacing.md,
    borderRadius: constants.radius.md,
    backgroundColor: constants.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: constants.spacing.md,
  },
  badgeStyle: {
    paddingHorizontal: constants.spacing.sm,
    borderRadius: constants.radius.lg,
    height: constants.spacing.lg,
    backgroundColor: constants.colors.secondary,
    marginBottom: constants.spacing.sm
  },
  badgeTextStyle: {fontWeight: '600'},
  image: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    color: constants.colors.black,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: constants.spacing.sm,
    width: 120
  },
  price: {
    color: constants.colors.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
  subPrice: {
    color: constants.colors.gray,
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 11,
  },
});
