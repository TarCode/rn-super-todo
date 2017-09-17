import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { RkButton, RkTextInput, RkText } from 'react-native-ui-kitten';



class supertodo extends Component {
    static navigationOptions = {
        title: 'SuperTodo',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: "#1B5E20"
        }
    };
    constructor(props) {
        super(props)
        this.state = {
            todo: ""
        }
    }

    render() {
        const { todos, onTodoClick, addTodo } = this.props
        return (
            <View style={styles.container}>
                <RkTextInput value={this.state.todo} onChangeText={value => {
                    this.setState({ todo: value })
                }} label='Name' />
                {
                    todos && todos.length > 0 ?
                    todos.map((todo, index) => (
                        <RkText onPress={() => {
                                onTodoClick(todo.id)
                        }} style={{
                                textDecorationLine: todo.completed ? 'line-through' : null
                        }} key={index}>{todo.text}</RkText>
                    )) :
                    <RkText>No Items Yet</RkText>
                }
                <RkButton onPress={() => {
                    addTodo(this.state.todo)
                    this.setState({ todo: "" })
                }}>Add</RkButton>
            </View>

        );
    }
}

import { connect } from 'react-redux'
import { toggleTodo, addTodo } from '../actions'

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
    console.log("STATE", state);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        },
        addTodo: todo => {
            dispatch(addTodo(todo))
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