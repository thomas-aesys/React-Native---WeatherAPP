import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import SavedCityScreen from './Screens/SavedCityScreen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ciao: ''}}
          options={{
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarIcon: () => {
              return <Icon name="home" size={25} color={'black'} />;
            },
          }}
        />
        <Tab.Screen
          name="Add City"
          component={SavedCityScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return <Icon name="plus" size={25} color={'black'} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
