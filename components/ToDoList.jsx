import React from 'react';
import { ScrollView, Text } from 'react-native';

function ToDoList({ tasks }) {
return (
    <ScrollView>
    {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>
    ))}
    </ScrollView>
);
}
  
export default ToDoList;