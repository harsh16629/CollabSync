# CollabSync

A real-time collaborative text editor built with React, WebSockets (Node.js), and Firebase Firestore. This project allows multiple users to edit text simultaneously, with real-time updates using WebSockets and persistent storage in Firestore.

## 🚀 Features
- ✅ Real-time collaboration – Users can edit text simultaneously.
- ✅ WebSockets for instant updates – Powered by a Node.js WebSocket server.
- ✅ Firebase Firestore for persistence – Saves documents even after a page refresh.
- ✅ React frontend – A clean and interactive user interface.

## ⚡ Installation & Setup
1.  Clone the Repository
  ```sh
    git clone https://github.com/yourusername/realtime-collab-tool.git
    cd realtime-collab-tool
  ```
2. Backend Setup (Node.js WebSocket Server)
   ```sh
    cd backend
    npm install
    npm run dev   # Starts WebSocket server on port 4000
   ```
3. Frontend Setup (React + Firebase)
   ```sh
    cd ../frontend
    npm install
    npm start   # Starts React app on port 3000
   ```
## 🔥 Usage
1. Open the app in multiple browser tabs.
2. Start typing in the text area.
3. Watch changes update in real-time across all connected clients.
4. Click Save to store the document in Firebase Firestore.

## ⚙ Configuration
### Backend (WebSocket Server)
- Located in ```backend/server.js```
- Runs on port 4000
- Uses WebSockets for real-time communication
### Frontend (React + Firebase)
- Located in ```frontend/src/```
- Uses Firebase Firestore for document storage
- Requires Firebase project configuration in firebase.js
### Edit firebase.js with your Firebase project credentials:
```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```
## 👥 Contributing
- Fork the repository
- Create a new branch: git checkout -b feature-branch
- Commit your changes: git commit -m "Add new feature"
- Push to the branch: git push origin feature-branch
- Open a Pull Request 🚀

## 📜 License
This project is licensed under the MIT [License](LICENSE).
