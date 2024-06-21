import AdminNavBar from "../components/AdminNavbar";
import Form from "../components/Form";
import Input from "../components/Input";

const categories = ["Bracelet", "Neckless", "Ring", "Earring", "Pendant"];

function ImageUpload() {
  return (
    <div className="flex items-center justify-center w-full row-span-2">
      <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload </span>
            <span className="sm:visible sm:relative absolute invisible">
              or drag and drop
            </span>
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          onChange={(e) => console.log(e.target.files)}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );
}

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
