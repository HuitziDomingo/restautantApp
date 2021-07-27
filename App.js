import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NewOrder, Menu, DetailPlate, FormPlate, OrderSummary, ProgressRequested } from './views'

const Stack = createStackNavigator()

export default () => {

  //Logica del inicio


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="NuvaOrden" component={NewOrder} options={{title: "Nueva Orden"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}