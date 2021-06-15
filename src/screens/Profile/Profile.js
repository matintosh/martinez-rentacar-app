import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Button, Text, useTheme} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Header, AvatarButton, RowButton} from '../../components';

import styles from './styles';
import { constants } from '../../styles/base';

export default function Profile() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeAreaBottom}>
        <View style={styles.container}>
          <Header title="Profile" />
          <ScrollView>
            <View style={styles.header}>
              <AvatarButton size="xlarge" />
              <Text h4 style={styles.name}>
                Matias Martinez
              </Text>
              <Text h5>+ 598 95 485 057</Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.row}>
                <View style={styles.middleBanner}>
                  <Icon name="bookmark" color={constants.colors.primary} size={32} />
                  <View style={styles.bannerWrapper}>
                    <Text h5 style={styles.currentBooking}>
                      No tienes reservas
                    </Text>
                    <Text h5 style={styles.bookingsNumber}>
                      Has hecho 11 reservas
                    </Text>
                  </View>
                </View>

                <View style={styles.bookNow}>
                  <Text h5 style={styles.bookNowText}>
                    Reservar ahora
                  </Text>
                  <Icon name="long-arrow-right" color={constants.colors.white} size={16} />
                </View>
              </View>
              <RowButton title="Notificaciones" name="bell" />
              <RowButton title="Reservas" name="bookmark" />
              <RowButton title="Editar Perfil" name="pencil" />
              <RowButton title="Pagos" name="money" />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
