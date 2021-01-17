import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

const GoalItem = ({ id, text, onDelete }) => {
  return (
    <TouchableNativeFeedback onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
