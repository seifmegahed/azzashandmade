import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import { useAuth } from "./context/authContext";
import Admin from "./Pages/Admin";
import Items from "./Pages/Items";
import Store from "./Pages/Store";

function App() {
  const { user } = useAuth();
  if (!user)
    return (
      <div className="w-screen h-screen font-inter">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    );
  else
    return (
      <div className="w-screen h-screen font-inter">
        <Routes>
          <Route path="/*" element={<Navigate to="/admin/items" />} />
          <Route path="/admin/items" element={<Items />} />
          <Route path="/admin/create" element={<Admin />} />
        </Routes>
      </div>
    );
}

export default App;
