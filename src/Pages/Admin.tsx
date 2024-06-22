import AdminNavBar from "../components/AdminNavbar";
import PageWrapper from "../components/PageWrapper";
import NewItemForm from "./NewItemForm";

export default function Admin() {
  return (
    <PageWrapper navbar={<AdminNavBar />}>
      <div className="w-full flex-grow flex flex-col justify-center items-center p-2 mb-4">
        <NewItemForm />
      </div>
    </PageWrapper>
  );
}
