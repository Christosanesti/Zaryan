import { defaultStyles } from "@/constants/Styles";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+971");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const onSignUp = async () => {};
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's Get Started!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your number below to sign up
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="CC"
            placeholderTextColor={Colors.gray}
            style={styles.input}
            keyboardType="numeric"
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Cell Number"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          ></TextInput>
        </View>
        <Link href={"/login"} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>Already have an account?</Text>
          </TouchableOpacity>
        </Link>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          onPress={onSignUp}
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
        >
          <Text style={defaultStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 15,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
export default Page;
