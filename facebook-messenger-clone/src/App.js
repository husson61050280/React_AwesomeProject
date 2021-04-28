import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  //Query data on firebase
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp" , "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //run code here...
    setUsername(prompt("Please enter your name"));
  }, []); //condition

  console.log(messages);

  //send Message To firebase
  const sendMessage = (event) => {
    event.preventDefault();

    //add message to firebase
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //ถ้าไม่มี ...message ข้อมูลที่ add เข้าไปใหม่จะทับของเดิม
    setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <br />
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=399&h=399"
        alt=""
        width="100px"
        height="100px"
      />
      <h1>Facebook - Messenger - Clone</h1>
      <h2>Welcome : {username}</h2>

      {/* input messages */}

      <form className="app__form">
        {/* material UI */}
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>

      {/* messages themselves */}

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
