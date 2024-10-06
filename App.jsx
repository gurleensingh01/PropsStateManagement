import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import ToDoList from './components/ToDoList';

function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      <View>
        <ToDoList tasks = {tasks} />
      </View>
    </SafeAreaView>
  );
}

export default App;
