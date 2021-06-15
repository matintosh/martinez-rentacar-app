import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Image, Text, Badge, Button} from 'react-native-elements';
import styles from './styles';

export default function CarRow({car}) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: car.images[0]?.url}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View>
        <Badge
          value={'3 Meses'}
          textStyle={styles.badgeTextStyle}
          badgeStyle={styles.badgeStyle}
        />
        <Text h5 style={styles.title} numberOfLines={1}>
          {car.brand} {car.model}
        </Text>
        <Text h4 style={styles.price}>
          USD 864
        </Text>
        <Text style={styles.subPrice}>por mes</Text>
      </View>
    </View>
  );
}
