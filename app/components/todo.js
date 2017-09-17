import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';



class supertodo extends Component {
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

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(supertodo)

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