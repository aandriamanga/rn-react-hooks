import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 3,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
