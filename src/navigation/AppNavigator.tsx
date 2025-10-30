import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Asegúrate de tener @expo/vector-icons

// Importamos los Stacks que definiremos
import HomeStack from './HomeStack';
// Aún no los creamos, pero los dejamos listos:
// import PromotionsStack from './PromotionsStack'; 
// import MapStack from './MapStack';

const Tab = createBottomTabNavigator();

// Componente de ícono (como en tu AppNavigator.jsx)
const TabIcon = ({ focused, icon }: { focused: boolean, icon: string }) => (
  <View>
    <FontAwesome5 name={icon as any} size={24} color={focused ? '#007AFF' : '#8E8E93'} />
  </View>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="InicioStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabsText,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      }}
    >
      <Tab.Screen
        name="InicioStack"
        component={HomeStack} // Usamos un Stack, no la pantalla directa
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="home" />,
          title: 'Inicio',
        }}
      />
      {/* Estas son las pantallas que mencionaste después */}
      <Tab.Screen
        name="PromosStack"
        // component={PromotionsStack} // TODO: Crear este stack
        component={HomeStack} // Temporalmente usamos HomeStack
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="tags" />,
          title: 'Promos',
        }}
      />
      <Tab.Screen
        name="MapaStack"
        // component={MapStack} // TODO: Crear este stack
        component={HomeStack} // Temporalmente usamos HomeStack
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="map-marked-alt" />,
          title: 'Mapa',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    
  },
  tabsText: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default AppNavigator;