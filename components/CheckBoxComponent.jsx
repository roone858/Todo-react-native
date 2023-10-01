import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../redux/slice/todo-slice";
// install native-base using yarn add native-base or npm install native-base

const CheckBoxComponent = ({ item }) => {
  const [CheckBoxValue, setCheckBoxValue] = useState(item.isComplete);
  // const todos = useSelector((state) => state.todos.data);

  const dispatch = useDispatch();

  return (
    <BouncyCheckbox
      size={25}
      fillColor="black"
      unfillColor="#FFFFFF"
      isChecked={CheckBoxValue}
      iconStyle={{ borderColor: "black" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={() => {
        setCheckBoxValue(!CheckBoxValue);
        dispatch(completeTodo({ id: item.id, value: !CheckBoxValue }));
      }}
    />
  );
};

export default CheckBoxComponent;
