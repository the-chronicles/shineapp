import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingTop: 60,
    margin: 24,
    // paddingHorizontal: 16,
  },
});
