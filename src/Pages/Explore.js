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
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Chip from "@mui/material/Chip";

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
      console.log("No such document!");
    }
  };

  const getOtherUsers = async () => {
    const list = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if (doc.id !== user) {
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
    console.log("working");
    const currentUserChatsRef = collection(db, "users", user, "chats");
    const chatQuery = query(
      currentUserChatsRef,
      where("userId", "==", targetUser.uid)
    );
    const querySnapshot = await getDocs(chatQuery);

    if (querySnapshot.empty) {
      console.log("Chat does not exist");
      const newChat = {
        userId: targetUser.uid,
        otherUsername: targetUser.username,
        messages: [],
      };

      await addDoc(currentUserChatsRef, newChat);
      alert("Go to messages tab to start chatting!");
    } else {
      console.log("Chat already exists");
      alert("You are already connected with this user!");
    }
  };
  const renderUserCard = (user, buttonText, isInterests) => {
    const renderChips = (items) =>
      items.map((item, index) => (
        <Chip
          label={item}
          key={index}
          variant="outlined"
          size="small"
          sx={{ margin: 0.5 }}
        />
      ));

    return (
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar>
              <PersonIcon />
            </Avatar>
            <Typography gutterBottom variant="h5" component="div">
              {user.username}
            </Typography>
          </Box>
          {isInterests ? (
            <>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Interests:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {renderChips(user.interests)}
              </Box>
            </>
          ) : (
            <>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Known Languages:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {renderChips(user.languages)}
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, mb: 1 }}
              >
                Wants to Learn:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {renderChips(user.wantedLanguages)}
              </Box>
            </>
          )}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={handleConnect(user)}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    );
  };
  return (
    <LayoutWithSidebar>
      <Container>
        <Typography variant="h4" component="h2" sx={{ my: 4 }}>
          Explore people to connect and chat with!
        </Typography>

        <Typography variant="h5" gutterBottom>
          Users with common interests
        </Typography>
        <Grid container>
          {userWithCommonInterests.length === 0 ? (
            <Typography>No users with common interests found.</Typography>
          ) : (
            userWithCommonInterests.map((user) => (
              <Grid item key={user.uid} xs={12} sm={6} md={4}>
                {renderUserCard(user, "Connect", true)}
              </Grid>
            ))
          )}
        </Grid>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Users to exchange languages with
        </Typography>
        <Grid container>
          {userToExchangeLanguages.length === 0 ? (
            <Typography>No users to exchange languages with found.</Typography>
          ) : (
            userToExchangeLanguages.map((user) => (
              <Grid item key={user.uid} xs={12} sm={6} md={4}>
                {renderUserCard(user, "Connect", false)}
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </LayoutWithSidebar>
  );
};

export default Explore;
