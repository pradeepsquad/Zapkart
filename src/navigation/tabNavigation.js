import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CartScreen,
  CategoryScreen,
  HomeScreen,
  PrescriptionScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="Prescription"
        component={PrescriptionScreen}
        options={{headerShown: true}}
      />
    </Tab.Navigator>
  );
}
