import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Room from './components/Room';  // Import Room component

import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import { CollaborativeEditor } from './CollaborativeEditor'; // Import CollaborativeEditor
import { useParams } from 'react-router-dom'; // Import useParams to get the room ID
import Homepage from './pages/Homepage';

function App() {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
console.log(publicKey);
  return (
    <Router>
      <LiveblocksProvider publicApiKey={publicKey}>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          
          <Route
            path="/room/:id"
            element={
              <RoomWithId />
            }
          />
        </Routes>
      </LiveblocksProvider>
    </Router>
  );
}

const RoomWithId = () => {
  const { id } = useParams();  // Dynamically fetch the room ID from the URL

  if (!id) {
    return <div>No room found</div>;
  }

  return (
    <RoomProvider id={id}>
      {/* Dynamic Room Route */}
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <CollaborativeEditor />
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default App;
