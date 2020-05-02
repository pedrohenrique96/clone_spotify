import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import Main from '../pages/Main';

const Songs = createStackNavigator();

const Routes: React.FC = () => (
  <Songs.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Songs.Screen name="SignIn" component={SignIn} />
    <Songs.Screen name="Main" component={Main} />
  </Songs.Navigator>
);

export default Routes;
