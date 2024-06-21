import { useState } from "react";
import { useAuth } from "../context/authContext";
import { checkEmailValidity, checkPasswordValidity } from "../utils/validation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<"wrong" | "invalid">(
    "invalid"
  );

  const { login } = useAuth();

  const handleSubmit = async (_email: string, _password: string) => {
    if (!checkEmailValidity(_email) || !checkPasswordValidity(_password)) {
      setError(true);
      setErrorMessage("invalid");
    } else {
      setLoading(true);
      await login(_email, _password)
        .then(() => {
          setError(false);
        })
        .catch((loginError) => {
          setError(true);
          setErrorMessage("wrong");
          setLoading(false);
          console.log(loginError);
        });
    }
  };

  if(loading) return <div>Loading...</div>;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-pink-50">
      <div className="text-4xl font-thin p-5">Admin Login</div>
      <div className="w-full max-w-sm mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(email, password);
          }}
          className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
              <input
                className="shadow appearance-none border error:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                required
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
              <input
                className="shadow appearance-none border error:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </label>
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            <div
              className={`text-red-500 text-sm ${
                error ? "invisible" : "visible"
              }`}
            >
              {errorMessage === "invalid"
                ? "Please make sure you enter a valid Email and Password"
                : "Email or Password are wrong!"}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Azza's Handmade. All rights reserved.
        </p>
      </div>
    </div>
  );
}
