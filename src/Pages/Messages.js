import React, { useEffect } from "react";
import LayoutWithSidebar from "../components/LayoutWithSidebar";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Messages = (props) => {
  const navigate = useNavigate();
  const [chats, setChats] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const user = props.user;

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const list = [];
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "users", user, "chats"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      list.push(data);
    });
    setChats(list);
    setLoading(false);
  };

  const handleChatClick = (chat) => {
    props.setCurrentChat(chat);
    navigate("/chatroom");
  };

  const getLastMessage = (chat) => {
    if (chat.messages && chat.messages.length > 0) {
      return chat.messages[chat.messages.length - 1].text;
    }
    return "No messages yet";
  };

  return (
    <LayoutWithSidebar>
      <Paper style={{ maxHeight: 500, overflow: "auto" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <List>
            {chats.length === 0 && (
              <Typography variant="h6" align="center">
                Connect with people in the explore tab!
              </Typography>
            )}
            {chats.length !== 0 &&
              chats.map((chat) => (
                <ListItem
                  key={chat.id}
                  onClick={() => handleChatClick(chat)}
                  button
                >
                  <ListItemAvatar>
                    <Avatar>{chat.otherUsername[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1">
                        {chat.otherUsername}
                      </Typography>
                    }
                    secondary={
                      <Box
                        component="span"
                        sx={{
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {getLastMessage(chat)}
                      </Box>
                    }
                  />
                </ListItem>
              ))}
          </List>
        )}
      </Paper>
    </LayoutWithSidebar>
  );
};

export default Messages;
