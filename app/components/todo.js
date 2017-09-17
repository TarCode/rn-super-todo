import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';



export default class supertodo extends Component {
    static navigationOptions = {
        title: 'SuperTodo',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: "#1B5E20"
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <RkTextInput label='Name' />

                <RkButton>Add</RkButton>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2E7D32',
    }
});