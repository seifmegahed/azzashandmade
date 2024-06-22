import { useEffect, useState } from "react";
import { GetItems, ItemTypeExtended } from "../Firestore";
import AdminNavBar from "../components/AdminNavbar";
import ItemCard from "../components/ItemCard";
import PageWrapper from "../components/PageWrapper";

export default function Store() {
  const [items, setItems] = useState<ItemTypeExtended[]>([]);

  useEffect(() => {
    GetItems().then((items) => setItems(items));
  }, []);

  return (
    <PageWrapper navbar={<AdminNavBar />}>
      <div className="w-full flex-grow flex flex-col justify-center items-center p-2 mb-4">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 w-full max-w-[800px]">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
