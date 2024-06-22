import AdminNavBar from "../components/AdminNavbar";
import NewItemForm from "./NewItemForm";

export default function Admin() {
  return (
    <div className="w-full bg-pink-100 text-gray-800 flex flex-col">
      <AdminNavBar />
      <div className="w-full flex-grow flex flex-col justify-center items-center p-2 mb-4">
        <NewItemForm />
      </div>
    </div>
  );
}
