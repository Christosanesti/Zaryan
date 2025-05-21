import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import {
  isClerkAPIResponseError,
  useSignIn,
  useSignUp,
} from "@clerk/clerk-expo";
import { defaultStyles } from "@/constants/Styles";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Colors } from "react-native/Libraries/NewAppScreen";
const CELL_COUNT = 6;

const Page = () => {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();
  const [code, setCode] = useState("");
  const { signIn } = useSignIn();
  const { signUp, setActive } = useSignUp();

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: phone,
    setValue: setCode,
  });

  useEffect(() => {
    if (code.length === 6) {
      console.log("code", code);
      if (signin === "true") {
        verifySignIn();
      } else {
        verifyCode();
      }
    }
  }, [code]);

  const verifyCode = async () => {
    try {
      await signUp!.attemptPhoneNumberVerification({
        code,
      });
      await setActive!({ session: signUp!.createdSessionId });
    } catch (error) {
      console.log("error", JSON.stringify(error, null, 2));
      if (isClerkAPIResponseError(error)) {
        Alert.alert("Error: ", error.errors[0].message);
      }
    }
  };

  const verifySignIn = async () => {
    try {
      await signIn!.attemptFirstFactor({
        strategy: "phone_code",
        code,
      });
      await setActive!({ session: signIn!.createdSessionId });
    } catch (error) {
      console.log("error", JSON.stringify(error, null, 2));
      if (isClerkAPIResponseError(error)) {
        Alert.alert("Error: ", error.errors[0].message);
      }
    }
  };
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Verification Code</Text>
      <Text style={defaultStyles.header}>Code has been sent to {phone}</Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Fragment key={index}>
            <View
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
            {index === 2 ?
              <view key={`separator-${index}`} style={styles.separator} />
            : null}
          </Fragment>
        )}
      />

      <Link href={"/login"} replace asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.buttonText}>Already have an account?</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 12,
  },
  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
  },

  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: Colors.gray,
    alignSelf: "center",
  },
});

export default Page;
