import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
// install native-base using yarn add native-base or npm install native-base

const CheckBoxComponent = ({ item, completeTodo }) => {
  const [CheckBoxValue, setCheckBoxValue] = useState(item.isComplete);

  return (
    <BouncyCheckbox
      size={25}
      fillColor="black"
      unfillColor="#FFFFFF"
      isChecked={CheckBoxValue}
      iconStyle={{ borderColor: "black" }}
      innerIconStyle={{ borderWidth: 2 }}
    
      onPress={() => {
        completeTodo(item.id, !CheckBoxValue);
        setCheckBoxValue(!CheckBoxValue);
      }}
    />
  );
};

export default CheckBoxComponent;
