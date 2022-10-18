import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Header({ setScan }) {
  return (
    <View style={styles.containerHeader}>
      {/* <Text style={styles.titleHeader}>CDV</Text> */}
      <Text style={styles.titleHeader}>CDV</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={"#d64933"}
          style={styles.button}
          title="Add a Room"
          onPress={() => setScan(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    height: "12%",
    backgroundColor: "#2b303a",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  buttonContainer: {
    marginTop: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: "#d64933",
  },
  titleHeader: {
    fontSize: 50,
    marginLeft: 20,
    fontWeight: "800",
    letterSpacing: 10,
    color: "#eee5e9",
  },
});
