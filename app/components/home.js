import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { RkButton, RkCard } from 'react-native-ui-kitten';



export default class supertodo extends Component {
    static navigationOptions = {
        title: 'SuperTodo',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to SuperTodo</Text>
                <Text style={styles.instructions}> Built with React Native!</Text>
                <RkButton>Enter</RkButton>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});