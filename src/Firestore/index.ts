import {
  getFirestore,
  collection,
  Timestamp,
  addDoc,
} from "firebase/firestore";

export type ItemType = {
  title: string;
  type: string;
  price: string;
  size: string;
  description: string;
  image: { url: string; path: string };
};
const db = getFirestore();

const itemsCollectionName = "items";
const itemsCollection = collection(db, itemsCollectionName);

export async function CreateItem(item: ItemType) {
  await addDoc(itemsCollection, {
    ...item,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
}
