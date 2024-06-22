import {
  getFirestore,
  collection,
  doc,
  setDoc,
  Timestamp,
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
  const docRef = doc(itemsCollection, item.title);
  await setDoc(docRef, {
    id: docRef.id,
    ...item,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
}
