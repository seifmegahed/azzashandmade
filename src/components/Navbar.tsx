export default function NavBar() {
  return (
    <div className="flex justify-between items-center w-full sm:text-2xl text:xl font-thin ">
      <div className="flex items-center">
        <p className="cursor-pointer hover:bg-white/45 p-4 sm:text-3xl text-2xl">Azza</p>
      </div>
      <div className="flex items-center">
        <div className="cursor-pointer hover:bg-white/45 p-4">About</div>
        <div className="cursor-pointer hover:bg-white/45 p-4">Store</div>
        <div className="cursor-pointer hover:bg-white/45 p-4">Contact</div>
      </div>
    </div>
  );
}