import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    fontWeight: "bold",
    margin: 40,
    color: "#ddd",
  },
  container: {
    flex: 1,
    justifyContent: "start",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  switch: {
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#111",
    width: "80%",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  trackColor: { false: "#767577", true: "#81b0ff" },
});
