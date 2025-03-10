const ws = new WebSocket("ws://localhost:4000");

export const WebSocketService = {
  sendMessage: (message) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(message);
    }
  },
  receiveMessage: (callback) => {
    ws.onmessage = (event) => callback(event.data);
  },
};
