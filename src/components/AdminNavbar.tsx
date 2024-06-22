import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function AdminNavBar() {
  const { logout } = useAuth();
  return (
    <div className="flex justify-between items-center w-full sm:text-2xl text-xl font-thin ">
      <div className="flex items-center">
        <Link to="/">
          <p className="cursor-pointer hover:bg-white/45 p-4 sm:text-3xl text-2xl">
            Azza
          </p>
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/admin/items">
          <div className="cursor-pointer hover:bg-white/45 p-4">Items</div>
        </Link>
        <Link to="/admin/create">
          <div className="cursor-pointer hover:bg-white/45 p-4">Create</div>
        </Link>
        <div className="cursor-pointer hover:bg-white/45 p-4" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
}
