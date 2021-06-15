import React from 'react';
import {View} from 'react-native';
import {Image, Text} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

const placeholderCar =
  'https://pngimg.com/uploads/mercedes/mercedes_PNG80122.png';

export default function SaleOnFirstBooking({
  title = 'Reserva ahora',
  subtitle = 'Sin deposito',
}) {
  return (
    <View>
      <Text h2 style={styles.title}>
        {title}
      </Text>
      <Text h4 style={styles.subtitle}>
        {subtitle}
      </Text>

      <Image
        source={{uri: placeholderCar}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
}
