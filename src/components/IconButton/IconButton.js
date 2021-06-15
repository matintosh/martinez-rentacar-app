import React from 'react';
import {Icon, Button} from 'react-native-elements';
import {constants} from '../../styles/base';

export default function IconButton({
  style = {},
  iconStyle = {},
  name = 'heartbeat',
  type = 'font-awesome',
  color = constants.colors.white,
  onPress = () => {
    console.log('Not implemented');
  },
}) {
  return (
    <Button
      onPress={onPress}
      buttonStyle={style}
      icon={
        <Icon name={name} color={color} type={type} iconStyle={iconStyle} />
      }></Button>
  );
}
