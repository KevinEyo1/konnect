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
    console.log("----------------------------------");
    getCurrentUser().then(() => {
      getOtherUsers().then(() => {
        console.log("other users got", otherUsers);
        filterOtherUsers();
      });
    });
    console.log("user got", userInfo);
  }, [props.pageToggle]);

  const getCurrentUser = async () => {
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
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
        list.push(doc.data());
      }
    });
    setOtherUsers(list);
  };

  const filterOtherUsers = () => {
    const interestList = [];
    const languageList = [];

    otherUsers.forEach((user) => {
      if (
        user.interests.some((interest) => userInfo.interests.includes(interest))
      ) {
        interestList.push(user);
      }
      if (
        user.languages.some((language) =>
          userInfo.wantedLanguages.includes(language)
        ) &&
        user.wantedLanguages.some((wantedLanguage) =>
          userInfo.languages.includes(wantedLanguage)
        )
      ) {
        languageList.push(user);
      }
    });
    console.log("users with common interests:", interestList);
    console.log("users to exchange languages with:", languageList);
    setUserWithCommonInterests(interestList);
    setUserToExchangeLanguages(languageList);
  };

  return (
    <LayoutWithSidebar>
      <Container>
        <Typography variant="h4" component="h2">
          Explore Page
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
                <Button variant="contained" color="primary">
                  Connect
                </Button>
              </ListItem>
            ))}
        </List>

        <Divider variant="inset" component="li" />

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
                <Button variant="contained" color="primary">
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
