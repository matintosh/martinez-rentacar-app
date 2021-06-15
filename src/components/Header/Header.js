import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {IconButton} from '..';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      name="angle-left"
      type="font-awesome"
      onPress={() => navigation.goBack()}
    />
  );
};

const LogoutButton = () => {
  const navigation = useNavigation();
  return (
    <IconButton
      name="sign-out"
      type="font-awesome"
      iconStyle={{paddingLeft: 2}}
      onPress={() => navigation.navigate('home2')}
    />
  );
};

export default function Header({
  Left = BackButton,
  Right = LogoutButton,
  title = null,
}) {
  return (
    <View style={styles.container}>
      {Left && <Left />}
      {title && (
        <Text h5 style={styles.title}>
          {title}
        </Text>
      )}
      {Right && <Right />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingVertical: 12
  },
  title: {
    fontWeight: 'bold',
  },
});
