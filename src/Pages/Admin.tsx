import AdminNavBar from "../components/AdminNavbar";
import Form from "../components/Form";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input";
import Select from "../components/Select";

const categories = ["Bracelet", "Neckless", "Ring", "Earring", "Pendant"];

export default function Admin() {
  return (
    <div className="w-full h-screen bg-pink-100 text-gray-800 flex flex-col">
      <AdminNavBar />
      <div className="w-full flex-grow flex flex-col justify-center items-center p-2">
        <Form>
          <ImageUpload />
          <Input
            value={""}
            onChange={(v) => console.log(v)}
            title="Title"
            name="title"
            type="text"
            required
          />
          <Select title="Type" name="type" options={categories} required />
          <Input
            value={""}
            onChange={(v) => console.log(v)}
            title="Price"
            name="price"
            type="text"
            required
          />
          <Input
            value={""}
            onChange={(v) => console.log(v)}
            title="Size"
            name="size"
            type="text"
            required
          />
          <Input
            value={""}
            onChange={(v) => console.log(v)}
            title="Description"
            name="description"
            type="text"
            required
            span={2}
          />
          <div className="flex items-center sm:justify-end justify-center w-full sm:col-span-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
              type="button"
            >
              Create
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
