import { Ionicons } from "@expo/vector-icons";
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

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+971");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone ) {

  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome Back!</Text>
        <Text style={defaultStyles.descriptionText}>Enter phone number</Text>
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
        <TouchableOpacity
          onPress={() => onSignIn(SignInType.Phone)}
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
        >
          <Text style={defaultStyles.buttonText}>Proceed</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
          <Text style={{ color: Colors.gray, fontSize: 16 }}>OR</Text>

          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
        </View>

        <TouchableOpacity
        onPress={() => onSignIn(SignInType.Email)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: "row",
              marginTop: 20,
              gap: 10,
              backgroundColor: "#fff",
            },
          ]}
        >
          <Ionicons name="mail" size={24} color={"black"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with E-mail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => onSignIn(SignInType.Google)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: "row",
              marginTop: 20,
              gap: 10,
              backgroundColor: "#fff",
            },
          ]}
        >
          <Ionicons name="logo-google" size={24} color={"black"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with E-mail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => onSignIn(SignInType.Apple)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: "row",
              marginTop: 20,
              gap: 10,
              backgroundColor: "#fff",
            },
          ]}
        >
          <Ionicons name="logo-apple" size={24} color={"black"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with E-mail
          </Text>
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
