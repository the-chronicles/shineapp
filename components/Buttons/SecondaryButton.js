import { Pressable, StyleSheet, Text, View } from "react-native";

function SecondaryButton({ children }) {
  return (
    <Pressable>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: "#f2f2f2",
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
  },
});
