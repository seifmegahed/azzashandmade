import { ReactNode } from "react";

export default function Form(props: { children: ReactNode }) {
  return (
    <div className="bg-white max-w-2xl w-full shadow-md rounded-xl p-8 grid sm:grid-cols-2 grid-cols-1 gap-6">
      {props.children}
    </div>
  );
}
