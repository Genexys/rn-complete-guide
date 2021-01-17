import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";

const GoalInput = ({ addGoal, openModal, closeModal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (value) => {
    setEnteredGoal(value);
  };

  const addGoalHandler = () => {
    addGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={openModal} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <TouchableOpacity
          style={styles.buttonCancel}
          activeOpacity={0.8}
          onPress={closeModal}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={addGoalHandler}
        >
          <Text>Add Goal</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 250,
    marginBottom: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    marginBottom: 10,
    backgroundColor: "#63ccff",
  },

  buttonCancel: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    marginBottom: 10,
    backgroundColor: "#ff5f52",
  },
});

export default GoalInput;
