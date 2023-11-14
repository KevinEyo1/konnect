import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import LayoutWithSidebar from "../components/LayoutWithSidebar";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Chatroom = ({ currentChat, user }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const randomReplies = [
    "I'm good, how are you?",
    "My favorite color is blue",
    "I like to play tennis",
    "I'm from New York",
    "I like to eat pizza",
    "I'm 20 years old",
    "Oh really?",
    "That's cool!",
    "I agree!",
    "I disagree!",
    "Wanna hang out?",
    "I'm busy today",
    "I'm free tomorrow",
    "I'm busy tomorrow",
    "I'm free today",
    "How about it?",
    "What about it?",
    "YESSS",
    "NOOO",
    "Maybe",
    "That sounds interesting. Tell me more!",
    "I hadn't considered that. What do you think?",
    "What's your opinion on this?",
    "I'm not sure. Could you explain a bit more?",
    "Thanks for sharing that with me.",
    "That's a good point. I'll think about it.",
    "I'm here if you need to talk.",
    "That's quite a perspective. I'd like to understand more.",
    "I'm glad you brought that up.",
    "Let's explore that idea further.",
    "I see what you mean. What's the next step?",
    "That's quite thought-provoking.",
    "Interesting take on that. Have you considered...?",
    "Can you elaborate on that?",
  ];

  useEffect(() => {
    setMessages(currentChat.messages || []);
  }, [currentChat]);

  useEffect(() => {
    uploadChatMessages(currentChat.id, messages);
  }, [messages]);

  const uploadChatMessages = async (id, messages) => {
    const docRef = doc(db, "users", user, "chats", id);
    await updateDoc(docRef, { messages });
  };

  const sendMessage = async () => {
    if (message.trim() !== "") {
      const newMessages = [...messages, { sender: user, text: message }];
      setMessages(newMessages);
      await uploadChatMessages(currentChat.id, newMessages);
      setMessage("");
      setTimeout(() => {
        const reply =
          randomReplies[Math.floor(Math.random() * randomReplies.length)];
        setMessages((m) => [...m, { sender: "auto-reply", text: reply }]);
      }, 1000); // Simulate reply delay
    }
  };

  const messageAlign = (sender) => {
    return sender === user ? "flex-end" : "flex-start";
  };

  const messageBackgroundColor = (sender) => {
    return sender === user ? "#e0f7fa" : "#fff9c4"; // Change colors as needed
  };

  return (
    <LayoutWithSidebar>
      <AppBar position="static">
        <Toolbar>
          <Avatar sx={{ mr: 2 }}>{currentChat.otherUsername?.[0]}</Avatar>
          <Typography variant="h6">{currentChat.otherUsername}</Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
        }}
      >
        <Paper elevation={3} sx={{ width: "100%", maxWidth: "600px", p: 2 }}>
          <List sx={{ maxHeight: "400px", overflow: "auto" }}>
            {messages.map((msg, index) => (
              <ListItem
                key={index}
                sx={{ justifyContent: messageAlign(msg.sender) }}
              >
                <Chip
                  label={msg.text}
                  sx={{
                    backgroundColor: messageBackgroundColor(msg.sender),
                    maxWidth: "75%",
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", mt: 2 }}>
            <TextField
              fullWidth
              label="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={sendMessage}
              sx={{ ml: 1 }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </Box>
    </LayoutWithSidebar>
  );
};

export default Chatroom;
