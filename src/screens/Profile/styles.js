import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  safeAreaTop: {flex: 0, backgroundColor: constants.colors.primary},
  safeAreaBottom: {flex: 1, backgroundColor: constants.colors.background},
  container: {
    backgroundColor: constants.colors.primary,
    height: '100%',
  },
  header: {
    width: '100%',
    backgroundColor: constants.colors.primary,
    paddingVertical: constants.spacing.lg,
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    marginTop: constants.spacing.xsm,
    fontWeight: 'bold',
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: constants.colors.background,
  },
  middleBanner: {
    width: '70%',
    height: 120,
    backgroundColor: constants.colors.white,
    shadowColor: constants.colors.primary,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12.0,

    elevation: 4,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerWrapper: {
    marginLeft: constants.spacing.md,
  },
  currentBooking: {
    color: constants.colors.primary,
    fontWeight: '600',
    fontSize: 21,
    marginBottom: constants.spacing.xsm,
  },
  bookingsNumber: {
    color: constants.colors.primary,
    fontSize: 11,
    fontWeight: '200',
  },

  bookNow: {
    width: '30%',
    height: 180,
    backgroundColor: constants.colors.secondary,
    borderBottomLeftRadius: constants.radius.lg,
    paddingLeft: constants.spacing.md,
    shadowColor: constants.colors.primary,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12.0,

    elevation: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bookNowText: {
    fontWeight: 'bold',
    color: constants.colors.white,
    marginBottom: constants.spacing.xsm,
  },
});
