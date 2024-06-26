import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

const ToDoList: React.FC = () => {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.taskContainer, styles.completedTask]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.taskContainer}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.taskContainer, styles.completedTask]}>
          <Text style={styles.taskText}>Walk dog</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  completedTask: {
    backgroundColor: '#d4edda',
  },
  taskText: {
    fontSize: 18,
  },
});

export default ToDoList;
