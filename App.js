import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <Text>Welcome back</Text>
        <Text>
          Glad to see you back, please login into your account to continue
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Email Address"/>
        <TextInput style={styles.textInput} placeholder="Password"/>
        <Text>Or sign in with</Text>
      </View>
      <View>
        <Button title="Sign in with Google" />
        <Button title="Sign in with Apple" />
      </View>
      <View>
        <Button title="Continue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 84,
    paddingHorizontal: 24,
  },
  headerText: {

  },
  inputContainer: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 20,
    alignItems: 'center',
    gap: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#F2F2F2",
    width: "100%",
    padding: 14,
    borderRadius: 15,
  }
});
