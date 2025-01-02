# Collab Editor
A simple **collaborative text editor** built with Node.js, Express, WebSockets (`ws`), and React. Multiple users can connect and see real-time updates to a shared text document.

## Features
- **Real-time collaboration**: Changes to the text area are instantly broadcasted to all connected clients.
- **WebSockets**: Utilizes `ws` on the server side and the native WebSocket API on the client.
- **Express server**: Serves the WebSocket endpoint and can also serve static files if needed.
- **React client**: A simple front-end that connects to the server and displays a synchronized text area.

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/xMika4/collab-editor.git
cd collab-editor
```
### 2. Install Dependencies

**Root folder** (for server):
``` bash
npm install
```

**Client folder**:
```bash
cd client npm install
```

### 3. (Optional) Set Up Environment Variables
Create a file named `.env` in the **root** directory if you want to specify a custom server port. For example:
```
PORT=3000
```

### 4. Run the Server
Back at the project root:
```bash
node server.js
```

### 5. Run the Client
Open a new terminal window, go to the `client` folder, and start React:
```bash
npm start
```

## Contributing
Feel free to open an issue or submit a pull request to help improve this collaborative editor.

---

Enjoy collaborating in real-time! If you have any questions or issues, open a GitHub issue in the repository.
