import {StyleSheet, Dimensions} from 'react-native';

export const constants = {
  colors: {
    primary: '#7E1621',
    secondary: '#BF1E2E',
    background: '#f4f4f4',
    white: '#fff',
    gray: "#bdb1af"  
  },
  spacing: {
    xsm: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xlg: 64,
  },
  radius: {
      sm: 8,
      md: 16,
      lg: 21
  },
  dimensions: {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height,
  }
};

export const baseStyles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
  },
});
