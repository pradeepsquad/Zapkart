import React from 'react';
import {View, Text} from 'react-native';
// import Styles from './style';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;
