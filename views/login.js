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

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        }
    }

    static navigationOptions = {
        title: '登录',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <Text>用户名</Text><TextInput style={styles.input} placeholder="请输入用户名" onChangeText={(text) => { this.setState({ userName: text }) }}></TextInput>
                </View>
                <View style={styles.searchBar}>
                    <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" onChangeText={(text) => { this.setState({ password: text }) }}></TextInput>
                </View>
                <View style={styles.searchBar}>
                    <Button title="登录" onPress={() => { if (this.checkUserValid()) { this.props.navigation.navigate("Home") }; }}></Button>
                </View>

            </View>
        );
    }

    
    /**
     *
     * 检查用户名与密码是否合法
     * @returns
     * @memberof Login
     */
    checkUserValid() {
        if (this.state.userName && this.state.password) {
            return true;
        } else {
            return false;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        // marginTop: Platform.OS === 'ios'?20:0, //判断android还是ios
        height: 40,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10
    }
})