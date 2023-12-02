import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  return (
    <Pressable>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#000000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 15,
    // margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
