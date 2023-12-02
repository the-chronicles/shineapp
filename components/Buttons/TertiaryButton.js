import { Pressable, StyleSheet, Text, View } from "react-native";

function TertiaryButton({ children }) {
  return (
    <Pressable>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default TertiaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 15,
    // marginTop: 20,
    // marginBottom: 20,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
  },
});
