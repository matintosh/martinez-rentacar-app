import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  ctaContainer: {
    zIndex: 10,
    top: 270,
    height: 60,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cta: {
    height: 80,
    width: '80%',
    backgroundColor: constants.colors.white,
    borderRadius: constants.radius.lg,
    padding: constants.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ctaIconContainer: {
    backgroundColor: constants.colors.background,
    margin: 0,
    padding: 0,
    height: 50,
    width: 50,
    borderRadius: constants.radius.md,
  },
  ctaIcon: {
    marginLeft: constants.spacing.xsm,
  },
  ctaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ctaTitle: {
    color: constants.colors.primary,
    fontWeight: 'bold',
  },
  ctaSubtitle: {
    color: constants.colors.gray,
    fontWeight: '600',
    marginLeft: constants.spacing.sm,
  },
});
