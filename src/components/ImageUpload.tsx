import { useEffect, useState } from "react";
import { deleteFile, uploadFile } from "../Storage/storage";
import Loading from "./Loading";
import DeleteIcon from "../icons/DeleteIcon";

function CloudUploadIcon() {
  return (
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
  );
}

export default function ImageUpload() {
  // const inputRef = useRef<HTMLInputElement>(null);
  // const handleClick = () => inputRef.current?.click();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<{
    url: string;
    path: string;
  } | null>(null);

  const handleUpload = (file: File) => {
    if (file.size > 1024 * 1024 * 4) return;

    setLoading(true);

    uploadFile(file).then((uploadStatus) => {
      console.log(uploadStatus);
      if (uploadStatus == null) return;
      setFile(uploadStatus);
      setLoading(false);
    });
  };

  const handleDelete = () => {
    if (!file) return;
    setLoading(true);
    deleteFile(file.path)
      .then(() => {
        setFile(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleUpload(file);
  };

  useEffect(() => {
    const inputElem = document.getElementById("image-upload-label")?.appendChild(
      document.createElement("input")
    );
    inputElem?.setAttribute("type", "file");
    inputElem?.setAttribute("accept", "image/*");
    inputElem?.classList.add("hidden");
    inputElem?.addEventListener("change", (e) => {
      console.log(e.target, "Change");
      const target = e.target as HTMLInputElement & {
        files: FileList;
      };
      const file = target.files[0];
      handleUpload(file);
    });
  }, []);

  if (file?.url)
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
      <label id="image-upload-label" className="flex flex-col items-center justify-center w-72 h-64 border-2 border-gray-200 hover:scale-105 hover:-translate-y-2 transition-all ease-in-out duration-200 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
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
