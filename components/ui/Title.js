import { StyleSheet, Text, View } from "react-native";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  headerText: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.4,
    marginBottom: 5,
  },
});
