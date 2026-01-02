/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { store } from './android/app/src/main/redux/store';
import RootNavigator from './android/app/src/main/navigation/RootNavigator';
import { restoreState } from './android/app/src/main/redux/moviesSlice';

function Bootstrap() {
  const dispatch = useDispatch();

  useEffect(() => {
    const restore = async () => {
      const saved = await AsyncStorage.getItem('MOVIES_STATE');
      if (saved) {
        dispatch(restoreState(JSON.parse(saved)));
      }
    };

    restore();

    const sub = AppState.addEventListener('change', async state => {
      if (state === 'background') {
        await AsyncStorage.setItem(
          'MOVIES_STATE',
          JSON.stringify(store.getState().movies),
        );
      }
    });

    return () => sub.remove();
  }, []);

  return <RootNavigator />;
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Bootstrap />
      </NavigationContainer>
    </Provider>
  );
}
