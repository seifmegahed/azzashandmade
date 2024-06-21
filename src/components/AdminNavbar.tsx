import { useAuth } from "../context/authContext";

export default function AdminNavBar() {
  const { logout } = useAuth();
  return (
    <div className="flex justify-between items-center w-full text-2xl font-thin ">
      <div className="flex items-center">
        <p className="cursor-pointer hover:bg-white/45 p-4 text-3xl">Azza</p>
      </div>
      <div className="flex items-center">
        <div className="cursor-pointer hover:bg-white/45 p-4">Items</div>
        <div className="cursor-pointer hover:bg-white/45 p-4">Create</div>
        <div className="cursor-pointer hover:bg-white/45 p-4" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
}
