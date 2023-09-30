import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (data) => {
  try {
    await AsyncStorage.setItem("todos", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("todos");
    if (value !== null) {
      return await JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
};
