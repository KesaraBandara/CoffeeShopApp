/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
// import HomeScreen from './src/screens/HomeScreen'
// import FavoritesScreen from './src/screens/FavoritesScreen'
// import CartScreen from './src/screens/CartScreen'
import DetailsScreen from './src/screens/DetailsScreen';
// import OrderHistoryScreen from './src/screens/OrderHistoryScreen'
import PaymentScreen from './src/screens/PaymentScreen';
TabNavigator
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Favorites" component={FavoritesScreen} /> */}
        {/* <Stack.Screen name="Cart" component={CartScreen} /> */}
        <Stack.Screen
        name='Tab'
        component={TabNavigator}
        options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        {/* <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} /> */}
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
