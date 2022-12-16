import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './screens/Splash';
import { LogIn } from './screens/LogIn';
import { StartPage } from './screens/StartPage';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Splash}
        options={{ title: 'My home' }}
      />

<Stack.Screen
        name="Log in"
        component={LogIn}
        options={{ title: 'Log in' }}
      />

<Stack.Screen
        name="StartPage"
        component={StartPage}
        options={{ title: 'Log in' }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

