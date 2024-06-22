import { ItemTypeExtended } from "../Firestore";
import CartIcon from "../icons/CartIcon";

export default function ItemCard(props: { item: ItemTypeExtended }) {
  const { item } = props;
  return (
    <div className="group flex flex-col lg:w-64 md:w-56 hover:scale-110 hover:-translate-y-5 duration-500 ease-in-out">
      <div className="relative cursor-pointer">
        <img
          src={item.image.url}
          alt={item.title}
          className=" aspect-[9/8] w-full object-cover relative"
        />
        <div className="flex items-center absolute top-0 left-0 justify-center w-full h-full bg-white opacity-50 group-hover:visible invisible">
          <CartIcon />
        </div>
      </div>
      <p className="text-xl font-thin w-full flex justify-end">
        {item.price + " EGP"}
      </p>
    </div>
  );
}
