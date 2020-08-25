import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text,  Image, TouchableOpacity } from 'react-native';

import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import Feed from './screens/feed/Feed';

import { navigationRef } from './RootNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import { LOCAL_AUTH_ID, USER } from './actions/types';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={({ navigation, route }) => ({
              title: 'Login',
          })}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Register' }}
        />

        <Stack.Screen 
          name="Feed" 
          component={Feed}
          options={() => ({
            title: '',
            headerTitle: () => (
              <Image style={{width:100,height:30,marginTop:5}} source={require('./image/logo.png')}/>

            ),
            headerRight: () => (
              <TouchableOpacity
              style={{
                  marginRight: 10
              }}
              >
              <Image style={{width:30,height:30}} source={require('./image/share.png')}/>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
              style={{
                  marginLeft: 10
              }}
              >
              <Image style={{width:30,height:30}} source={require('./image/camera.png')}/>
              </TouchableOpacity>
            ),
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;