import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';

export default function App(){

    const [todos, setTodo] = useState([
        {text: 'buy coffee', key: '1'},
        {text: 'create an app', key: '2'},
        {text: 'play on the switch', key: '3'},
    ]);

    const pressHanlder = (key) => {
        setTodo( (prevTodos) => {
            return prevTodos.filter( (todo) => todo.key != key);
        });
    }

    return (
        <View style={style.container}>
            <Header />
            <View style={style.content}>
                {/* To do Form */}
                <FlatList 
                    data= {todos}
                    renderItem={ ({item}) => (
                        <TodoItem item={item} pressHandler={pressHanlder}/>
                    )}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        padding: 40,
    },
    list: {

    }
});