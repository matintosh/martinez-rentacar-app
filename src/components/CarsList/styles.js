import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  container: {
    width: '100%',
    paddingHorizontal: '10%',
    paddingTop: constants.spacing.lg,
    backgroundColor: constants.colors.background,
  },
  title: {
    fontWeight: 'bold',
    color: constants.colors.black,
  },
  titleWrapper: {
    marginBottom: constants.spacing.lg,
    justifyContent: 'space-between',
  },
  emptyView: {
    width: '100%',
    backgroundColor: constants.colors.white,
    padding: constants.spacing.md,
    borderRadius: constants.radius.md,
    flexDirection: 'column',
    alignItems: 'center',
  },
  emptyViewText: {
    color: constants.colors.black,
    fontWeight: '600',
    textAlign: 'center',
  },
  refreshButton: {
    backgroundColor: constants.colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: constants.spacing.md,
    borderRadius: constants.radius.sm,
    paddingHorizontal: constants.spacing.xlg,
  },
  scroll: {
    height: constants.dimensions.windowHeight * 0.55
  }
});
