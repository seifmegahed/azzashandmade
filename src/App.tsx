import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import { useAuth } from "./context/authContext";
import Admin from "./Pages/Admin";

function App() {
  const { user } = useAuth();

  return (
    <div className="w-screen h-screen font-inter">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={user ? <Admin /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
