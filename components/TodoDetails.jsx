import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../StyleSheet";

const TodoDetails = ({}) => {
  const item = useRoute().params;
  const navigation = useNavigation();
  return (
    <>
      <View style={{ ...styles.container }}>
        <Text style={{ margin: 20, fontSize: 40 }}>Title : {item.title}</Text>
        <Text>Description : {item.description}</Text>
      </View>
      <View style={{ ...styles.container }}>
        <Pressable
          style={{ ...styles.button }}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back </Text>
        </Pressable>
      </View>
    </>
  );
};

export default TodoDetails;
