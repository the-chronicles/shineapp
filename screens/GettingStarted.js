import { StyleSheet, TextInput, View } from "react-native";
import Title from "../components/ui/Title";
import SubText from "../components/ui/SubText";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import TertiaryButton from "../components/Buttons/TertiaryButton";

function GettingStarted() {
  return (
    <View style={styles.loginContainer}>
      {/* <AntDesign name="arrowleft" size={24} color="black" /> */}
      <View>
        <Title>Welcome Back</Title>
        <SubText>
          Glad to see you back, please login into you account to continue
        </SubText>
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
          <SecondaryButton>
            Sign in with Google</SecondaryButton>
        </View>
        <View>
          <PrimaryButton>Sign in with Apple</PrimaryButton>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text>
          By tapping sign up with Apple, Google or Facebook, you agree to the
          Terms Of Service and Privacy Policy
        </Text>
        <TertiaryButton>Continue</TertiaryButton>
      </View>
    </View>
  );
}

export default GettingStarted;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    // paddingTop: 50,
    // paddingHorizontal: 16,
    // backgroundColor: "#1e085a",
    // backgroundColor: "#000000",
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
    color: "black",
  },
  signText: {
    color: "#808080",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
