import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
// Aquí importarías otras pantallas, ej:
// import PromotionDetailScreen from '../screens/PromotionDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Ocultamos el header del Stack por ahora
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="PromotionDetail" component={PromotionDetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;