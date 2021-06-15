import React from 'react';
import {View} from 'react-native';
import {Text, Icon} from 'react-native-elements';
import {IconButton} from '..';
import { constants } from '../../styles/base';
import { styles } from './styles';

export default function RowButton({name, type, title, onPress = () => {}}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {name && (
          <IconButton
            name={name}
            type={type}
            style={styles.iconContainer}
            iconStyle={styles.icon}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Icon name="angle-right" type="font-awesome" color={constants.colors.primary}></Icon>
    </View>
  );
}
