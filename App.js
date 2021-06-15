/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';

import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from './src/theme';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {getKey, setKey} from './src/utils/Auth';
import {listCars} from './src/services/requests/cars';

import AppContextProvider from './src/context'

Icon.loadFont();
Icon2.loadFont();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const test = async () => {
    console.log('Getting cars');
    const a = await listCars();
    console.log(a);
  };
  const test2 = async () => {
    getKey();
  };

  useEffect(() => {
    test();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </AppContextProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
