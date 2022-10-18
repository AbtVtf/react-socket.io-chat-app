import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import io from "socket.io-client";

import { useEffect, useState } from "react";
import React from "react";

export default function Chat({ roomCode, socket, messages, setMessages }) {
  const [message, setMessage] = useState("Useless Text");

  const onSubmitHandler = async () => {
    await socket.emit("message", { message, room: roomCode });
    setMessages((messages) => [...messages, message]);
    setMessage("");
  };
  useEffect(() => {
    console.log(socket.id, messages);
  }, [messages]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMessage(text)}
        value={message}
      />
      <Button title="send" onPress={onSubmitHandler}></Button>
      <View>
        {messages.map((item, index) => {
          return (
            <Text style={styles.text} key={index}>
              {item}
            </Text>
          );
        })}
      </View>
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
  input: {
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    color: "black",
  },
});
