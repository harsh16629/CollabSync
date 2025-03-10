import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { WebSocketService } from "./websocketService";

const App = () => {
  const [text, setText] = useState("");
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    WebSocketService.receiveMessage((data) => setText(data));

    const unsubscribe = onSnapshot(collection(db, "docs"), (snapshot) => {
      setDocs(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    WebSocketService.sendMessage(e.target.value);
  };

  const saveToFirestore = async () => {
    await addDoc(collection(db, "docs"), { content: text });
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} placeholder="Start typing..." />
      <button onClick={saveToFirestore}>Save</button>
      <h3>Saved Documents:</h3>
      <ul>
        {docs.map((doc, index) => (
          <li key={index}>{doc.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
