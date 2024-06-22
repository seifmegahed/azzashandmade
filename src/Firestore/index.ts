import {
  getFirestore,
  collection,
  Timestamp,
  addDoc,
  getDocs,
} from "firebase/firestore";

export type ItemType = {
  title: string;
  type: string;
  price: string;
  size: string;
  description: string;
  image: { url: string; path: string };
};

export interface ItemTypeExtended extends ItemType {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

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

export async function GetItems() {
  const items = await getDocs(itemsCollection);
  return items.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as ItemTypeExtended[];
}
