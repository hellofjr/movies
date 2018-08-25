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

export default class MovieDetails extends React.Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: '影片详情',
    };

    render(){
        return(
            <View></View>
        );
    }

}