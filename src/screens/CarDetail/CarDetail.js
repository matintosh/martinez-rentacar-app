import React from 'react';
import {View, SafeAreaView, StatusBar, ActivityIndicator} from 'react-native';
import {Image, Text, Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {Header, Slider} from '../../components';

import styles from './styles';

const CarSlide = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: 'https://clipart-best.com/img/audi/audi-clip-art-5.png',
        }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};

export default function CarDetail() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaBottom}>
        <View style={styles.header}>
          <Header title="Audi" />
          <Slider renderItem={i => <CarSlide />} />
          <View style={styles.titleContainer}>
            <View style={styles.brandModelWrapper}>
              <Text h2 style={styles.model}>Audi R8</Text>
              <Text h5 style={styles.brand}>Audi</Text>
            </View>
            <Icon name="bookmark" type="font-awesome"/>
          </View>
          <ScrollView horizontal={true} style={styles.pricePicker}>
            <View style={styles.price}>
                <Text h5 style={styles.priceText}>6</Text>
                <Text h5 style={styles.priceText}>Meses</Text>
            </View>
            <View style={styles.price}>
                <Text h5 style={styles.priceText}>6</Text>
                <Text h5 style={styles.priceText}>Meses</Text>
            </View>
            <View style={styles.price}>
                <Text h5 style={styles.priceText}>6</Text>
                <Text h5 style={styles.priceText}>Meses</Text>
            </View>
            <View style={styles.price}>
                <Text h5 style={styles.priceText}>6</Text>
                <Text h5 style={styles.priceText}>Meses</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
