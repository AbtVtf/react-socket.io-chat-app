import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
// import io from "socket.io-client";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [chat, setChat] = useState({ message: "", sid: "", time: "", rid: "" });
  const [messages, setMessages] = useState([]);
  // const socketRef = useRef();

  // useEffect(() => {
  //   socketRef.current = io("http://192.168.0.193:3000");

  //   socketRef.current.on("message", ({ sid, messages, time, rid }) => {
  //     setMessages([...messages, { messages, sid, time, rid }]);
  //   });

  //   return () => {
  //     socketRef.current.disconnect();
  //   };
  // }, [messages]);

  // onSubmitHandler = () => {
  //   const { message, sid, time, rid } = chat;
  //   socketRef.current.emit("message", { message, sid, time, rid });
  //   setChat({ message: "", sid: "", time: "", rid: "" });
  // };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
