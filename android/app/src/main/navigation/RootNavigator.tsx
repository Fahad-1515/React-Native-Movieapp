import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import MovieDetailScreen from '../screens/MovieDetailScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}
