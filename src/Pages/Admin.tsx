import AdminNavBar from "../components/AdminNavbar";
import Form from "../components/Form";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input";

const categories = ["Bracelet", "Neckless", "Ring", "Earring", "Pendant"];

function Select(props: {
  title: string;
  name: string;
  options: string[];
  required: boolean;
}) {
  const { title, name, options, required } = props;
  return (
    <div className="">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}
        <select
          name={name}
          required={required}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

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
