import {StyleSheet} from 'react-native';
import {baseStyles, constants} from '../../styles/base';

export default styles = StyleSheet.create({
  ...baseStyles,
  safeAreaTop: {flex: 0, backgroundColor: constants.colors.primary},
  safeAreaBottom: {flex: 1, backgroundColor: constants.colors.background},
  header: {
    backgroundColor: constants.colors.primary,
  },
  content: {
    width: '100%',
    backgroundColor: constants.colors.background,
    paddingVertical: constants.spacing.lg,
  },
  imageContainer: {
    width: '100%',
    height: 240,
    margin: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '10%',
      marginTop: -40,
      marginBottom: constants.spacing.lg
  },
  model: {
      fontWeight: "600"
  },
  brand: {
      fontWeight: "400"
  },
  pricePicker: {
      backgroundColor: constants.colors.background,
      height: 120,
      width: '100%',
      flexDirection: 'row'
  },
  price: {
      width: 80,
      height: "100%",
      backgroundColor: constants.colors.white,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: constants.spacing.sm

  },
  priceText: {
      fontWeight: "600",
      color: constants.colors.black,
      fontSize: 12,
  }
});
