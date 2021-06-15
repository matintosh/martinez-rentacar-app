import React, {useState, useContext} from 'react';
import {useEffect} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {Text} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {AppContext} from '../../context';
import {constants} from '../../styles/base';
import CarCard from '../CarCard';
import CarRow from '../CarRow';
import EmptyView from './EmptyView';
import styles from './styles';

// const cars = [
//   {
//     model: '207',
//     brand: 'Peugeot',
//     image:
//       'https://especiales.latercera.com/mtonline-peugeot/assets/images/207.png',
//   },
//   {
//     model: '207',
//     brand: 'Peugeot',
//     image:
//       'https://especiales.latercera.com/mtonline-peugeot/assets/images/207.png',
//   },
//   {
//     model: '207',
//     brand: 'Peugeot',
//     image:
//       'https://especiales.latercera.com/mtonline-peugeot/assets/images/207.png',
//   },
//   {
//     model: '207',
//     brand: 'Peugeot',
//     image:
//       'https://especiales.latercera.com/mtonline-peugeot/assets/images/207.png',
//   },
//   {
//     model: '207',
//     brand: 'Peugeot',
//     image:
//       'https://especiales.latercera.com/mtonline-peugeot/assets/images/207.png',
//   },
//   {
//     model: '207',
//     brand: 'Peugeot',
//     image:
//       'https://especiales.latercera.com/mtonline-peugeot/assets/images/207.png',
//   },
// ];

const renderCars = ({item: car}, row) => {
  return row ? <CarRow car={car} /> : <CarCard car={car} />;
};

export default function CarsList() {
  const {cars, fetchCars, loading} = useContext(AppContext);
  const [row, setRow] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.titleWrapper]}>
        <Text h4 style={styles.title}>
          Autos disponibles
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="reorder"
            type="material-icons"
            color={row ? constants.colors.primary : constants.colors.gray}
            onPress={() => setRow(!row)}
          />
        </View>
      </View>

      <FlatList
        style={styles.scroll}
        data={cars}
        renderItem={i => renderCars(i, row)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchCars} />
        }
        ListEmptyComponent={
          <EmptyView
            message="No hay autos disponibles en este momento."
            refresh={fetchCars}
          />
        }
      />
    </View>
  );
}
