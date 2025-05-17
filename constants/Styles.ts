import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  pillButton: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textLink: {
    color: Colors.light.tint,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  pillButtonSmall: {
    backgroundColor: Colors.light.tint,
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextSmall: {
    fontSize: 12,
    color: Colors.light.background,
    margin: 12,
    marginBottom: 10,
  },
  block: {
    margin: 12,
    marginBottom: 10,
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.light.background,
  },
});
