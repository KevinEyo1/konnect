import React, { useEffect } from "react";
import LayoutWithSidebar from "../components/LayoutWithSidebar";
import { auth, db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
  addDoc,
} from "firebase/firestore";
import { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  Button,
  ListItemButton,
} from "@mui/material";

const Explore = (props) => {
  const user = props.user;
  const [userInfo, setUserInfo] = useState({});
  const [otherUsers, setOtherUsers] = useState([]);
  const [userWithCommonInterests, setUserWithCommonInterests] = useState([]);
  const [userToExchangeLanguages, setUserToExchangeLanguages] = useState([]);

  useEffect(() => {
    getCurrentUser().then(() => {
      getOtherUsers();
    });
  }, []);

  useEffect(() => {
    if (otherUsers.length > 0) {
      filterOtherUsers();
    }
  }, [otherUsers]);

  const getCurrentUser = async () => {
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserInfo(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const getOtherUsers = async () => {
    const list = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if (doc.id !== user) {
        // add doc id to data and push to list
        const data = doc.data();
        data.uid = doc.id;
        list.push(data);
      }
    });
    setOtherUsers(list);
  };

  const filterOtherUsers = () => {
    const interestList = [];
    const languageList = [];

    otherUsers.forEach((user) => {
      if (
        user.interests.some((interest) =>
          userInfo.interests?.includes(interest)
        )
      ) {
        interestList.push(user);
      }
      if (
        user.languages.some((language) =>
          userInfo.wantedLanguages?.includes(language)
        ) &&
        user.wantedLanguages.some((wantedLanguage) =>
          userInfo.languages?.includes(wantedLanguage)
        )
      ) {
        languageList.push(user);
      }
    });

    setUserWithCommonInterests(interestList);
    setUserToExchangeLanguages(languageList);
  };

  const handleConnect = (targetUser) => async () => {
    const currentUserChatsRef = collection(db, "users", user, "chats");
    const chatQuery = query(
      currentUserChatsRef,
      where("userId", "==", targetUser.uid)
    );
    const querySnapshot = await getDocs(chatQuery);

    if (querySnapshot.empty) {
      console.log("Chat does not exist");
      // Chat does not exist, create a new one
      const newChat = {
        userId: targetUser.uid,
        otherUsername: targetUser.username,
        messages: [],
        // any other chat details
      };

      // Add to current user's chats
      await addDoc(currentUserChatsRef, newChat);
      alert("Go to messages tab to start chatting!");

      // // Also add to target user's chats
      // const targetUserChatsRef = collection(db, "users", targetUser.uid, "chats");
      // await addDoc(targetUserChatsRef, {
      //   userId: user, // Assuming 'user' is the current user's uid
      //   username: userInfo.username, // Assuming this is the current user's username
      //   // any other details
      // });
    } else {
      console.log("Chat already exists");
      alert("You are already connected with this user!");
    }
  };

  return (
    <LayoutWithSidebar>
      <Container>
        <Typography variant="h4" component="h2">
          Explore
        </Typography>

        <Typography variant="h5" gutterBottom>
          Users with common interests
        </Typography>
        <List>
          {userWithCommonInterests.length !== 0 &&
            userWithCommonInterests.map((user) => (
              <ListItem key={user.uid}>
                <ListItemText
                  primary={user.username}
                  secondary={`Interests: ${user.interests.join(", ")}`}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleConnect(user)}
                >
                  Connect
                </Button>
              </ListItem>
            ))}
        </List>

        <Typography variant="h5" gutterBottom>
          Users to exchange languages with
        </Typography>
        <List>
          {userToExchangeLanguages.length !== 0 &&
            userToExchangeLanguages.map((user) => (
              <ListItem key={user.uid}>
                <ListItemText
                  primary={user.username}
                  secondary={`Known: ${user.languages.join(
                    ", "
                  )} | Wants to learn: ${user.wantedLanguages.join(", ")}`}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleConnect(user)}
                >
                  Connect
                </Button>
              </ListItem>
            ))}
        </List>
      </Container>
    </LayoutWithSidebar>
  );
};

export default Explore;
