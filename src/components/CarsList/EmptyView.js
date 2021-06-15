import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import styles from './styles';

export default function EmptyView({message = 'No hay autos disponibles', refresh = () => console.log("onPress is not handled")}) {
  return (
    <View style={styles.emptyView}>
      <Text style={styles.emptyViewText}>{message}</Text>


      <Button title="Recargar" buttonStyle={styles.refreshButton} onPress={refresh} />
    </View>
  );
}
