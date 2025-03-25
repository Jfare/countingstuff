import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  input: {
    flex: 1,
  },
  textItem: {
    fontSize: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "lightblue",
    borderWidth: 3,
    borderRadius: 5,
    margin: 5,
    paddingEnd: 20,
    paddingStart: 20,
  },
  buttonContainer: {
    marginLeft: "auto",
  },
  errorText: {
    color: "red",
    marginTop: 5,
    position: "absolute",
    bottom: -20,
    left: 10,
  },
});
