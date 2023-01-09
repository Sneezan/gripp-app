import * as React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from './screens/Welcome';
import { LogIn } from './screens/LogIn';
import { StartPage } from './screens/StartPage';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import { GamePage } from './screens/GamePage';
import { Register } from './screens/Register';
import { Splash } from './screens/Splash';

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
          borderBottomWidth: 0,
          height: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
     {/* <Stack.Screen name="Splash" component={Splash} options={{ title: 'My home' }}/>   */}

   <Stack.Screen name="Start" component={Welcome} options={{ title: '',  headerStyle: {backgroundColor: '#1d1d1d', borderBottomWidth: 0}}}/>  
    <Stack.Screen name="Log in" component={LogIn} options={{ title: '',  headerStyle: {backgroundColor: '#830808', borderBottomWidth: 0}}} /> 
    <Stack.Screen name="Register" component={Register} options={{ title: '' } } />    
    <Stack.Screen name="StartPage" component={StartPage} options={{ title: '', headerStyle: {backgroundColor: '#830808', borderBottomWidth: 0}}}/>     
    <Stack.Screen name="GamePage" component={GamePage} options={{ title: '' }}/> 
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;

