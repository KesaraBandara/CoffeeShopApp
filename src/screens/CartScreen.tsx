/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store';

const CartScreen = () => {
  const cartList = useStore((state: any) => state.CartList);
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})