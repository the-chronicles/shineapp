import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import GettingStarted from "./screens/GettingStarted";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <GettingStarted />
      {/* <Login /> */}
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
