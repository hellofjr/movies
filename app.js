/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Home from './views/home';
import Hello from './views/hello';
import Login from './views/login';
import MovieDetails from './views/movieDetails';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Hello: Hello,
    MovieDetails: MovieDetails
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}




