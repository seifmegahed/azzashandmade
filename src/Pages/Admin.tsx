import AdminNavBar from "../components/AdminNavbar";
import NewItemForm from "./NewItemForm";

export default function Admin() {
  return (
    <div className="w-full h-screen bg-pink-100 text-gray-800 flex flex-col">
      <AdminNavBar />
      <NewItemForm />
    </div>
  );
}
