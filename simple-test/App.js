import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import io from "socket.io-client";
// import moment from "moment";
import { useEffect, useState } from "react";
import React from "react";
import QrScanner from "./src/components/QrScanner";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./src/store/reducers";
import Chat from "./src/components/Chat";
import Header from "./src/components/Header";

const store = configureStore({
  reducer: rootReducer,
});

const socket = io.connect("http://192.168.0.193:3000");

export default function App() {
  const [roomCode, setRoomCode] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [scan, setScan] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(socket.id, data);
      setMessages((messages) => [...messages, data]);
    });
  }, [socket]);

  const handleJoinRoom = async (code) => {
    setShowChat(true);
    setRoomCode(code);
    await socket.emit("join_room", code);
  };

  return (
    <Provider store={store}>
      <Header setScan={setScan} />
      <View style={styles.container}>
        {showChat && (
          <Chat
            roomCode={roomCode}
            socket={socket}
            messages={messages}
            setMessages={setMessages}
          />
        )}
        {scan && (
          <QrScanner
            setRoomCode={setRoomCode}
            setScan={setScan}
            handleJoinRoom={handleJoinRoom}
            setShowChat={setShowChat}
          />
        )}
      </View>
    </Provider>
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
});
