import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import TertiaryButton from "../components/Buttons/TertiaryButton";

function Login() {
  return (
    <View style={styles.loginContainer}>
      <View>
        <Text style={styles.headerText}>Welcome back</Text>
        <Text style={styles.subText}>
          Glad to see you back, please login into you account to continue
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTextContainer}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.inputTextContainer}
          placeholder="Password"
          keyboardType="visible-password"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <Text style={styles.signText}>Or sign in with</Text>
      <View>
        <View>
          <SecondaryButton>Sign in with Google</SecondaryButton>
        </View>
        <View>
          <PrimaryButton>Sign in with Apple</PrimaryButton>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TertiaryButton>Continue</TertiaryButton>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    // backgroundColor: "#000000",
  },
  headerText: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.4,
    marginBottom: 5,
  },
  subText: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "500",
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 20,
    gap: 20,
  },
  inputTextContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#F2F2F2",
    borderRadius: 15,
    color: "red",
  },
  signText: {
    color: "#808080",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
