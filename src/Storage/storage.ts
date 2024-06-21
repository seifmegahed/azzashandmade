import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

const storage = getStorage();
const bucket = ref(storage, "images");

export async function uploadFile(file: File) {
  let filePath: string | null = null;
  let url: string | null = null;
  await uploadBytes(ref(bucket, file.name), file)
    .then(async (snapshot) => {
      const fileRef = snapshot.ref;
      await getDownloadURL(fileRef).then((downloadURL) => {
        url = downloadURL;
        filePath = fileRef.fullPath;
      });
      console.log("Upload success", snapshot);
    })
    .catch((error) => {
      console.log("Upload error", error);
    });
  if (url && filePath) {
    return { path: filePath, url: url };
  }
  return null;
}

export async function deleteFile(filePath: string) {
  const fileRef = ref(storage,filePath);
  await deleteObject(fileRef).then(() => {
    console.log("Delete success", filePath);
  });
}
