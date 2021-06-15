import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  container: {
    width: '100%',
    padding: constants.spacing.md,
    borderRadius: constants.radius.md,
    backgroundColor: constants.colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: constants.spacing.md,
  },
  badgeStyle: {
    paddingHorizontal: constants.spacing.sm,
    borderRadius: constants.radius.lg,
    height: constants.spacing.lg,
    backgroundColor: constants.colors.secondary,
  },
  badgeTextStyle: {fontWeight: '600'},
  imageContainer: {
    width: '100%',
    padding: 0,
  },
  image: {
    height: 240,
    resizeMode: 'contain',
  },
  title: {
    width: '100%',
    color: constants.colors.black,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: constants.spacing.sm 
  },
  price: {
    width: '100%',
    color: constants.colors.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
  subPrice: {
    width: '100%',
    color: constants.colors.gray,
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 11
  },
});
