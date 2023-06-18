import React from 'react';
import { ScrollView } from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({ Todos, onRemove, onToggle, selectedWeekly }) => {
  return (
    <ScrollView>
      {Todos.map((Todo) => (
        <TodoListItem
          key={Todo.id}
          {...Todo}
          onRemove={onRemove}
          onToggle={onToggle}
          selectedWeekly={selectedWeekly}
        />
      ))}
    </ScrollView>
  );
};

export default TodoList;
