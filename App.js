import * as React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import { Welcome } from './screens/Welcome';
import { LogIn } from './screens/LogIn';
import { Register } from './screens/Register';
import { StartPage } from './screens/StartPage';
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
          backgroundColor: '#411a23',
          borderBottomWidth: 0,
          height: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
    <Stack.Screen name="Start" component={Welcome} options={{ title: ''}}/>  
    <Stack.Screen name="Log in" component={LogIn} options={{ title: '',  headerStyle: {backgroundColor: '#7b1930', borderBottomWidth: 0}}} />  
    <Stack.Screen name="Register" component={Register} options={{ title: '' , headerStyle: {backgroundColor: '#BE284C', borderBottomWidth: 0}}} />    
    <Stack.Screen name="StartPage" component={StartPage} options={{ title: '', headerStyle: {backgroundColor: '#BE284C', borderBottomWidth: 0}}}/>       
    <Stack.Screen name="GamePage" component={GamePage} options={{ title: '', headerStyle: {backgroundColor: '#BE284C', borderBottomWidth: 0}}}/> 
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;

