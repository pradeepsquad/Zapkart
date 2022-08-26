import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './tabNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true, headerTitle: ''}}>
      <Drawer.Screen name="Main Menu" component={BottomTab} />
    </Drawer.Navigator>
  );
}
