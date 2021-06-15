import React from 'react';
import {View, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';

import {
  Header,
  AvatarButton,
  HomeCTA,
  CarsList,
  PromotionsSlider,
} from '../../components';
import {constants} from '../../styles/base';
import styles from './styles';

const Coso = () => (
  <Button
    title="Buscar autos"
    buttonStyle={{paddingVertical: constants.spacing.md}}
    icon={{
      name: 'search',
      type: 'font-awesome',
      color: 'white',
      iconStyle: {fontSize: 14, width: 12},
    }}
  />
);

export default function Home() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaBottom}>
        <View style={styles.header}>
          <Header Left={AvatarButton} Right={Coso} />
          <ScrollView bounces={false} styles={styles.scroll} showsVerticalScrollIndicator={false}>
            <PromotionsSlider />
            <HomeCTA />
            <View style={styles.content}>
              <CarsList />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
