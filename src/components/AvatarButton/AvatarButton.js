import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';

export default function AvatarButton({ size="medium" }) {
  const navigation = useNavigation();
  return (
    <Avatar
      onPress={() => navigation.navigate("profile")}
      rounded
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIo8rq6p_VE-r3ifLF3hFx0Ykg-FJpfOOAw&usqp=CAU',
      }}
      size={size}
    />
  );
}
