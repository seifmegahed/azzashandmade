import { useState } from "react";
import { useAuth } from "../context/authContext";
import { checkEmailValidity, checkPasswordValidity } from "../utils/validation";
import Form from "../components/Form";
import Input from "../components/Input";

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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-pink-100 text-gray-800">
      <div className="text-4xl font-thin p-5">Admin Login</div>
      <Form>
        <Input
          value={email}
          onChange={setEmail}
          title="Email"
          name="email"
          type="email"
          required
          span={2}
        />
        <Input
          value={password}
          onChange={setPassword}
          title="Password"
          name="password"
          type="password"
          required
          span={2}
        />
        <div className="flex items-center justify-between w-full gap-2 sm:col-span-2">
          <div
            className={`text-red-500 text-sm ${
              error ? "visible" : "invisible"
            }`}
          >
            {errorMessage === "invalid"
              ? "Please make sure you enter a valid Email and Password"
              : "Email or Password are wrong!"}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
            type="button"
            onClick={() => handleSubmit(email, password)}
          >
            Sign In
          </button>
        </div>
      </Form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2024 Azza's Handmade. All rights reserved.
      </p>
    </div>
  );
}
