import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './screens/Splash';
import { LogIn } from './screens/LogIn';
import { StartPage } from './screens/StartPage';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import { GamePage } from './screens/GamePage';

const Stack = createNativeStackNavigator();

const reducer = combineReducers({
  user: user.reducer
});
const store = configureStore({reducer});
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
   <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2d2d2d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
    <Stack.Screen name="Home" component={Splash} options={{ title: 'My home' }}/>
    <Stack.Screen name="Log in" component={LogIn} options={{ title: '' }} />
    <Stack.Screen name="StartPage" component={StartPage} options={{ title: ' ' }}/>
    <Stack.Screen name="GamePage" component={GamePage} options={{ title: '' }}/>
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;

