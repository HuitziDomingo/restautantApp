import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NewOrder, Menu, DetailPlate, FormPlate, OrderSummary, ProgressRequested } from './views'
import { StatusBar } from 'react-native';
import FirebaseState from './context/firebase/firebaseState' //Importar state de contexto

const Stack = createStackNavigator()

export default () => {

  //Logica del inicio


  return (
    <>
      <FirebaseState>
        <NavigationContainer>
          <StatusBar backgroundColor="#000" barStyle="light-content" />
          <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#000' }, headerTitleStyle: { fontWeight: 'bold', color: '#fff' } }}>
            <Stack.Screen name="NuvaOrden" component={NewOrder} options={{ title: "Nueva Orden" }} />
            <Stack.Screen name="Menu" component={Menu} options={{ title: "Menu" }} />
            <Stack.Screen name="DetallePlatillo" component={DetailPlate} options={{ title: "Detalle Platillo" }} />
            <Stack.Screen name="OrdenarPlatillo" component={FormPlate} options={{ title: "Ordenar Platillo" }} />
            <Stack.Screen name="ResumenPedido" component={OrderSummary} options={{ title: "Resumen PEdido" }} />
            <Stack.Screen name="ProgresoPedido" component={ProgressRequested} options={{ title: "Progreso de Pedido" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FirebaseState>
    </>
  )
}