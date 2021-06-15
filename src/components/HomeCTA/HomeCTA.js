import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {IconButton} from '..';
import {constants} from '../../styles/base';
import styles from './styles';

export default function HomeCTA() {
  return (
    <View style={styles.ctaContainer}>
      <View style={styles.cta}>
        <View style={styles.ctaWrapper}>
          <Text h4 style={styles.ctaTitle}>
            52
          </Text>
          <Text h5 style={styles.ctaSubtitle}>
            Autos disponibles ahora
          </Text>
        </View>
        <IconButton
          name={'caret-right'}
          type={'font-awesome'}
          style={styles.ctaIconContainer}
          iconStyle={styles.ctaIcon}
          color={constants.colors.primary}
        />
      </View>
    </View>
  );
}
