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

import loginService from '../service/loginService';


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
        }
    }

    static navigationOptions = {
        title: '登录',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userInput}>
                    <Text style={styles.text}>用户名</Text><TextInput style={styles.input} placeholder="请输入用户名" onChangeText={(text) => { this.setState({ userName: text }) }}></TextInput>
                </View>
                <View style={styles.userInput}>
                    <Text style={styles.text}>密码</Text><TextInput style={styles.input} placeholder="请输入密码" onChangeText={(text) => { this.setState({ password: text }) }}></TextInput>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} color='#f4511e' title="登录" onPress={() => this.login(this.props.navigation.navigate)}></Button>
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
    login(navigate) {
        if (this.state.userName && this.state.password) {
            //loginService.login(this.state.userName,this.state.password).then(res => {
                navigate('Home');
            //},rej => {
            //    Alert.alert('错误','获取资源失败!',null)
            //})
        } else {
            this.errorAlert();
        }
    }

    errorAlert(){
        Alert.alert('错误提示','请检查用户名与密码!',null)
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios'?200:0,
        flex: 1,
    },
    userInput: {
        marginTop: Platform.OS === 'ios'?20:0, //判断android还是ios
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        marginLeft: 20,
        color: '#f4511e'
    },
    input: {
        flex: 2,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 20
    },
    buttonContainer: {
        marginTop: Platform.OS === 'ios'?100:0,
        borderColor: 'blue',
        borderWidth: 2,
        width: 150,
        marginLeft: (Dimensions.get('window').width - 150)/2,
        justifyContent: 'center',
    },
    button: {
        flex: 1,
    }
})