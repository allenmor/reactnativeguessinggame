import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/colors";

export default function PrimaryButton({ children, confirmPress }) {

  return (
    <View style={styles.buttonOuter}>
      <Pressable style={({pressed}) => pressed ? [styles.buttonInner, styles.pressed] :styles.buttonInner} onPress={confirmPress} android_ripple={{ color: Colors.primary600 }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuter: {
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
  },
  buttonInner: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
      opacity: 0.75
  }
});
