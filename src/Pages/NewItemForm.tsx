import { useState } from "react";
import Form from "../components/Form";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input";
import Select from "../components/Select";
import { CreateItem, ItemType } from "../Firestore";

const categories = ["Bracelet", "Neckless", "Ring", "Earring", "Pendant"];


const defaultItem: ItemType = {
  title: "",
  type: "",
  price: "",
  size: "",
  description: "",
  image: { url: "", path: "" },
};

const validateForm = (item: ItemType) => {
  const errors: string[] = [];

  if (!item.title) {
    errors.push("Title is required");
  }

  if (!item.type) {
    errors.push("Type is required");
  }

  if (!item.price) {
    errors.push("Price is required");
  }

  // if (!item.size) {
  //   errors.push("Size is required");
  // }

  // if (!item.description) {
  //   errors.push("Description is required");
  // }
  if (!item.image.url) {
    errors.push("Image is required");
  }
  return errors;
};

const handleSubmit = async (item: ItemType) => {
  const errors = validateForm(item);
  if (errors.length === 0) {
    CreateItem(item).then(() => {
      console.log("Item created");
    });
  } else {
    console.log(errors);
  }
};

export default function NewItemForm() {
  const [item, setItem] = useState(defaultItem);

  return (
    <Form>
      <ImageUpload
        value={item.image}
        onChange={(image) => setItem((prev) => ({ ...prev, image }))}
      />
      <Input
        value={item.title}
        onChange={(v) => setItem((prev) => ({ ...prev, title: v }))}
        title="Title"
        name="title"
        type="text"
        required
      />
      <Select
        value={item.type}
        onChange={(v) => setItem((prev) => ({ ...prev, type: v }))}
        title="Type"
        name="type"
        options={categories}
        required
      />
      <Input
        value={item.price}
        onChange={(v) => setItem((prev) => ({ ...prev, price: v }))}
        title="Price"
        name="price"
        type="text"
        required
      />
      <Input
        value={item.size}
        onChange={(v) => setItem((prev) => ({ ...prev, size: v }))}
        title="Size"
        name="size"
        type="text"
        required
      />
      <Input
        value={item.description}
        onChange={(v) => setItem((prev) => ({ ...prev, description: v }))}
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
          onClick={() => handleSubmit(item).then(() => setItem(defaultItem))}
        >
          Create
        </button>
      </div>
    </Form>
  );
}
