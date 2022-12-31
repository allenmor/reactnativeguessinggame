import { StyleSheet, View, TextInput, Alert } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

export default function StartGameScreen({pickedNumberHandler}) {
  const [enteredNumber, setEnteredNumber] = useState("");


  function numberInputHandler(e) {
    setEnteredNumber(e);
  }

  function resetInputHandler(){
      setEnteredNumber('')
  }


  function confirmInputHandler() {
    const chosenNumber = +enteredNumber;
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
          "invalid number", 
          "number between 1- 99",
          [{text: 'ok', style: 'destructive', onPress: resetInputHandler}]
          );
    } else {
        pickedNumberHandler(chosenNumber)
    }

  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize="none"
        keyboardType="number-pad"
        maxLength={2}
        style={styles.numberInput}
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton confirmPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton confirmPress={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
