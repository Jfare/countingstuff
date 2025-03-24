import { useState } from "react";
import { View, TextInput, Text } from "react-native";

import { CountableButton } from "./CountableButton";
import { CommonStyles } from "../styles/CommonStyles";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  return (
    <View style={CommonStyles.row}>
      <TextInput
        placeholder="Enter name"
        onChangeText={setName}
        value={name}
      />
      <CountableButton
        label="Add"
        disabled={!name.trim()} // Inaktivera knappen om fältet är tomt
        submit={() => {
          addNewCountable(name);
          setName(""); // Rensa input efter att ha lagt till
        }}
      />
    </View>
  );
};
 