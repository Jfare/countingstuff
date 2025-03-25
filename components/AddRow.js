import { useState } from "react";
import { View, TextInput, Text } from "react-native";

import { CountableButton } from "./CountableButton";
import { CommonStyles } from "../styles/CommonStyles";

export const AddRow = ({ addNewCountable, countables }) => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAdd = () => {
    if (!name.trim()) {
      setErrorMessage("You must enter a name.");
      return;
    }

    if (
      countables.some((item) => item.name.toLowerCase() === name.toLowerCase())
    ) {
      setErrorMessage("This name already exists.");
      return;
    }

    addNewCountable(name);
    setName("");
    setErrorMessage(""); // Nollställ felmeddelande
  };

  return (
    <View style={CommonStyles.row}>
      <TextInput
        style={CommonStyles.input}
        placeholder="Enter name"
        onChangeText={(text) => {
          setName(text);
          setErrorMessage(""); // Ta bort felmeddelande när man skriver
        }}
        value={name}
      />
      <View style={CommonStyles.buttonContainer}>
        <CountableButton
          label="Add"
          disabled={!name.trim()}
          submit={handleAdd}
        />
      </View>
      {errorMessage ? (
        <Text style={CommonStyles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};
