import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  ListView,
  Alert,
  TouchableHighlight,
  Image,
  RefreshControl
} from 'react-native';



export default class Hello extends React.Component {
  static navigationOptions = {
    title: 'Hello',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button onPress={() => this.props.navigation.goBack()} title="返回上个页面"></Button>
      </View>
    );
  }
}