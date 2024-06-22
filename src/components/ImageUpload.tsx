import { useEffect, useState } from "react";
import { deleteFile, uploadFile } from "../Storage/storage";
import Loading from "./Loading";
import DeleteIcon from "../icons/DeleteIcon";
import CloudUploadIcon from "../icons/CloudUploadIcon";

export default function ImageUpload(props: {
  onChange: ({ url, path }: { url: string; path: string }) => void;
  value: { url: string; path: string };
}) {
  const [loading, setLoading] = useState(false);
  
  const file = props.value;
  const handleChange = props.onChange;

  const handleUpload = (file: File) => {
    if (file.size > 1024 * 1024 * 4) return;
    setLoading(true);
    uploadFile(file).then((uploadStatus) => {
      if (uploadStatus == null) return;
      handleChange(uploadStatus);
      setLoading(false);
    });
  };

  const handleDelete = () => {
    if (file.path == "") return;
    setLoading(true);
    deleteFile(file.path)
      .then(() => {
        handleChange({ url: "", path: "" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const _file = event.dataTransfer.files[0];
    handleUpload(_file);
  };

  useEffect(() => {
    const inputElem = document
      .getElementById("image-upload-label")
      ?.appendChild(document.createElement("input"));
    inputElem?.setAttribute("type", "file");
    inputElem?.setAttribute("accept", "image/*");
    inputElem?.classList.add("hidden");
    inputElem?.addEventListener("change", (e) => {
      console.log(e.target, "Change");
      const target = e.target as HTMLInputElement & {
        files: FileList;
      };
      const _file = target.files[0];
      handleUpload(_file);
    });
  });

  if (file.url !== "")
    return (
      <div className="row-span-3 flex items-center justify-center w-72 h-64 border-gray-200 border-2 bg-gray-50 rounded-lg relative">
        <div
          className="text-red-400 absolute top-3 right-3 hover:scale-125 rounded-full bg-white border-1 border-gray-600 p-2 flex items-center cursor-pointer justify-center text-center"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </div>
        <img
          src={file.url}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
    );

  if (loading)
    return (
      <div className="row-span-3 flex items-center justify-center w-72 h-64 border-gray-200 border-2 bg-gray-50 rounded-lg">
        <Loading />
      </div>
    );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
      className="flex items-center justify-center w-full row-span-3 relative"
    >
      <label
        id="image-upload-label"
        className="flex flex-col items-center justify-center w-72 h-64 border-2 border-gray-200 hover:scale-105 hover:-translate-y-2 transition-all ease-in-out duration-200 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <CloudUploadIcon />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload </span>
            <span className="sm:visible hidden">or drag and drop</span>
          </p>
          <p className="text-xs text-gray-500">PNG, JPG, WEBP (MAX. 4MB)</p>
        </div>
      </label>
    </div>
  );
}
