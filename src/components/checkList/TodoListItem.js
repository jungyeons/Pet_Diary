import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CheckListItem = ({
  textValue,
  id,
  checked,
  onRemove,
  onToggle,
  selectedWeekly,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <View style={styles.todoText}>
          <TouchableOpacity onPress={onToggle(id, selectedWeekly)}>
            {checked ? (
              <MaterialCommunityIcons
                size={25}
                name="checkbox-marked-circle-outline"
              />
            ) : (
              <MaterialCommunityIcons
                size={25}
                name="checkbox-blank-circle-outline"
              />
            )}
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              checked ? styles.checkedText : styles.uncheckedText,
            ]}
          >
            {textValue}
          </Text>
        </View>
        <TouchableOpacity onPress={onRemove(id, selectedWeekly)}>
          <MaterialCommunityIcons
            style={styles.todoDelBtn}
            size={30}
            name="delete-outline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  todoCheckbox: {
    marginRight: 10,
  },
  todoText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkedText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
    marginLeft: 7,
  },
  uncheckedText: {
    color: '#29323c',
    marginLeft: 7,
  },
  todoDelBtn: {
    color: '#777',
    marginRight: 3,
  },
});

export default CheckListItem;
