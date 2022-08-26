import React from 'react';
import {View, Text, Button} from 'react-native';
// import Styles from './style';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          color: '#000',
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 15,
        }}>
        Login Screen
      </Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('DrawerNavigation')}
      />
    </View>
  );
};

export default LoginScreen;
