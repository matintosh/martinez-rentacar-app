import React from 'react';
import {ActivityIndicator, View, TouchableOpacity} from 'react-native';
import {Image, Text, Badge, Button} from 'react-native-elements';

import {useNavigation} from '@react-navigation/core';

import styles from './styles';

export default function CarCard({car}) {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('car-detail');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Badge
        value={'3 Meses'}
        textStyle={styles.badgeTextStyle}
        badgeStyle={styles.badgeStyle}
      />
      {!!car.images.length && (
        <View style={styles.imageContainer}>
          <Image
            source={{uri: car.images[0].url}}
            style={styles.image}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      )}
      <Text h5 style={styles.title}>
        {car.brand} {car.model}
      </Text>
      <Text h4 style={styles.price}>
        USD 864
      </Text>
      <Text style={styles.subPrice}>por mes</Text>
    </TouchableOpacity>
  );
}
