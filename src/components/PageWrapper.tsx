import { ReactNode } from "react";

export default function PageWrapper(props: { children: ReactNode; navbar: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 to-white text-gray-800 flex flex-col">
      {props.navbar}
      {props.children}
    </div>
  );
}