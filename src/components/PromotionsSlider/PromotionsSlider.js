import React from 'react';
import {View} from 'react-native';
import {Promotions} from '..';
import Slider from '../Slider';

import styles from './styles';

const renderPromotions = () => {
  return <Promotions.SaleOnFirstBooking />;
};

const promotions = [
  {title: 'Reserva ahora', subtitle: 'Sin deposito', image: null},
  {title: 'Reserva ahora', subtitle: 'Sin deposito', image: null},
  {title: 'Reserva ahora', subtitle: 'Sin deposito', image: null},
  {title: 'Reserva ahora', subtitle: 'Sin deposito', image: null},
  {title: 'Reserva ahora', subtitle: 'Sin deposito', image: null},
];

export default function PromotionsSlider() {
  return (
    <View style={styles.container}>
      <Slider renderItem={renderPromotions} entries={promotions} />
    </View>
  );
}
