/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (newGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: newGoal},
    ]);
    setIsAddMode(false)
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput isVisible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={removeGoalHandler} id={itemData.item.id} title={itemData.item.value}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  }
});

export default App;
