import React from 'react';

import { colors } from '../Components/Styles';
const {primary, tertiary} = colors;
// react navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from './../Screens/Login';
import Signup from './../Screens/Signup';
import Welcome from './../Screens/Welcome';
import AddItems from './../Screens/AddItems';
import EditYourRegisteredItem from './../Screens/EditYourRegisteredItem';
import RegisteredItem from './../Screens/RegisteredItem';
import SearchItem from './../Screens/SearchItem';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: 'transparent'
            },
            headerTintColor: tertiary,
            headerTransparent: true,
            headerTitle: '',
        }}
        initialRouteName="AddItem"
        >
        <Stack.Screen name="AddItems" component={AddItems} options={{headerShown: false}} />
        <Stack.Screen name="RegisteredItem" component={RegisteredItem} options={{headerShown: false}}  />
        <Stack.Screen name="SearchItem" component={SearchItem} options={{headerShown: false}}  />
        <Stack.Screen name="EditYourRegisteredItem" component={EditYourRegisteredItem} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}  />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default RootStack;